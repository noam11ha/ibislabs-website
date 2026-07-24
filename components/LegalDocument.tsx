import type { LegalPolicy } from "@/lib/legal-policies";

export default function LegalDocument({ policy }: { policy: LegalPolicy }) {
  return (
    <main className="pt-16 min-h-screen bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <header className="mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4A7C59] mb-5">Legal</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#1C1C1A] tracking-tight leading-tight mb-6">
            {policy.title}
          </h1>
          <p className="text-[#6B6B67] text-base sm:text-lg leading-relaxed max-w-3xl">
            {policy.description}
          </p>
          <p className="text-xs text-[#6B6B67]/70 mt-4">Last updated: {policy.lastUpdated}</p>
        </header>

        <nav aria-label={`${policy.title} contents`} className="bg-white border border-[#E8E4DC] rounded-2xl p-6 shadow-sm mb-10">
          <h2 className="text-xs font-bold text-[#6B6B67] tracking-widest uppercase mb-4">Contents</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {policy.sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-sm text-[#4A7C59] hover:underline underline-offset-2">
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-8">
          {policy.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="bg-white border border-[#E8E4DC] rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24">
              <div className="flex items-start gap-3 mb-5">
                <span className="text-xs font-bold text-[#4A7C59]/60 tracking-widest pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1A] tracking-tight">{section.title}</h2>
              </div>
              <div className="space-y-5">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.heading && <h3 className="font-bold text-[#1C1C1A] mb-2">{item.heading}</h3>}
                    {item.text && (
                      <p className={item.bold ? "text-sm font-semibold text-[#1C1C1A] leading-relaxed" : "text-[#5F5F5B] text-sm leading-relaxed"}>
                        {item.text}
                      </p>
                    )}
                    {item.list && (
                      <ul className="mt-3 space-y-2">
                        {item.list.map((listItem) => (
                          <li key={listItem} className="flex items-start gap-2.5 text-[#5F5F5B] text-sm leading-relaxed">
                            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#4A7C59] mt-2 flex-shrink-0" />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
