import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

export default function BlogCard({ post }: { post: BlogPost }) {
  const categoryStyle: Record<string, string> = {
    Education: "text-[#4A7C59] border-[#4A7C59]/30 bg-[#4A7C59]/8",
    "Types of IBS": "text-violet-600 border-violet-300/50 bg-violet-50",
    Treatment: "text-amber-600 border-amber-300/50 bg-amber-50",
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="warm-card-hover bg-white border border-[#E8E4DC] rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
        {/* Top accent line */}
        <div className="h-[3px] bg-gradient-to-r from-[#4A7C59] to-[#7CAF8A]" />

        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wider ${
                categoryStyle[post.category] ?? "text-[#6B6B67] border-[#E8E4DC] bg-[#FAF7F2]"
              }`}
            >
              {post.category}
            </span>
            <span className="text-xs text-[#6B6B67]">{post.readTime}</span>
          </div>

          <h2 className="text-[#1C1C1A] font-bold text-[17px] leading-snug mb-3 tracking-tight group-hover:text-[#4A7C59] transition-colors duration-200">
            {post.title}
          </h2>

          <p className="text-[#6B6B67] text-sm leading-relaxed flex-1">
            {post.description}
          </p>

          <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#E8E4DC]">
            <span className="text-xs text-[#6B6B67]">{post.date}</span>
            <span className="text-[#4A7C59] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
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
