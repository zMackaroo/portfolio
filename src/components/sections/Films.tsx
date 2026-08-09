import { films, filmsContent } from "@/data/films";

export function Films() {
  const isEmpty = films.length === 0;

  return (
    <section id="films" className="films-section" data-scene="003">
      <div className="wrap">
        <div className="films-head">
          <div>
            <div className="scene-tag reveal">{filmsContent.sceneTag}</div>
            <h2 className="serif-heading reveal" style={{ marginBottom: 0 }}>
              {filmsContent.heading}
            </h2>
          </div>
          <p className="reveal d1">{filmsContent.intro}</p>
        </div>

        {isEmpty ? (
          <div className="films-placeholder reveal d2" aria-live="polite">
            <div className="films-screen">
              <div className="films-letterbox" aria-hidden>
                <span />
                <span />
              </div>
              <div className="films-placeholder-content">
                <div className="films-status">
                  <span className="films-status-dot" />
                  {filmsContent.placeholder.status}
                </div>
                <h3>{filmsContent.placeholder.title}</h3>
                <p>{filmsContent.placeholder.body}</p>
                <div className="films-progress" aria-hidden>
                  <span />
                </div>
                <div className="films-meta">{filmsContent.placeholder.meta}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="films-grid">
            {films.map((film, index) => (
              <a
                key={film.id}
                className="film-card reveal"
                href={film.url || "#films"}
                target={film.url ? "_blank" : undefined}
                rel={film.url ? "noopener noreferrer" : undefined}
              >
                <span className="film-card-idx">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="film-card-type">{film.type}</span>
                <h3 className="film-card-title">{film.title}</h3>
                <p className="film-card-desc">{film.description}</p>
                <span className="film-card-year">{film.year}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
