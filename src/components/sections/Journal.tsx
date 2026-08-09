import Link from "next/link";
import {
  blogContent,
  formatBlogDate,
  getBlogPosts,
} from "@/data/blog";

export function Journal() {
  const posts = getBlogPosts().slice(0, 3);
  const isEmpty = posts.length === 0;

  return (
    <section id="journal" className="journal-section" data-scene="004">
      <div className="wrap">
        <div className="journal-head">
          <div>
            <div className="scene-tag reveal">{blogContent.sceneTag}</div>
            <h2 className="serif-heading reveal" style={{ marginBottom: 0 }}>
              {blogContent.heading}
            </h2>
          </div>
          <p className="reveal d1">{blogContent.intro}</p>
        </div>

        {isEmpty ? (
          <div className="journal-placeholder reveal d2" aria-live="polite">
            <div className="journal-stamp" aria-hidden>
              <span>{blogContent.placeholder.status}</span>
            </div>
            <div className="journal-placeholder-copy">
              <h3>{blogContent.placeholder.title}</h3>
              <p>{blogContent.placeholder.body}</p>
              <div className="journal-meta">{blogContent.placeholder.meta}</div>
            </div>
            <Link href={blogContent.ctaHref} className="journal-cta reveal d3">
              {blogContent.cta} →
            </Link>
          </div>
        ) : (
          <>
            <div className="journal-list">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="journal-row reveal"
                >
                  <span className="journal-row-date">
                    {formatBlogDate(post.date)}
                  </span>
                  <span className="journal-row-main">
                    <span className="journal-row-title">{post.title}</span>
                    <span className="journal-row-excerpt">{post.excerpt}</span>
                  </span>
                  <span className="journal-row-loc">{post.location}</span>
                </Link>
              ))}
            </div>
            <div className="journal-footer reveal">
              <Link href={blogContent.ctaHref} className="journal-cta">
                {blogContent.cta} →
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
