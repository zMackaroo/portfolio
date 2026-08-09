import Image from "next/image";
import { aboutContent } from "@/data/about";
import { heroContent } from "@/data/hero";

export function About() {
  return (
    <section id="about" className="about-cinematic" data-scene="002">
      <div className="wrap">
        <div className="scene-tag reveal">{aboutContent.sceneTag}</div>
        <div className="about-grid">
          <div className="about-portrait reveal" data-parallax="-0.06">
            <div className="about-portrait-frame">
              <Image
                src={heroContent.avatar.src}
                alt={`Portrait of ${heroContent.nameLine1} ${heroContent.nameLine2Before}${heroContent.nameLine2Accent}`}
                width={heroContent.avatar.width}
                height={heroContent.avatar.height}
                className="about-portrait-img"
              />
              <span className="about-portrait-grade" aria-hidden />
            </div>
            <div className="frame-label">{aboutContent.frameLabel}</div>
          </div>
          <div>
            <h2 className="serif-heading reveal">
              {aboutContent.headingBefore}
              <br />a <em>{aboutContent.headingAccent}</em>
              {aboutContent.headingAfter}
              <br />
              {aboutContent.headingLine3}
            </h2>
            <p className="lead reveal d1">{aboutContent.lead}</p>
            <p className="reveal d2">{aboutContent.body}</p>
            <p className="reveal d2">{aboutContent.closing}</p>
            <div className="about-meta reveal d3">
              {aboutContent.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <div className="num">{stat.value}</div>
                  <div className="lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
