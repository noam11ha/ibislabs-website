import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

export default function BlogCard({ post }: { post: BlogPost }) {
  const categoryStyle: Record<string, string> = {
    Education: "text-[#00D4FF] border-[#00D4FF]/30 bg-[#00D4FF]/5",
    "Types of IBS": "text-violet-400 border-violet-400/30 bg-violet-400/5",
    Treatment: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="bg-white border border-zinc-100 rounded-lg overflow-hidden hover:border-zinc-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#7B8EFF]" />

        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${
                categoryStyle[post.category] ?? "text-zinc-500 border-zinc-200 bg-zinc-50"
              }`}
            >
              {post.category}
            </span>
            <span className="text-xs text-zinc-400">{post.readTime}</span>
          </div>

          <h2 className="text-zinc-900 font-black text-[17px] leading-snug mb-3 tracking-tight group-hover:text-[#00D4FF] transition-colors duration-200">
            {post.title}
          </h2>

          <p className="text-zinc-500 text-sm leading-relaxed flex-1">
            {post.description}
          </p>

          <div className="flex items-center justify-between mt-6 pt-5 border-t border-zinc-100">
            <span className="text-xs text-zinc-400">{post.date}</span>
            <span className="text-[#00D4FF] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
              Read
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
