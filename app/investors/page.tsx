// Unlisted page: not linked from the site, left out of the sitemap, and marked noindex.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For investors",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function InvestorsPage() {
  return (
    <main>
  <section className="page-hero band">
    <div className="wrap">
      <h1>For investors</h1>
      <p className="lede"><span className="fill">[One-line thesis: what Ibis Labs is building and why now]</span></p>
    </div>
  </section>
  <div className="inv band">
    <div className="wrap">
      <div className="slots-3" aria-label="Key facts">
        <div className="stat"><span>Stage</span><strong>Pre-seed</strong></div>
        <div className="stat"><span>Raising</span><strong><span className="fill">[amount]</span></strong></div>
        <div className="stat"><span>First launch</span><strong><span className="fill">[date]</span></strong></div>
      </div>
      
      <section className="inv-section" id="inv-problem">
        <div><span className="kicker label">The problem</span><h2>Why gut health, why men</h2></div>
        <div className="inv-content"><div className="slot"><b>Content coming</b><p>The problem in two or three sentences, with one number that shows its size.</p></div><div className="slots-2"><div className="slot"><b>Data point</b><p>A statistic and its source.</p></div><div className="slot"><b>Data point</b><p>A statistic and its source.</p></div></div></div>
      </section>
      
      <section className="inv-section" id="inv-product">
        <div><span className="kicker label">The product</span><h2>Foundation Fiber</h2></div>
        <div className="inv-content"><img className="inv-shot" src="/product.jpg" width={1536} height={1024} loading="lazy" alt="Foundation Fiber pouch and stick pack." /><div className="slot"><b>Content coming</b><p>What it is, who it is for, and what makes it different from existing fiber brands.</p></div></div>
      </section>
      
      <section className="inv-section" id="inv-market">
        <div><span className="kicker label">Market</span><h2>Market size</h2></div>
        <div className="inv-content"><div className="slots-3"><div className="slot"><b>TAM</b><p>Total market and source.</p></div><div className="slot"><b>SAM</b><p>Serviceable market and source.</p></div><div className="slot"><b>SOM</b><p>Realistic share in 3 to 5 years.</p></div></div><div className="slot"><b>Competition</b><p>Main competitors and how Ibis Labs is positioned against them.</p></div></div>
      </section>
      
      <section className="inv-section" id="inv-model">
        <div><span className="kicker label">Business model</span><h2>How we make money</h2></div>
        <div className="inv-content"><div className="slots-3"><div className="slot"><b>Price</b><p>Retail and subscription price.</p></div><div className="slot"><b>Margin</b><p>Gross margin per unit.</p></div><div className="slot"><b>Channels</b><p>DTC, Amazon, retail.</p></div></div><div className="slot"><b>Unit economics</b><p>Customer acquisition cost, lifetime value, payback period.</p></div></div>
      </section>
      
      <section className="inv-section" id="inv-traction">
        <div><span className="kicker label">Traction</span><h2>Early signal</h2></div>
        <div className="inv-content"><div className="slots-3"><div className="slot"><b>Waitlist</b><p>Number of sign-ups.</p></div><div className="slot"><b>Validation</b><p>Surveys, pre-orders, pilots.</p></div><div className="slot"><b>Partners</b><p>Manufacturer, fulfillment, advisors.</p></div></div></div>
      </section>
      
      <section className="inv-section" id="inv-roadmap">
        <div><span className="kicker label">Roadmap</span><h2>What comes next</h2></div>
        <div className="inv-content"><div className="slot"><b>Now</b><p>First product launch.</p></div><div className="slot"><b>Next</b><p>Following products and milestones.</p></div><div className="slot"><b>Later</b><p>Long-term vision for the platform.</p></div></div>
      </section>
      
      <section className="inv-section" id="inv-team">
        <div><span className="kicker label">Team</span><h2>Who is building it</h2></div>
        <div className="inv-content"><div className="slots-2"><div className="slot"><b>Founder</b><p>Name, photo, and a short bio.</p></div><div className="slot"><b>Advisors</b><p>Names, roles, and why they matter.</p></div></div></div>
      </section>
      
      <section className="inv-section" id="inv-round">
        <div><span className="kicker label">The round</span><h2>Use of funds</h2></div>
        <div className="inv-content"><div className="slot"><b>Terms</b><p>Amount, instrument (for example a SAFE), and valuation cap.</p></div><div className="slots-3"><div className="slot"><b>Product</b><p>% of the round.</p></div><div className="slot"><b>Marketing</b><p>% of the round.</p></div><div className="slot"><b>Operations</b><p>% of the round.</p></div></div></div>
      </section>
    </div>
  </div>
  <section className="inv-contact band">
    <div className="wrap">
      <h2>Talk to us.</h2>
      <p>For the full deck, financial model or a call, get in touch with the founder.</p>
      <div className="slot"><b>Contact</b><p>Email address or a link to book a call.</p></div>
    </div>
  </section>
    </main>
  );
}
