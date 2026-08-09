import {
  cinemaToolkit,
  engineeringToolkit,
  skillsContent,
} from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="toolkit" data-scene="007">
      <div className="wrap">
        <div className="scene-tag reveal">{skillsContent.sceneTag}</div>
        <div className="toolkit-grid">
          <div className="tk-col reveal">
            <h3>{skillsContent.engineeringTitle}</h3>
            <ul className="tk-list">
              {engineeringToolkit.map((item) => (
                <li key={item.id}>
                  {item.name} <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tk-col reveal d1">
            <h3>{skillsContent.cinemaTitle}</h3>
            <ul className="tk-list">
              {cinemaToolkit.map((item) => (
                <li key={item.id}>
                  {item.name} <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
