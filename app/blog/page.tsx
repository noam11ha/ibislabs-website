import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "IBS Blog — Evidence-Based Guides on IBS Symptoms & Treatment",
  description:
    "Learn everything about IBS — types, symptoms, diagnosis, and treatment options. Evidence-based articles written for people living with irritable bowel syndrome.",
  keywords: [
    "IBS blog",
    "IBS articles",
    "IBS symptoms",
    "IBS treatment",
    "irritable bowel syndrome guide",
    "types of IBS",
  ],
};

export default function BlogPage() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0A0A0F] dark-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] mb-5">
            Knowledge base
          </p>
          <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Learn about IBS
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
            Evidence-based, patient-friendly guides on IBS symptoms, subtypes,
            and treatments — written with help from gastroenterologists.
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* SEO content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-100">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight mb-4">
          About IBS
        </h2>
        <p className="text-zinc-500 leading-relaxed mb-4">
          Irritable Bowel Syndrome (IBS) is a common functional gastrointestinal
          disorder affecting 10–15% of adults worldwide. It is characterized by
          chronic abdominal pain and changes in bowel habits — including
          constipation, diarrhea, or both.
        </p>
        <p className="text-zinc-500 leading-relaxed">
          Despite its prevalence, IBS is often misunderstood and undertreated.
          Our blog is dedicated to helping people with IBS understand their
          condition, identify their subtype, and find evidence-based treatments
          that work for them.
        </p>
      </div>
    </div>
  );
}
