import * as THREE from "three";

const BG_COLOR = 0x0d0b1e;
const ROCKET_BODY = 0xe8e0f5;
const ROCKET_ACCENT = 0x7c3aed;
const ROCKET_FIN = 0x5b21b6;
const ROCKET_TRIM = 0xc4b5fd;
const ENGINE_COLOR = 0xff6b35;
const ENGINE_HOT = 0xffd166;

export type RocketSceneOptions = {
  canvas: HTMLCanvasElement;
  isMobile: boolean;
  reducedMotion: boolean;
};

type StarLayerData = {
  points: THREE.Points;
  parallax: number;
  baseY: Float32Array;
};

function createSoftCircleTexture(
  innerColor: string,
  outerAlpha = 0,
  size = 64,
): THREE.CanvasTexture {
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
  gradient.addColorStop(0.35, innerColor);
  gradient.addColorStop(1, `rgba(255,255,255,${outerAlpha})`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createNebulaTexture(innerColor: string): THREE.CanvasTexture {
  return createSoftCircleTexture(innerColor, 0, 256);
}

function createStarLayer(
  count: number,
  size: number,
  spreadX: number,
  spreadY: number,
  starTexture: THREE.Texture,
  hueRange: [number, number],
): StarLayerData {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spreadX;
    positions[i * 3 + 1] = Math.random() * spreadY - 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

    const hue = hueRange[0] + Math.random() * (hueRange[1] - hueRange[0]);
    const saturation = 0.55 + Math.random() * 0.35;
    const lightness = 0.72 + Math.random() * 0.22;
    const color = new THREE.Color().setHSL(hue, saturation, lightness);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    map: starTexture,
    size,
    transparent: true,
    opacity: 0.92,
    sizeAttenuation: true,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    alphaTest: 0.01,
  });

  return {
    points: new THREE.Points(geometry, material),
    parallax: 0,
    baseY: positions.slice(),
  };
}

function createFinGeometry(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.42, 0);
  shape.quadraticCurveTo(0.48, 0.35, 0.28, 0.78);
  shape.lineTo(0.06, 0.72);
  shape.quadraticCurveTo(0, 0.4, 0, 0);
  shape.closePath();

  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.06,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.02,
    bevelSegments: 2,
  });
}

export class RocketScene {
  private readonly canvas: HTMLCanvasElement;
  private readonly isMobile: boolean;
  private readonly reducedMotion: boolean;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private rocketGroup!: THREE.Group;
  private engineLight!: THREE.PointLight;
  private engineCoreLight!: THREE.PointLight;
  private starLayers: StarLayerData[] = [];
  private nebulae: THREE.Sprite[] = [];
  private nebulaBaseY: number[] = [];
  private exhaustPoints!: THREE.Points;
  private exhaustPositions!: Float32Array;
  private exhaustVelocities!: Float32Array;
  private exhaustLife!: Float32Array;
  private starTexture!: THREE.CanvasTexture;
  private exhaustTexture!: THREE.CanvasTexture;

  private progress = 0;
  private time = 0;
  private baseEngineIntensity = 1.5;
  private animationId: number | null = null;
  private disposed = false;

  private readonly disposables: Array<THREE.BufferGeometry | THREE.Material | THREE.Texture> =
    [];

  constructor(options: RocketSceneOptions) {
    this.canvas = options.canvas;
    this.isMobile = options.isMobile;
    this.reducedMotion = options.reducedMotion;

    this.starTexture = createSoftCircleTexture("rgba(255,255,255,1)", 0, 32);
    this.exhaustTexture = createSoftCircleTexture("rgba(255,200,120,1)", 0, 32);
    this.trackDisposable(this.starTexture);
    this.trackDisposable(this.exhaustTexture);

    this.initRenderer();
    this.initScene();
    this.initLights();
    this.initStars();
    this.initNebulae();
    this.initRocket();
    this.initExhaust();
    this.resize();
    this.startLoop();

    if (this.reducedMotion) {
      this.setProgress(0.5);
    }
  }

  setProgress(progress: number): void {
    if (this.disposed) return;

    const p = this.reducedMotion ? 0.5 : THREE.MathUtils.clamp(progress, 0, 1);
    this.progress = p;

    let rocketY = -4;
    let rocketScale = 1;
    let engineIntensity = 1.5;

    if (p <= 0.05) {
      rocketY = -4;
    } else if (p <= 0.85) {
      const t = (p - 0.05) / 0.8;
      rocketY = -4 + t * 10;
    } else {
      const t = (p - 0.85) / 0.15;
      rocketY = 6 + t * 2;
      rocketScale = 1 + t * 0.15;
      engineIntensity = 1.5 + t * 4.5;
    }

    const scale = rocketScale * (this.isMobile ? 0.7 : 1);
    this.rocketGroup.position.y = rocketY;
    this.rocketGroup.rotation.z = Math.sin(p * Math.PI * 6) * 0.08;
    this.rocketGroup.rotation.x = Math.sin(p * Math.PI * 4) * 0.04;
    this.rocketGroup.scale.setScalar(scale);
    this.baseEngineIntensity = engineIntensity;
    this.engineLight.intensity = engineIntensity;
    this.engineCoreLight.intensity = engineIntensity * 0.6;

    const parallaxShift = p * 10;
    const parallaxMultipliers = [0.1, 0.3, 0.7];

    this.starLayers.forEach((layer, index) => {
      const positions = layer.points.geometry.getAttribute(
        "position",
      ) as THREE.BufferAttribute;
      const mult = parallaxMultipliers[index] ?? 0.1;

      for (let i = 0; i < layer.baseY.length / 3; i++) {
        positions.array[i * 3 + 1] = layer.baseY[i * 3 + 1]! - parallaxShift * mult;
      }

      positions.needsUpdate = true;
    });

    this.nebulae.forEach((sprite, index) => {
      sprite.position.y = this.nebulaBaseY[index]! - parallaxShift * 0.05;
    });
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

  private initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(BG_COLOR, 1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(BG_COLOR);
    this.scene.fog = new THREE.FogExp2(BG_COLOR, 0.028);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
    this.camera.position.set(0, 0, 10);
  }

  private initLights(): void {
    const ambient = new THREE.AmbientLight(0x9d5cf6, 0.35);
    const key = new THREE.DirectionalLight(0xffffff, 1);
    key.position.set(4, 8, 6);

    const fill = new THREE.DirectionalLight(0x7c3aed, 0.45);
    fill.position.set(-6, 2, 4);

    const rim = new THREE.DirectionalLight(0xc4b5fd, 0.35);
    rim.position.set(0, -4, -8);

    this.engineLight = new THREE.PointLight(ENGINE_COLOR, 1.5, 14);
    this.engineLight.position.set(0, -2.45, 0.2);

    this.engineCoreLight = new THREE.PointLight(ENGINE_HOT, 0.8, 6);
    this.engineCoreLight.position.set(0, -2.2, 0);

    this.scene.add(ambient, key, fill, rim, this.engineLight, this.engineCoreLight);
  }

  private initStars(): void {
    const configs = this.isMobile
      ? [
          { count: 800, size: 0.35, hue: [0.72, 0.82] as [number, number] },
          { count: 300, size: 0.65, hue: [0.68, 0.78] as [number, number] },
          { count: 80, size: 1.2, hue: [0.62, 0.72] as [number, number] },
        ]
      : [
          { count: 2000, size: 0.35, hue: [0.72, 0.85] as [number, number] },
          { count: 800, size: 0.7, hue: [0.68, 0.8] as [number, number] },
          { count: 200, size: 1.35, hue: [0.6, 0.75] as [number, number] },
        ];

    const multipliers = [0.1, 0.3, 0.7];

    this.starLayers = configs.map((config, index) => {
      const layer = createStarLayer(
        config.count,
        config.size,
        40,
        110,
        this.starTexture,
        config.hue,
      );
      layer.parallax = multipliers[index] ?? 0.1;
      this.trackDisposable(layer.points.geometry as THREE.BufferGeometry);
      this.trackDisposable(layer.points.material as THREE.Material);
      this.scene.add(layer.points);
      return layer;
    });
  }

  private initNebulae(): void {
    const colors = ["#7c3aed", "#4f46e5", "#7c3aed", "#6366f1", "#7c3aed", "#4f46e5"];
    const count = this.isMobile ? 5 : 7;

    for (let i = 0; i < count; i++) {
      const texture = createNebulaTexture(colors[i % colors.length] ?? "#7c3aed");
      this.trackDisposable(texture);

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.15,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      this.trackDisposable(material);

      const sprite = new THREE.Sprite(material);
      const scale = 8 + Math.random() * 12;
      sprite.scale.set(scale, scale, 1);
      sprite.position.set(
        (Math.random() - 0.5) * 30,
        Math.random() * 70 - 15,
        -8 - Math.random() * 5,
      );

      this.nebulaBaseY.push(sprite.position.y);
      this.nebulae.push(sprite);
      this.scene.add(sprite);
    }
  }

  private initRocket(): void {
    this.rocketGroup = new THREE.Group();

    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: ROCKET_BODY,
      metalness: 0.55,
      roughness: 0.35,
    });
    const accentMaterial = new THREE.MeshStandardMaterial({
      color: ROCKET_ACCENT,
      metalness: 0.6,
      roughness: 0.4,
    });
    const finMaterial = new THREE.MeshStandardMaterial({
      color: ROCKET_FIN,
      metalness: 0.5,
      roughness: 0.45,
    });
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: ROCKET_TRIM,
      metalness: 0.75,
      roughness: 0.25,
    });
    const nozzleMaterial = new THREE.MeshStandardMaterial({
      color: 0x4a4458,
      metalness: 0.85,
      roughness: 0.2,
    });

    [bodyMaterial, accentMaterial, finMaterial, trimMaterial, nozzleMaterial].forEach(
      (m) => this.trackDisposable(m),
    );

    const lowerBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.52, 1.35, 24),
      bodyMaterial,
    );
    this.trackDisposable(lowerBody.geometry);
    lowerBody.position.y = -0.55;

    const upperBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.36, 0.42, 1.15, 24),
      bodyMaterial,
    );
    this.trackDisposable(upperBody.geometry);
    upperBody.position.y = 0.65;

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.36, 1.05, 24), bodyMaterial);
    this.trackDisposable(nose.geometry);
    nose.position.y = 1.75;

    const noseCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2),
      trimMaterial,
    );
    this.trackDisposable(noseCap.geometry);
    noseCap.position.y = 2.28;
    noseCap.rotation.x = Math.PI;

    const stripe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.44, 0.44, 0.12, 24),
      accentMaterial,
    );
    this.trackDisposable(stripe.geometry);
    stripe.position.y = 0.05;

    const stripeLower = new THREE.Mesh(
      new THREE.CylinderGeometry(0.53, 0.53, 0.08, 24),
      accentMaterial,
    );
    this.trackDisposable(stripeLower.geometry);
    stripeLower.position.y = -0.95;

    const windowFrame = new THREE.Mesh(
      new THREE.TorusGeometry(0.14, 0.025, 12, 24),
      trimMaterial,
    );
    this.trackDisposable(windowFrame.geometry);
    windowFrame.position.set(0, 0.55, 0.38);
    windowFrame.rotation.x = Math.PI / 2;

    const windowGlass = new THREE.Mesh(
      new THREE.CircleGeometry(0.11, 24),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0ea5e9,
        emissiveIntensity: 0.85,
        metalness: 0.2,
        roughness: 0.1,
      }),
    );
    this.trackDisposable(windowGlass.geometry);
    this.trackDisposable(windowGlass.material as THREE.Material);
    windowGlass.position.set(0, 0.55, 0.39);

    const nozzle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.32, 0.45, 24, 1, true),
      nozzleMaterial,
    );
    this.trackDisposable(nozzle.geometry);
    nozzle.position.y = -1.42;

    const nozzleRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.24, 0.04, 12, 24),
      trimMaterial,
    );
    this.trackDisposable(nozzleRing.geometry);
    nozzleRing.position.y = -1.18;
    nozzleRing.rotation.x = Math.PI / 2;

    const finGeometry = createFinGeometry();
    this.trackDisposable(finGeometry);

    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(finGeometry, finMaterial);
      const angle = (i / 3) * Math.PI * 2;
      fin.position.set(Math.cos(angle) * 0.48, -1.05, Math.sin(angle) * 0.48);
      fin.rotation.y = -angle + Math.PI / 2;
      fin.rotation.z = -0.12;
      this.rocketGroup.add(fin);
    }

    this.rocketGroup.add(
      lowerBody,
      upperBody,
      nose,
      noseCap,
      stripe,
      stripeLower,
      windowFrame,
      windowGlass,
      nozzle,
      nozzleRing,
    );

    this.rocketGroup.position.y = -4;
    this.scene.add(this.rocketGroup);
  }

  private initExhaust(): void {
    const count = 280;
    this.exhaustPositions = new Float32Array(count * 3);
    this.exhaustVelocities = new Float32Array(count * 3);
    this.exhaustLife = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      this.resetExhaustParticle(i);
      this.exhaustLife[i] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(this.exhaustPositions, 3),
    );

    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const color = new THREE.Color().lerpColors(
        new THREE.Color(ENGINE_HOT),
        new THREE.Color(ENGINE_COLOR),
        t,
      );
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.trackDisposable(geometry);

    const material = new THREE.PointsMaterial({
      map: this.exhaustTexture,
      size: 0.18,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      sizeAttenuation: true,
      alphaTest: 0.02,
    });
    this.trackDisposable(material);

    this.exhaustPoints = new THREE.Points(geometry, material);
    this.rocketGroup.add(this.exhaustPoints);
  }

  private resetExhaustParticle(index: number): void {
    const i3 = index * 3;
    const spread = 0.22;
    this.exhaustPositions[i3] = (Math.random() - 0.5) * spread;
    this.exhaustPositions[i3 + 1] = -1.55;
    this.exhaustPositions[i3 + 2] = (Math.random() - 0.5) * spread;

    this.exhaustVelocities[i3] = (Math.random() - 0.5) * 0.025;
    this.exhaustVelocities[i3 + 1] = -0.04 - Math.random() * 0.05;
    this.exhaustVelocities[i3 + 2] = (Math.random() - 0.5) * 0.025;
    this.exhaustLife[index] = 1;
  }

  private updateExhaust(): void {
    const positions = this.exhaustPoints.geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;
    const colors = this.exhaustPoints.geometry.getAttribute(
      "color",
    ) as THREE.BufferAttribute;

    const hot = new THREE.Color(ENGINE_HOT);
    const warm = new THREE.Color(ENGINE_COLOR);
    const dim = new THREE.Color(0x991b1b);
    const temp = new THREE.Color();

    for (let i = 0; i < this.exhaustPositions.length / 3; i++) {
      const i3 = i * 3;
      this.exhaustPositions[i3]! += this.exhaustVelocities[i3]!;
      this.exhaustPositions[i3 + 1]! += this.exhaustVelocities[i3 + 1]!;
      this.exhaustPositions[i3 + 2]! += this.exhaustVelocities[i3 + 2]!;

      this.exhaustLife[i] = Math.max(0, this.exhaustLife[i]! - 0.018);
      const life = this.exhaustLife[i]!;

      if (life <= 0 || this.exhaustPositions[i3 + 1]! < -3) {
        this.resetExhaustParticle(i);
        continue;
      }

      temp.lerpColors(warm, dim, 1 - life);
      if (life > 0.65) {
        temp.lerp(hot, (life - 0.65) / 0.35);
      }

      colors.array[i3] = temp.r;
      colors.array[i3 + 1] = temp.g;
      colors.array[i3 + 2] = temp.b;
    }

    positions.needsUpdate = true;
    colors.needsUpdate = true;
  }

  private updateStarTwinkle(): void {
    const twinkle = 0.85 + Math.sin(this.time * 2.5) * 0.08;

    this.starLayers.forEach((layer, layerIndex) => {
      const material = layer.points.material as THREE.PointsMaterial;
      const layerPulse = twinkle + Math.sin(this.time * 1.8 + layerIndex) * 0.05;
      material.opacity = THREE.MathUtils.clamp(layerPulse, 0.7, 1);
    });
  }

  private startLoop(): void {
    const tick = () => {
      if (this.disposed) return;

      this.time += 0.016;
      const flicker = Math.sin(this.time * 12) * 0.25 + Math.sin(this.time * 23) * 0.1;
      this.engineLight.intensity = this.baseEngineIntensity + flicker;
      this.engineCoreLight.intensity = this.baseEngineIntensity * 0.55 + flicker * 0.5;

      if (!this.reducedMotion) {
        this.updateExhaust();
        this.updateStarTwinkle();
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
  }

  private trackDisposable(
    item: THREE.BufferGeometry | THREE.Material | THREE.Texture,
  ): void {
    this.disposables.push(item);
  }
}
