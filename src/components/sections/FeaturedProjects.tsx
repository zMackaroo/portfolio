"use client";

import { useEffect, useRef, useState } from "react";
import { projects, projectsContent } from "@/data/projects";

export function FeaturedProjects() {
  const thumbRef = useRef<HTMLImageElement>(null);
  const [activeSrc, setActiveSrc] = useState("");
  const [visible, setVisible] = useState(false);
  const pos = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      const p = pos.current;
      p.cx += (p.tx - p.cx) * 0.12;
      p.cy += (p.ty - p.cy) * 0.12;
      const thumb = thumbRef.current;
      if (thumb && hovering.current) {
        thumb.style.left = `${p.cx}px`;
        thumb.style.top = `${p.cy}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="featured-projects" className="reel" data-scene="005">
      <div className="wrap">
        <div className="reel-head">
          <div>
            <div className="scene-tag reveal">{projectsContent.sceneTag}</div>
            <h2 className="serif-heading reveal" style={{ marginBottom: 0 }}>
              {projectsContent.heading}
            </h2>
          </div>
          <p className="reveal d1">{projectsContent.intro}</p>
        </div>
        <div className="reel-list">
          {projects.map((project, index) => {
            const href =
              project.liveUrl !== "#" ? project.liveUrl : project.githubUrl;
            return (
              <a
                key={project.id}
                className="film reveal"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={() => {
                  setActiveSrc(project.image);
                  setVisible(true);
                  hovering.current = true;
                }}
                onMouseLeave={() => {
                  setVisible(false);
                  hovering.current = false;
                }}
              >
                <span className="idx">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="title">{project.title}</span>
                <span className="desc">{project.description}</span>
                <span className="go">{project.tag} →</span>
              </a>
            );
          })}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={thumbRef}
        className={`thumb${visible ? " visible" : ""}`}
        src={activeSrc || undefined}
        alt=""
        aria-hidden
      />
    </section>
  );
}
