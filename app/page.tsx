import SignupForm from "@/components/SignupForm";
import GrowingPhoto from "@/components/GrowingPhoto";

export default function Home() {
  return (
    <main>
      <section className="hero band" id="join">
        <div className="wrap">
          <h1>Launching soon.</h1>
          <div className="hero-row">
            <p className="sub">Be the best version of yourself.</p>
            <SignupForm />
          </div>
        </div>
      </section>

      <section className="product band">
        <div className="wrap">
          <GrowingPhoto />
          <ul className="facts">
            <li><strong>Foundation Fiber</strong></li>
            <li><strong>Daily gut support for men</strong></li>
            <li><strong>30 daily sticks</strong></li>
            <li><strong>Fully dissolvable</strong></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
