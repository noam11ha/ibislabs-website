import FiberChart from "@/components/FiberChart";

/* Photographs. Set a path (for example "/photos/hero.jpg") once the image exists in public/photos.
   While HERO is null the hero shows the product, so the evidence chart comes second and the
   product third (the brand book's conditional order). With a lifestyle hero, they swap. */
const HERO: string | null = null;
const PHOTO_WHY: string | null = null;
const PHOTO_ROUTINE: string | null = null;

const CONTACT = "support@ibislabs.io";

function Photo({ src, alt, brief }: { src: string | null; alt: string; brief: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="photo" src={src} alt={alt} loading="lazy" />;
  }
  return (
    <div className="photo-slot" role="img" aria-label={`Photograph to come: ${brief}`}>
      <p><b>Photograph to come</b>{brief}</p>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="hero-copy rise">
      <span className="kicker" style={{ marginBottom: 0 }}>Daily fiber, designed for men</span>
      <h1>Fiber made easy<span className="dot">.</span></h1>
      <p className="lead">
        A daily fiber blend designed to dissolve into the drinks you already have. Formulated with sensitive guts in mind.
      </p>
      <div className="hero-actions">
        <a className={HERO ? "btn light" : "btn"} href="#product">Explore our fiber</a>
        <a className="text-link" href="#formula">See what&rsquo;s in it</a>
      </div>
      <p className="note">In development. Not yet available for purchase.</p>
    </div>
  );
}

function Product() {
  return (
    <section className={HERO ? "section" : "section warm"} id="product">
      <div className="wrap product-grid">
        <figure className="product-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/product.jpg" width={1536} height={1024} loading="lazy" alt="A matte black Adjust Foundation Fiber pouch beside a single-serve stick pack, on warm stone." />
          <span className="tag">Concept</span>
          <figcaption className="note">
            Concept packaging. Single-serve stick packs are a format in development, not a confirmed launch product.
          </figcaption>
        </figure>
        <div className="product-copy">
          <div>
            <span className="kicker">The product</span>
            <h2>Foundation Fiber</h2>
          </div>
          <p className="lead">One serving a day, stirred into a drink. Unflavored, so your coffee still tastes like coffee.</p>
          <dl className="facts">
            <div><dt>Fiber</dt><dd>About 10 g per daily serving<small>Target amount, to be confirmed on the final formula</small></dd></div>
            <div><dt>Blend</dt><dd>Several soluble fibers, including PHGG and resistant dextrin</dd></div>
            <div><dt>Left out</dt><dd>Psyllium husk and inulin</dd></div>
            <div><dt>First format</dt><dd>Resealable pouch of loose powder, with a scoop</dd></div>
            <div><dt>In development</dt><dd>Single-serve stick packs, for the days you&rsquo;re not at home</dd></div>
          </dl>
          <p className="note">Foundation Fiber is a working name.</p>
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <section className={HERO ? "section warm" : "section"} id="evidence">
      <div className="wrap evidence-grid">
        <div className="evidence-copy">
          <span className="kicker" style={{ marginBottom: 0 }}>The fiber gap</span>
          <h2>Most men eat far less fiber than recommended<span className="dot">.</span></h2>
          <p className="lead">
            American men average about 18 grams of fiber a day. The recommended amount is 38 grams up to age 50, and 30 grams after that.
          </p>
          <p className="note">That gap is the reason we started with fiber.</p>
        </div>
        <FiberChart />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      {HERO ? (
        <section className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO} alt="" fetchPriority="high" />
          <div className="wrap"><HeroCopy /></div>
        </section>
      ) : (
        <section className="hero-split">
          <div className="wrap">
            <HeroCopy />
            <div className="hero-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/product.jpg" width={1536} height={1024} fetchPriority="high" alt="A matte black Adjust Foundation Fiber pouch beside a single-serve stick pack, on warm stone." />
              <span className="tag">Concept packaging</span>
            </div>
          </div>
        </section>
      )}

      {HERO ? (<><Product /><Evidence /></>) : (<><Evidence /><Product /></>)}

      <section className="section" id="formula">
        <div className="wrap">
          <div className="head">
            <span className="kicker" style={{ marginBottom: 0 }}>The formula</span>
            <h2>What&rsquo;s in the blend</h2>
            <p className="lead">
              A blend of soluble fibers, chosen to dissolve. The full ingredient list is still being finalized, so we only name what is confirmed.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <span className="aka">Partially hydrolyzed guar gum</span>
              <h3 className="name">PHGG</h3>
              <p>A soluble fiber made from guar beans. Our blend includes Fibalance&trade;, a branded PHGG.</p>
              <span className="tbc">Amount per serving: to be confirmed</span>
            </article>
            <article className="card">
              <span className="aka">Soluble fiber</span>
              <h3 className="name">Resistant dextrin</h3>
              <p>A soluble fiber made from starch. It helps the blend reach its daily fiber target.</p>
              <span className="tbc">Amount per serving: to be confirmed</span>
            </article>
            <article className="card pending">
              <span className="aka">Still to be confirmed</span>
              <h3 className="name">The rest of the blend</h3>
              <p>The remaining fibers and the exact amounts will be listed here once the final formula is signed off.</p>
            </article>
          </div>
          <div className="after-cards">
            <p><strong>Not in the blend:</strong> psyllium husk or inulin.</p>
            <p className="note">
              We have not run a clinical trial on the finished blend. When we cite research, we will say whether it studied a single ingredient or the finished product.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark" id="why-fiber">
        <div className="wrap feature">
          <div className="feature-copy">
            <span className="kicker" style={{ marginBottom: 0 }}>Why fiber matters</span>
            <h2>The part of food most of us leave out<span className="dot">.</span></h2>
            <p>
              Fiber is the part of plant foods your body doesn&rsquo;t digest. It comes from vegetables, fruit, beans, nuts and whole grains, and it is a normal part of how digestion works.
            </p>
            <p>
              Most people know they should eat more of it. Fewer manage to, day after day. A supplement doesn&rsquo;t replace those foods. It is one simple way to add to what you already eat.
            </p>
          </div>
          <Photo src={PHOTO_WHY} alt="Friends sharing a meal at a table." brief="Friends at a table, mid-conversation. Black and white, film grain." />
        </div>
      </section>

      <section className="section" id="why-adjust">
        <div className="wrap">
          <div className="head">
            <span className="kicker" style={{ marginBottom: 0 }}>Why Adjust</span>
            <h2>Made to be the easy part of your day</h2>
          </div>
          <ul className="reasons">
            <li>
              <h3 className="name">Easy to take</h3>
              <p>Designed to dissolve into water, coffee or a smoothie. Taste and texture testing on the final blend is still to come.</p>
            </li>
            <li>
              <h3 className="name">Easy to keep up</h3>
              <p>One serving a day. No schedule to learn and no stack of products to manage.</p>
            </li>
            <li>
              <h3 className="name">Sensitive guts in mind</h3>
              <p>That is the brief for the formula. Everyone responds to fiber differently, so we will always suggest starting gradually.</p>
            </li>
            <li>
              <h3 className="name">Designed for men</h3>
              <p>We built Adjust around men aged 25 to 55. Anyone can use it.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section warm" id="how">
        <div className="wrap feature">
          <Photo src={PHOTO_ROUTINE} alt="A man stirring a glass of water at a kitchen counter in morning light." brief="A man stirring a glass at a kitchen counter, morning light. Black and white, film grain." />
          <div className="feature-copy">
            <span className="kicker" style={{ marginBottom: 0 }}>How it fits your day</span>
            <h2>One habit. No complicated routine.</h2>
            <ol className="steps">
              <li><h3>Add</h3><p>Put one serving into a drink you already have.</p></li>
              <li><h3>Stir</h3><p>Give it a moment to dissolve.</p></li>
              <li><h3>Build up</h3><p>Start with a smaller amount and work up, following the directions on the label.</p></li>
            </ol>
            <p className="note">Final directions will follow the finished product label.</p>
          </div>
        </div>
      </section>

      <section className="section dark" id="standards">
        <div className="wrap">
          <div className="head">
            <span className="kicker" style={{ marginBottom: 0 }}>How we work</span>
            <h2>What we hold ourselves to</h2>
            <p className="lead">Adjust is pre-launch, so there are no reviews or certificates to show yet. These are the standards the product is being built to.</p>
          </div>
          <ul className="principles">
            <li><h3>Evidence, stated honestly</h3><p>We say what is known, what is still a hypothesis and what has not been shown.</p></li>
            <li><h3>Quality over margin</h3><p>We won&rsquo;t swap in a lesser ingredient to save money.</p></li>
            <li><h3>Nothing invented</h3><p>Reviews, test results and certifications will appear here only once they are real and verified.</p></li>
            <li><h3>The right product, not more products</h3><p>If something isn&rsquo;t right for you, we would rather say so.</p></li>
          </ul>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap faq-grid">
          <div className="head" style={{ marginBottom: 0 }}>
            <span className="kicker" style={{ marginBottom: 0 }}>Questions</span>
            <h2>Good to know</h2>
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
              <p>That is the plan. Single-serve sticks are in development. The first production format is a resealable pouch with a scoop.</p>
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
        </div>
      </section>

      <section className="section warm closing" id="contact">
        <div className="wrap">
          <span className="kicker" style={{ marginBottom: 0 }}>Get in touch</span>
          <h2>Gut care that fits your life<span className="dot">.</span></h2>
          <p className="lead">Adjust is pre-launch. For partnership and investment conversations, write to us.</p>
          <a className="contact" href={`mailto:${CONTACT}`}>{CONTACT}</a>
        </div>
      </section>
    </main>
  );
}
