import * as THREE from "three";

const BG_COLOR = 0x0d0b1e;
const PURPLE = 0x7c3aed;
const PURPLE_LIGHT = 0x9d5cf6;
const ACCENT = 0xc084fc;
const CORE_HOT = 0xe9d5ff;

export type TimelineSceneOptions = {
  canvas: HTMLCanvasElement;
  entryCount: number;
  isMobile: boolean;
  reducedMotion: boolean;
};

type Electron = {
  mesh: THREE.Mesh;
  shellIndex: number;
  angle: number;
  speed: number;
  radius: number;
  tilt: number;
};

type CareerAtom = {
  group: THREE.Group;
  nucleus: THREE.Mesh;
  glow: THREE.Mesh;
  shells: THREE.Mesh[];
  electrons: Electron[];
  bond: THREE.Mesh | null;
  light: THREE.PointLight;
  careerIndex: number;
  targetScale: number;
  currentScale: number;
};

function createSoftCircleTexture(innerColor: string, size = 32): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, innerColor);
  gradient.addColorStop(0.45, innerColor);
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createStarField(
  count: number,
  spread: number,
  starTexture: THREE.Texture,
): THREE.Points {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 1.2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;

    const color = new THREE.Color().setHSL(
      0.7 + Math.random() * 0.15,
      0.45 + Math.random() * 0.35,
      0.6 + Math.random() * 0.3,
    );
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    map: starTexture,
    size: 0.26,
    transparent: true,
    opacity: 0.7,
    vertexColors: true,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    alphaTest: 0.02,
  });

  return new THREE.Points(geometry, material);
}

export class TimelineScene {
  private readonly canvas: HTMLCanvasElement;
  private readonly entryCount: number;
  private readonly isMobile: boolean;
  private readonly reducedMotion: boolean;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private contentGroup!: THREE.Group;
  private atoms: CareerAtom[] = [];
  private ambientParticles!: THREE.Points;
  private ambientPositions!: Float32Array;
  private starTexture!: THREE.CanvasTexture;

  private activeIndex = 0;
  private sectionProgress = 0;
  private time = 0;
  private animationId: number | null = null;
  private disposed = false;

  private readonly disposables: Array<THREE.BufferGeometry | THREE.Material | THREE.Texture> =
    [];

  constructor(options: TimelineSceneOptions) {
    this.canvas = options.canvas;
    this.entryCount = Math.max(1, options.entryCount);
    this.isMobile = options.isMobile;
    this.reducedMotion = options.reducedMotion;

    this.starTexture = createSoftCircleTexture("rgba(255,255,255,1)");
    this.trackDisposable(this.starTexture);

    this.initRenderer();
    this.initScene();
    this.initLights();
    this.initStars();
    this.contentGroup = new THREE.Group();
    this.scene.add(this.contentGroup);
    this.initAtoms();
    this.initAmbientParticles();
    this.applyLayout();
    this.resize();
    this.setActiveIndex(0);
    this.startLoop();
  }

  setActiveIndex(timelineIndex: number): void {
    if (this.disposed) return;
    this.activeIndex = THREE.MathUtils.clamp(timelineIndex, 0, this.entryCount - 1);
    this.updateAtomVisibility();
  }

  setSectionProgress(progress: number): void {
    if (this.disposed) return;
    this.sectionProgress = THREE.MathUtils.clamp(progress, 0, 1);

    const cameraY = (this.sectionProgress - 0.5) * 1.4;
    this.camera.position.y = cameraY;
    this.camera.lookAt(this.contentGroup.position.x, cameraY, 0);
  }

  destroy(): void {
    if (this.disposed) return;
    this.disposed = true;

    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    window.removeEventListener("resize", this.handleResize);
    this.disposables.forEach((item) => item.dispose());
    this.disposables.length = 0;
    this.renderer.dispose();
  }

  /** Timeline index 0 = newest role; career index 0 = career start (oldest). */
  private timelineToCareerIndex(timelineIndex: number): number {
    return this.entryCount - 1 - timelineIndex;
  }

  private careerY(careerIndex: number): number {
    const t = this.entryCount === 1 ? 0.5 : careerIndex / (this.entryCount - 1);
    return -3.6 + t * 7.2;
  }

  private initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(BG_COLOR, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }

  private initScene(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    this.camera.position.set(0, 0, this.isMobile ? 12 : 10);
    this.camera.lookAt(0, 0, 0);
  }

  private initLights(): void {
    const ambient = new THREE.AmbientLight(PURPLE_LIGHT, 0.3);
    const key = new THREE.DirectionalLight(0xffffff, 0.55);
    key.position.set(4, 6, 8);

    this.scene.add(ambient, key);
  }

  private initStars(): void {
    const count = this.isMobile ? 280 : 550;
    const stars = createStarField(count, 26, this.starTexture);
    this.trackDisposable(stars.geometry as THREE.BufferGeometry);
    this.trackDisposable(stars.material as THREE.Material);
    stars.position.z = -5;
    this.scene.add(stars);
  }

  private createAtom(careerIndex: number): CareerAtom {
    const group = new THREE.Group();
    const y = this.careerY(careerIndex);
    group.position.set(0, y, 0);

    const maturity = (careerIndex + 1) / this.entryCount;
    const nucleusRadius = 0.14 + maturity * 0.14;
    const targetScale = 0.65 + maturity * 0.55;

    const nucleusGeometry = new THREE.SphereGeometry(nucleusRadius, 32, 32);
    this.trackDisposable(nucleusGeometry);

    const nucleusMaterial = new THREE.MeshStandardMaterial({
      color: CORE_HOT,
      emissive: PURPLE_LIGHT,
      emissiveIntensity: 0.55 + maturity * 0.5,
      metalness: 0.35,
      roughness: 0.25,
    });
    this.trackDisposable(nucleusMaterial);

    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    group.add(nucleus);

    const glowGeometry = new THREE.SphereGeometry(nucleusRadius * 1.85, 24, 24);
    this.trackDisposable(glowGeometry);

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: PURPLE_LIGHT,
      transparent: true,
      opacity: 0.12 + maturity * 0.1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.trackDisposable(glowMaterial);

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    const shellCount = careerIndex + 1;
    const shells: THREE.Mesh[] = [];
    const electrons: Electron[] = [];

    const shellMaterial = new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.14,
      wireframe: true,
    });
    this.trackDisposable(shellMaterial);

    const electronGeometry = new THREE.SphereGeometry(0.045, 10, 10);
    this.trackDisposable(electronGeometry);

    for (let shell = 0; shell < shellCount; shell++) {
      const shellRadius = nucleusRadius + 0.35 + shell * 0.38;
      const ringGeometry = new THREE.TorusGeometry(shellRadius, 0.008, 8, 48);
      this.trackDisposable(ringGeometry);

      const ring = new THREE.Mesh(ringGeometry, shellMaterial.clone());
      this.trackDisposable(ring.material as THREE.Material);
      ring.rotation.x = Math.PI / 2 + shell * 0.35;
      ring.rotation.y = shell * 0.5;
      group.add(ring);
      shells.push(ring);

      const electronCount = 2 + shell;
      for (let e = 0; e < electronCount; e++) {
        const electronMaterial = new THREE.MeshStandardMaterial({
          color: ACCENT,
          emissive: PURPLE_LIGHT,
          emissiveIntensity: 0.7,
          metalness: 0.4,
          roughness: 0.2,
        });
        this.trackDisposable(electronMaterial);

        const mesh = new THREE.Mesh(electronGeometry, electronMaterial);
        group.add(mesh);

        electrons.push({
          mesh,
          shellIndex: shell,
          angle: (e / electronCount) * Math.PI * 2 + shell * 0.7,
          speed: 0.55 + shell * 0.18 + e * 0.05,
          radius: shellRadius,
          tilt: shell * 0.55 + e * 0.2,
        });
      }
    }

    const light = new THREE.PointLight(PURPLE_LIGHT, 0.4 + maturity * 0.8, 5);
    group.add(light);

    this.contentGroup.add(group);

    return {
      group,
      nucleus,
      glow,
      shells,
      electrons,
      bond: null,
      light,
      careerIndex,
      targetScale,
      currentScale: 0.01,
    };
  }

  private initAtoms(): void {
    for (let careerIndex = 0; careerIndex < this.entryCount; careerIndex++) {
      const atom = this.createAtom(careerIndex);
      this.atoms.push(atom);
    }

    this.createBonds();
  }

  private createBonds(): void {
    const bondMaterial = new THREE.MeshBasicMaterial({
      color: PURPLE_LIGHT,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    this.trackDisposable(bondMaterial);

    for (let i = 1; i < this.atoms.length; i++) {
      const prev = this.atoms[i - 1]!;
      const curr = this.atoms[i]!;

      const start = prev.group.position.clone();
      const end = curr.group.position.clone();
      const mid = start.clone().add(end).multiplyScalar(0.5);
      const length = start.distanceTo(end);
      const direction = end.clone().sub(start).normalize();

      const bondGeometry = new THREE.CylinderGeometry(0.02, 0.02, length, 8);
      this.trackDisposable(bondGeometry);

      const bond = new THREE.Mesh(bondGeometry, bondMaterial.clone());
      this.trackDisposable(bond.material as THREE.Material);
      bond.position.copy(mid);
      bond.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction,
      );
      bond.scale.y = 0.01;

      curr.bond = bond;
      this.contentGroup.add(bond);
    }
  }

  private initAmbientParticles(): void {
    const count = this.isMobile ? 60 : 100;
    this.ambientPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      this.ambientPositions[i * 3] = (Math.random() - 0.5) * 14;
      this.ambientPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      this.ambientPositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.ambientPositions, 3),
    );
    this.trackDisposable(geometry);

    const material = new THREE.PointsMaterial({
      map: this.starTexture,
      size: 0.1,
      color: ACCENT,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    this.trackDisposable(material);

    this.ambientParticles = new THREE.Points(geometry, material);
    this.contentGroup.add(this.ambientParticles);
  }

  private applyLayout(): void {
    const offsetX = this.isMobile ? -3.2 : 0;
    this.contentGroup.position.set(offsetX, 0, 0);
  }

  private updateAtomVisibility(): void {
    const maxCareerIndex = this.entryCount - 1 - this.activeIndex;
    const activeCareerIndex = this.timelineToCareerIndex(this.activeIndex);

    this.atoms.forEach((atom) => {
      const isVisible = atom.careerIndex <= maxCareerIndex;
      const isActive = atom.careerIndex === activeCareerIndex;
      const isPast = atom.careerIndex < activeCareerIndex;
      const maturity = (atom.careerIndex + 1) / this.entryCount;

      atom.targetScale = !isVisible
        ? 0.01
        : isActive
          ? (0.75 + maturity * 0.6) * 1.12
          : 0.65 + maturity * 0.55;

      const nucleusMaterial = atom.nucleus.material as THREE.MeshStandardMaterial;
      const targetEmissive = !isVisible
        ? 0.1
        : isActive
          ? 1.35
          : isPast
            ? 0.65
            : 0.2;
      nucleusMaterial.emissiveIntensity = THREE.MathUtils.lerp(
        nucleusMaterial.emissiveIntensity,
        targetEmissive,
        0.1,
      );

      atom.light.intensity = THREE.MathUtils.lerp(
        atom.light.intensity,
        !isVisible ? 0 : isActive ? 2.4 : isPast ? 0.5 : 0.15,
        0.1,
      );

      const glowMaterial = atom.glow.material as THREE.MeshBasicMaterial;
      glowMaterial.opacity = THREE.MathUtils.lerp(
        glowMaterial.opacity,
        !isVisible ? 0 : isActive ? 0.35 : 0.12,
        0.1,
      );

      atom.shells.forEach((shell, shellIndex) => {
        const shellMaterial = shell.material as THREE.MeshBasicMaterial;
        shellMaterial.opacity = isVisible
          ? isActive
            ? 0.22 + shellIndex * 0.04
            : isPast
              ? 0.14
              : 0.05
          : 0;
      });

      if (atom.bond) {
        const prevVisible = atom.careerIndex > 0 && atom.careerIndex - 1 <= maxCareerIndex;
        const bondTarget = isVisible && prevVisible ? 1 : 0;
        atom.bond.scale.y = THREE.MathUtils.lerp(atom.bond.scale.y, bondTarget, 0.08);
        const bondMat = atom.bond.material as THREE.MeshBasicMaterial;
        bondMat.opacity =
          isVisible && prevVisible ? (isActive ? 0.45 : 0.22) : 0;
      }
    });
  }

  private animateElectrons(atom: CareerAtom, isActive: boolean, isVisible: boolean): void {
    if (!isVisible) return;

    const speedMult = isActive ? 1.35 : 0.85;

    atom.electrons.forEach((electron) => {
      electron.angle += electron.speed * 0.016 * speedMult * (this.reducedMotion ? 0.2 : 1);

      const wobble = Math.sin(this.time * 2 + electron.tilt) * 0.08;
      const r = electron.radius + wobble;
      const shellTilt = electron.shellIndex * 0.55;

      electron.mesh.position.set(
        Math.cos(electron.angle + shellTilt) * r,
        Math.sin(electron.angle * 0.9) * r * 0.35,
        Math.sin(electron.angle + shellTilt) * r * 0.65,
      );

      const electronMat = electron.mesh.material as THREE.MeshStandardMaterial;
      electronMat.emissiveIntensity = isActive ? 1.1 : 0.5;
    });

    atom.shells.forEach((shell, i) => {
      shell.rotation.z += 0.004 * (i + 1) * (isActive ? 1.4 : 0.7);
    });
  }

  private updateAmbientParticles(): void {
    const positions = this.ambientParticles.geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;

    for (let i = 0; i < this.ambientPositions.length / 3; i++) {
      const i3 = i * 3;
      this.ambientPositions[i3 + 1]! += 0.008;
      if (this.ambientPositions[i3 + 1]! > 7) {
        this.ambientPositions[i3 + 1]! = -7;
      }
    }

    positions.needsUpdate = true;
  }

  private startLoop(): void {
    const tick = () => {
      if (this.disposed) return;

      this.time += 0.016;
      const activeCareerIndex = this.timelineToCareerIndex(this.activeIndex);
      const maxCareerIndex = this.entryCount - 1 - this.activeIndex;

      this.atoms.forEach((atom) => {
        const isVisible = atom.careerIndex <= maxCareerIndex;
        const isActive = atom.careerIndex === activeCareerIndex;

        atom.currentScale = THREE.MathUtils.lerp(
          atom.currentScale,
          isVisible ? atom.targetScale : 0.01,
          isVisible ? 0.07 : 0.12,
        );
        atom.group.scale.setScalar(atom.currentScale);

        const pulse = isActive ? 1 + Math.sin(this.time * 3.5) * 0.06 : 1;
        atom.nucleus.scale.setScalar(pulse);
        atom.glow.scale.setScalar(pulse * 1.05);
        atom.glow.rotation.y += 0.006;

        this.animateElectrons(atom, isActive, isVisible);
      });

      if (!this.reducedMotion) {
        this.updateAmbientParticles();
      }

      this.renderer.render(this.scene, this.camera);
      this.animationId = requestAnimationFrame(tick);
    };

    this.animationId = requestAnimationFrame(tick);
    window.addEventListener("resize", this.handleResize);
  }

  private handleResize = (): void => {
    this.resize();
  };

  private resize(): void {
    const { clientWidth, clientHeight } = this.canvas.parentElement ?? this.canvas;
    if (clientWidth === 0 || clientHeight === 0) return;

    this.renderer.setSize(clientWidth, clientHeight, false);
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.applyLayout();
  }

  private trackDisposable(
    item: THREE.BufferGeometry | THREE.Material | THREE.Texture,
  ): void {
    this.disposables.push(item);
  }
}
