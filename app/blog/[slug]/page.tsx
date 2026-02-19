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
      {/* Article header — dark */}
      <div className="bg-[#0A0A0F] border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-zinc-600 mb-8 uppercase tracking-wider font-medium">
            <Link href="/" className="hover:text-[#00D4FF] transition-colors">
              Home
            </Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-[#00D4FF] transition-colors">
              Blog
            </Link>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-zinc-500 truncate max-w-xs normal-case">{post.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-black px-2.5 py-1 rounded-md border uppercase tracking-widest text-[#00D4FF] border-[#00D4FF]/30 bg-[#00D4FF]/5">
              {post.category}
            </span>
            <span className="text-zinc-600 text-sm">{post.readTime}</span>
            <span className="text-zinc-700">·</span>
            <time className="text-zinc-600 text-sm">{post.date}</time>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
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
          className="rounded-lg p-8 my-14 text-center border"
          style={{ background: "#0A0A0F", borderColor: "rgba(0,212,255,0.2)", boxShadow: "0 0 40px rgba(0,212,255,0.05)" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-4">
            Free · 3 minutes
          </p>
          <h3 className="text-2xl font-black text-white tracking-tight mb-3">
            Not sure which type of IBS you have?
          </h3>
          <p className="text-zinc-400 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
            Take our research-backed quiz to identify your IBS subtype and get
            personalized management tips.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-[#00D4FF] text-[#0A0A0F] px-7 py-3 rounded-md font-black text-sm hover:bg-[#00BFEB] transition-colors glow-accent-sm"
          >
            Take the Free IBS Quiz
          </Link>
        </div>

        {/* Keyword tags */}
        <div className="flex flex-wrap gap-2 py-6 border-t border-zinc-100">
          {post.keywords.map((kw) => (
            <span
              key={kw}
              className="bg-zinc-100 text-zinc-500 text-xs px-3 py-1 rounded-md font-medium"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-4">
              Keep reading
            </p>
            <h2 className="text-2xl font-black text-zinc-900 tracking-tight mb-8">
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
      <div className="bg-[#0A0A0F] dark-grid py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white tracking-tight mb-3">
            Get personalized IBS management
          </h2>
          <p className="text-zinc-400 mb-6 text-sm">
            IbisLabs uses AI to personalize your IBS treatment. Join our
            waitlist for early access.
          </p>
          <Link
            href="/waitlist"
            className="inline-block bg-[#00D4FF] text-[#0A0A0F] px-8 py-3 rounded-md font-black text-sm hover:bg-[#00BFEB] transition-colors glow-accent-sm"
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
