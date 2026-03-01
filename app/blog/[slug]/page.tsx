import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllSlugs, blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Article header */}
      <div className="bg-[#EEF2EC] border-b border-[#E8E4DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#6B6B67] mb-8 uppercase tracking-wider font-medium">
            <Link href="/" className="hover:text-[#4A7C59] transition-colors">
              Home
            </Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#4A7C59] transition-colors">
              Blog
            </Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#6B6B67] truncate max-w-xs normal-case">{post.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-widest text-[#4A7C59] border-[#4A7C59]/30 bg-[#4A7C59]/8">
              {post.category}
            </span>
            <span className="text-[#6B6B67] text-sm">{post.readTime}</span>
            <span className="text-[#6B6B67]">·</span>
            <time className="text-[#6B6B67] text-sm">{post.date}</time>
          </div>

          <h1
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-4xl sm:text-5xl font-bold text-[#1C1C1A] leading-tight tracking-tight mb-5"
          >
            {post.title}
          </h1>
          <p className="text-[#6B6B67] text-lg leading-relaxed max-w-2xl">
            {post.description}
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        {/* Inline quiz CTA */}
        <div
          className="rounded-2xl p-8 my-14 text-center bg-[#4A7C59]"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-4">
            Free · 3 minutes
          </p>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
            Not sure which type of IBS you have?
          </h3>
          <p className="text-white/75 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
            Take our research-backed quiz to identify your IBS subtype and get
            personalized management tips.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-white text-[#4A7C59] px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#FAF7F2] transition-colors"
          >
            Take the Free IBS Quiz
          </Link>
        </div>

        {/* Keyword tags */}
        <div className="flex flex-wrap gap-2 py-6 border-t border-[#E8E4DC]">
          {post.keywords.map((kw) => (
            <span
              key={kw}
              className="bg-[#EEF2EC] text-[#6B6B67] text-xs px-3 py-1 rounded-lg font-medium"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="bg-[#FAF7F2] border-t border-[#E8E4DC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-4">
              Keep reading
            </p>
            <h2 className="text-2xl font-bold text-[#1C1C1A] tracking-tight mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
              Related articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-[#4A7C59] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
            Get personalized IBS management
          </h2>
          <p className="text-white/75 mb-6 text-sm">
            IbisLabs uses AI to personalize your IBS treatment. Join our
            waitlist for early access.
          </p>
          <Link
            href="/waitlist"
            className="inline-block bg-white text-[#4A7C59] px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#FAF7F2] transition-colors"
          >
            Join the Free Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}

function markdownToHtml(markdown: string): string {
  let html = markdown.trim();
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/^---$/gm, "<hr />");

  const lines = html.split("\n");
  const result: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("- ")) {
      if (!inList) { result.push("<ul>"); inList = true; }
      result.push(`<li>${line.slice(2)}</li>`);
    } else {
      if (inList) { result.push("</ul>"); inList = false; }
      if (line && !line.startsWith("<h") && !line.startsWith("<hr") && !line.startsWith("<ul") && !line.startsWith("<li")) {
        result.push(`<p>${line}</p>`);
      } else if (line) {
        result.push(line);
      }
    }
  }
  if (inList) result.push("</ul>");
  return result.join("\n");
}
