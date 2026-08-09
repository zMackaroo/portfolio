import {
  workExperience,
  workExperienceContent,
} from "@/data/work-experience";

export function WorkExperience() {
  return (
    <section id="work-experience" className="credits" data-scene="006">
      <div className="wrap">
        <div className="scene-tag reveal">{workExperienceContent.sceneTag}</div>
        <h2 className="serif-heading reveal" style={{ marginBottom: 50 }}>
          {workExperienceContent.heading}
        </h2>
        <div>
          {workExperience.map((job) => (
            <div key={job.id} className="credit-row reveal">
              <div className="year">{job.yearLabel}</div>
              <div>
                <div className="role">
                  {job.role}
                  <em>{job.company}</em>
                </div>
                <div className="note">{job.description}</div>
              </div>
              <div className="tags">
                {job.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
