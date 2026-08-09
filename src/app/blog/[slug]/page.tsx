import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/cinematic/SiteFooter";
import {
  blogContent,
  formatBlogDate,
  getBlogPost,
  getBlogPosts,
} from "@/data/blog";
import { siteConfig } from "@/data/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Story not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="blog-page w-full min-w-0 overflow-x-clip">
      <article className="wrap blog-page-inner blog-article">
        <Link href="/blog" className="blog-back">
          {blogContent.backLabel}
        </Link>

        <div className="blog-article-meta">
          <span>{formatBlogDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.location}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="serif-heading blog-article-title">{post.title}</h1>
        <p className="blog-article-excerpt">{post.excerpt}</p>

        {post.tags.length > 0 ? (
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}

        <div className="blog-article-body">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
