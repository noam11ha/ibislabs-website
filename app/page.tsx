import FiberChart from "@/components/FiberChart";

/* Background photographs. Set a path (for example "/photos/routine.jpg") once the file is in
   public/photos. Each one is graded to black and white, darkened and faded into its section.
   Sections without a photo still get their light, glow and film-grain layers. */
const PHOTOS: Record<"evidence" | "story" | "routine" | "standards" | "faq", string | null> = {
  evidence: null,
  story: null,
  routine: null,
  standards: null,
  faq: null,
};

const CONTACT = "support@ibislabs.io";
const PACK_ALT = "A matte black Adjust Foundation Fiber pouch beside a single-serve stick pack, on warm stone.";

function Backdrop({ photo, beam = false, glows = 1 }: { photo?: string | null; beam?: boolean; glows?: 1 | 2 }) {
  return (
    <div className="scene-bg" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {photo ? <img className="scene-photo" src={photo} alt="" loading="lazy" /> : null}
      <div className="glow a" />
      {glows === 2 ? <div className="glow b" /> : null}
      {beam ? <div className="beam" /> : null}
      <div className="fade-top" />
      <div className="fade-bottom" />
    </div>
  );
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">&rarr;</span>;
}

export default function Home() {
  return (
    <main>
      {/* 1. Hero: the product, lit and set into the dark */}
      <section className="scene hero">
        <div className="scene-bg" aria-hidden="true">
          <div className="glow a" />
          <div className="beam" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-shot" src="/product.jpg" width={1536} height={1024} fetchPriority="high" alt="" />
          <span className="tag hero-tag">Concept packaging</span>
          <div className="fade-bottom" />
        </div>
        <div className="wrap">
          <div className="hero-copy rise">
            <span className="kicker">Daily fiber, designed for men</span>
            <h1>Fiber made <em>easy</em>.</h1>
            <p className="lead">
              A daily fiber blend designed to dissolve into the drinks you already have. Formulated with sensitive guts in mind.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#product">Explore our fiber <Arrow /></a>
              <a className="text-link" href="#evidence">Why fiber</a>
            </div>
            <p className="note">In development. Not yet available for purchase.</p>
          </div>
        </div>
      </section>

      {/* 2. Evidence: the fiber gap, with real cited data */}
      <section className="scene evidence" id="evidence">
        <Backdrop photo={PHOTOS.evidence} beam glows={2} />
        <div className="wrap evidence-grid">
          <div className="stack">
            <span className="kicker">The fiber gap</span>
            <h2>Most men run <em>short</em> on fiber.</h2>
            <p className="lead">
              <span className="red">National diet data shows</span> American men eat about 18 grams of fiber a day, at every age.<sup>1</sup>{" "}
              The recommended amount is 38 grams up to age 50, and 30 grams after that.<sup>2</sup>
            </p>
            <p className="copy">
              That is roughly half of what is recommended, and it barely changes from our twenties to our seventies. The gap is the reason we started with fiber.
            </p>
          </div>
          <FiberChart />
        </div>
      </section>

      {/* 3. Product: pouch now, stick packs next */}
      <section className="scene product" id="product">
        <Backdrop glows={1} />
        <div className="wrap product-grid">
          <figure className="product-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/product.jpg" width={1536} height={1024} loading="lazy" alt={PACK_ALT} />
            <span className="tag">Concept</span>
          </figure>
          <div className="stack">
            <span className="kicker">The product</span>
            <h2>Foundation <em>Fiber</em></h2>
            <p className="lead">One serving a day, stirred into a drink. Unflavored, so your coffee still tastes like coffee.</p>
            <div className="panel">
              <dl className="facts">
                <div><dt>Fiber</dt><dd>About 10 g per daily serving<small>Target amount, to be confirmed on the final formula</small></dd></div>
                <div><dt>Blend</dt><dd>Several soluble fibers, including PHGG and resistant dextrin</dd></div>
                <div><dt>Left out</dt><dd>Psyllium husk and inulin</dd></div>
              </dl>
            </div>
            <div className="formats">
              <div className="format"><b>Pouch + scoop</b><span>Planned first format</span></div>
              <div className="format next"><b>Single-serve sticks</b><span>In development</span></div>
            </div>
            <p className="note">Concept packaging. Foundation Fiber is a working name.</p>
          </div>
        </div>
      </section>

      {/* 4. Formula */}
      <section className="scene formula" id="formula">
        <Backdrop glows={2} />
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">The formula</span>
            <h2>What&rsquo;s in the <em>blend</em></h2>
            <p className="copy">A blend of soluble fibers, chosen to dissolve. The full ingredient list is still being finalized, so we only name what is confirmed.</p>
          </div>
          <div className="cards">
            <article className="card">
              <span className="badge">Confirmed</span>
              <span className="aka">Partially hydrolyzed guar gum</span>
              <h3 className="name">PHGG</h3>
              <p>A soluble fiber made from guar beans. Our blend includes Fibalance&trade;, a branded PHGG.</p>
              <span className="tbc">Amount per serving: to be confirmed</span>
            </article>
            <article className="card">
              <span className="badge">Confirmed</span>
              <span className="aka">Soluble fiber</span>
              <h3 className="name">Resistant dextrin</h3>
              <p>A soluble fiber made from starch. It helps the blend reach its daily fiber target.</p>
              <span className="tbc">Amount per serving: to be confirmed</span>
            </article>
            <article className="card pending">
              <span className="badge">To be confirmed</span>
              <span className="aka">Final formula</span>
              <h3 className="name">The rest of the blend</h3>
              <p>The remaining fibers and the exact amounts will be listed here once the final formula is signed off.</p>
            </article>
          </div>
          <div className="after-cards">
            <p><strong>Not in the blend:</strong> psyllium husk or inulin.</p>
            <p className="note">We have not run a clinical trial on the finished blend. When we cite research, we will say whether it studied a single ingredient or the finished product.</p>
          </div>
        </div>
      </section>

      {/* 5. Education: why fiber matters */}
      <section className="scene story" id="why-fiber">
        <Backdrop photo={PHOTOS.story} beam glows={2} />
        <div className="wrap story-grid">
          <span className="kicker">Why fiber matters</span>
          <h2>The part of food most of us <em>leave out</em>.</h2>
          <p className="lead">
            Fiber is the part of plant foods your body doesn&rsquo;t digest, and a normal part of how digestion works. Most people know they should eat more of it. Fewer manage to, day after day.
          </p>
          <div className="fact-row">
            <p><b>Where it comes from</b><span>Vegetables, fruit, beans, nuts and whole grains.</span></p>
            <p><b>Two kinds</b><span>Soluble fiber dissolves in water. Insoluble fiber doesn&rsquo;t.</span></p>
            <p><b>Where we fit</b><span>Not a replacement for those foods. A simple way to add to them.</span></p>
          </div>
        </div>
      </section>

      {/* 6. Why Adjust */}
      <section className="scene benefits" id="why-adjust">
        <Backdrop glows={1} />
        <div className="wrap benefits-grid">
          <div className="stack">
            <span className="kicker">Why Adjust</span>
            <h2>Made to be the <em>easy part</em> of your day.</h2>
            <div className="panel">
              <ul className="reasons">
                <li><h3>Easy to take</h3><p>Designed to dissolve into water, coffee or a smoothie. Taste and texture testing on the final blend is still to come.</p></li>
                <li><h3>Easy to keep up</h3><p>One serving a day. No schedule to learn and no stack of products to manage.</p></li>
                <li><h3>Sensitive guts in mind</h3><p>That is the brief for the formula. Everyone responds to fiber differently, so we will always suggest starting gradually.</p></li>
                <li><h3>Designed for men</h3><p>Built around men aged 25 to 55. Anyone can use it.</p></li>
              </ul>
            </div>
            <div className="benefits-cta">
              <a className="btn" href="#contact">Get in touch <Arrow /></a>
            </div>
          </div>
          <figure className="stick-shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/product.jpg" width={1536} height={1024} loading="lazy" alt="A single-serve Adjust stick pack standing beside the pouch." />
            <span className="tag">Stick pack concept</span>
          </figure>
        </div>
      </section>

      {/* 7. Routine timeline */}
      <section className="scene routine" id="how">
        <Backdrop photo={PHOTOS.routine} beam glows={1} />
        <div className="wrap">
          <div className="section-head center stack">
            <span className="kicker">How it fits your day</span>
            <h2>One habit. No <em>complicated</em> routine.</h2>
            <p className="copy">Fiber works best as a steady habit. Here is how we will suggest starting.</p>
          </div>
          <ol className="timeline">
            <li className="stage">
              <div className="stage-head"><span className="stage-when">Day one</span><span className="stage-name">Start small</span></div>
              <ul>
                <li>Begin with less than a full serving</li>
                <li>Stir it into water, coffee or a smoothie</li>
                <li>Follow the directions on the label</li>
              </ul>
            </li>
            <li className="stage">
              <div className="stage-head"><span className="stage-when">First weeks</span><span className="stage-name">Build up</span></div>
              <ul>
                <li>Work up toward a full serving</li>
                <li>Go at a pace that feels comfortable</li>
                <li>Drink plenty of fluids through the day</li>
              </ul>
            </li>
            <li className="stage">
              <div className="stage-head"><span className="stage-when">From then on</span><span className="stage-name">Make it routine</span></div>
              <ul>
                <li>One serving a day, at a time that suits you</li>
                <li>Pair it with a drink you already have</li>
                <li>Stick packs, in development, for days away from home</li>
              </ul>
            </li>
          </ol>
          <p className="note">Suggested routine only. Final directions will follow the finished product label. Everyone responds to fiber differently.</p>
        </div>
      </section>

      {/* 8. Standards and trust */}
      <section className="scene standards" id="standards">
        <Backdrop photo={PHOTOS.standards} glows={2} />
        <div className="wrap">
          <div className="section-head stack">
            <span className="kicker">How we work</span>
            <h2>What we hold <em>ourselves</em> to.</h2>
            <p className="copy">Adjust is pre-launch, so there are no reviews or certificates to show yet. These are the standards the product is being built to.</p>
          </div>
          <ul className="principles">
            <li><span className="num">01</span><h3>Evidence, stated honestly</h3><p>We say what is known, what is still a hypothesis and what has not been shown.</p></li>
            <li><span className="num">02</span><h3>Quality over margin</h3><p>We won&rsquo;t swap in a lesser ingredient to save money.</p></li>
            <li><span className="num">03</span><h3>Nothing invented</h3><p>Reviews, test results and certifications will appear here only once they are real and verified.</p></li>
            <li><span className="num">04</span><h3>The right product, not more</h3><p>If something isn&rsquo;t right for you, we would rather say so.</p></li>
          </ul>
        </div>
      </section>

      {/* 9. FAQ + closing */}
      <section className="scene faq-scene" id="faq">
        <Backdrop photo={PHOTOS.faq} glows={2} />
        <div className="wrap">
          <div className="section-head center stack">
            <span className="kicker">Questions</span>
            <h2>Good to <em>know</em></h2>
          </div>
          <div className="faq">
            <details>
              <summary>Can I buy Adjust today?</summary>
              <p>Not yet. Adjust is in development. The pouch and stick packs on this page are concept designs.</p>
            </details>
            <details>
              <summary>What is Foundation Fiber?</summary>
              <p>Our first product: an unflavored daily fiber powder, aiming for about 10 grams of fiber per serving. Foundation Fiber is a working name.</p>
            </details>
            <details>
              <summary>What&rsquo;s in it?</summary>
              <p>A blend of soluble fibers, including PHGG and resistant dextrin. It has no psyllium husk and no inulin. We will publish the full list and amounts once the formula is final.</p>
            </details>
            <details>
              <summary>Will it come in stick packs?</summary>
              <p>That is the plan. Single-serve sticks are in development. The first planned format is a resealable pouch with a scoop.</p>
            </details>
            <details>
              <summary>Is Adjust only for men?</summary>
              <p>No. We design for men first, and anyone can use it.</p>
            </details>
            <details>
              <summary>Is it a medicine?</summary>
              <p>No. Adjust is a dietary supplement. It is not intended to diagnose, treat, cure or prevent any disease. If you have a medical condition or symptoms that don&rsquo;t go away, talk to a doctor.</p>
            </details>
            <details>
              <summary>Who is behind Adjust?</summary>
              <p>Adjust is a brand of Ibis Labs Ltd.</p>
            </details>
          </div>

          <div className="closing" id="contact">
            <span className="kicker">Get in touch</span>
            <h2>Gut care that fits <em>your life</em>.</h2>
            <p className="copy">Adjust is pre-launch. For partnership and investment conversations, write to us.</p>
            <a className="contact" href={`mailto:${CONTACT}`}>{CONTACT}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
