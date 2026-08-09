import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/cinematic/SiteFooter";
import {
  blogContent,
  formatBlogDate,
  getBlogPosts,
} from "@/data/blog";

export const metadata: Metadata = {
  title: "Travel Journal",
  description: blogContent.indexIntro,
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();
  const isEmpty = posts.length === 0;

  return (
    <main className="blog-page w-full min-w-0 overflow-x-clip">
      <div className="wrap blog-page-inner">
        <Link href="/#journal" className="blog-back">
          ← Back home
        </Link>
        <div className="scene-tag">{blogContent.sceneTag}</div>
        <h1 className="serif-heading blog-page-title">{blogContent.indexTitle}</h1>
        <p className="blog-page-intro">{blogContent.indexIntro}</p>

        {isEmpty ? (
          <div className="journal-placeholder" aria-live="polite">
            <div className="journal-stamp" aria-hidden>
              <span>{blogContent.placeholder.status}</span>
            </div>
            <div className="journal-placeholder-copy">
              <h2>{blogContent.placeholder.title}</h2>
              <p>{blogContent.placeholder.body}</p>
              <div className="journal-meta">{blogContent.placeholder.meta}</div>
            </div>
          </div>
        ) : (
          <div className="journal-list blog-index-list">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="journal-row"
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
        )}
      </div>
      <SiteFooter />
    </main>
  );
}
