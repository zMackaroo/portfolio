import { contactContent, socialLinks } from "@/data/contact";

export function Contact() {
  return (
    <section id="contact" className="contact-cinematic" data-scene="008">
      <div className="glow" aria-hidden />
      <div className="wrap">
        <div className="scene-tag center reveal">{contactContent.sceneTag}</div>
        <h2 className="reveal">
          {contactContent.headingBefore}
          <br />
          {contactContent.headingLine2}
          <em>
            {contactContent.headingAccent}
            <br />
            {contactContent.headingLine3}
          </em>
        </h2>
        <a href={`mailto:${contactContent.email}`} className="email reveal d1">
          {contactContent.email}
        </a>
        <div className="socials reveal d2">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
