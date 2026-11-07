import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Ibis Labs website, waitlist and products.",
};

export default function TermsPage() {
  return (
    <main>
  <section className="page-hero band">
    <div className="wrap">
      <h1>Terms of Use</h1>
      <p className="lede">Effective <span className="fill">[date]</span>. These terms apply to ibislabs.io, our waitlist and emails, and any Ibis Labs products you buy from us.</p>
    </div>
  </section>
  <section className="legal band">
    <div className="wrap">
      <ul className="legal-toc" aria-label="Sections">
        <li><a href="#t-who">Who we are</a></li>
        <li><a href="#t-health">Health information</a></li>
        <li><a href="#t-orders">Orders</a></li>
        <li><a href="#t-subs">Subscriptions</a></li>
        <li><a href="#t-returns">Returns</a></li>
        <li><a href="#t-liability">Liability</a></li>
        <li><a href="#t-contact">Contact</a></li>
      </ul>
      <div className="legal-body">
        <h2 id="t-who">1. Who we are and agreeing to these terms</h2>
        <p>This website is operated by <span className="fill">[Company legal name]</span>, a company incorporated in <span className="fill">[country]</span> (“Ibis Labs”, “we”, “us”, “our”). Our registered address is <span className="fill">[registered address]</span>.</p>
        <p>By using this website, joining our waitlist, or buying a product from us, you agree to these Terms of Use and to our Privacy Policy. If you do not agree, please do not use the website or our products.</p>
        <p>You must be at least 18 years old and able to enter a binding contract to buy from us. Our products are currently intended for sale in the United States only.</p>

        <h2 id="t-waitlist">2. Waitlist and emails</h2>
        <p>Before launch, you can leave your email address to hear when our products are available. Joining the waitlist does not reserve a product, guarantee availability, or create an obligation to buy. We will use your email to send launch news and related updates, as described in our Privacy Policy. You can unsubscribe at any time using the link in any email or by contacting us.</p>

        <h2 id="t-health">3. Health information and product disclaimer</h2>
        <p><strong>Our products are dietary supplements, not medicines.</strong> The statements on this website and on our packaging have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>The U.S. Food and Drug Administration does not approve dietary supplements before they are sold. Our products are manufactured by a third-party manufacturer in a facility that is registered with the FDA and follows current Good Manufacturing Practice (cGMP) regulations for dietary supplements <span className="fill">[confirm with manufacturer]</span>. Registration of a facility with the FDA does not mean the FDA has approved or endorsed that facility or our products.</p>
        <p>Information on this website, in our emails and on our social channels is for general education only. It is not medical advice and is not a substitute for advice from a doctor, registered dietitian or other qualified healthcare professional. Do not ignore professional medical advice or delay seeking it because of something you read from us.</p>
        <p>Speak to your doctor before using our products if you:</p>
        <ul>
          <li>are pregnant, trying to become pregnant, or breastfeeding;</li>
          <li>have a diagnosed medical condition, including any digestive, bowel or swallowing condition;</li>
          <li>take prescription or over-the-counter medication, since fiber can affect how some medications are absorbed;</li>
          <li>have had surgery on your digestive tract;</li>
          <li>notice a sudden change in bowel habits lasting more than two weeks, rectal bleeding, or severe or persistent abdominal pain.</li>
        </ul>
        <p>Fiber supplements should be taken with at least a full glass (8 fl oz) of water or other liquid. Taking them without enough liquid may cause swelling and blockage of the throat or esophagus, which may cause choking. Do not take them if you have difficulty swallowing. If you experience chest pain, vomiting, or difficulty swallowing or breathing after taking a fiber product, seek immediate medical attention. Always follow the directions and warnings on the product label. Keep out of reach of children.</p>
        <p>Product descriptions, including claims about testing, sourcing, certifications and suitability for particular diets, apply to the products as sold by us and are based on information from our manufacturer and testing partners. Individual results vary. We do not promise any particular result.</p>

        <h2 id="t-orders">4. Orders, pricing and payment</h2>
        <p>When sales open, all prices will be shown in U.S. dollars and may exclude applicable sales tax and shipping, which will be shown at checkout. Your order is an offer to buy. A contract is formed only when we send you an email confirming that your order has been accepted.</p>
        <p>We may refuse or cancel an order, for example if a product is out of stock, if there is an obvious error in the price or description, if we suspect fraud, or if the order appears to be for resale. If we cancel an order after you have paid, we will refund you in full.</p>
        <p>Payments are processed by third-party payment providers. We do not store your full card details. By placing an order you confirm that you are authorized to use the payment method you provide.</p>

        <h2 id="t-subs">5. Subscriptions and automatic renewal</h2>
        <p>If you choose a subscription, you authorize us to charge your payment method automatically at the frequency and price shown at checkout until you cancel. We will tell you the price, the billing frequency, and how to cancel before you subscribe, and we will send a reminder before renewals where required by law.</p>
        <p>You can skip, pause or cancel at any time from your account or by contacting us. Changes made at least <span className="fill">[number]</span> hours before your next billing date apply to that order. If we change the price of your subscription, we will give you at least <span className="fill">[number]</span> days’ notice so you can cancel first.</p>

        <h2 id="t-shipping">6. Shipping and delivery</h2>
        <p>We currently ship to addresses in the United States. Delivery times shown at checkout are estimates and are not guaranteed. Risk of loss passes to you when your order is delivered to the carrier <span className="fill">[confirm]</span>. If your order has not arrived within <span className="fill">[number]</span> business days of shipping, contact us and we will help locate or replace it.</p>

        <h2 id="t-returns">7. Returns and refunds</h2>
        <p><span className="fill">[Return policy: for example, a 30-day money-back guarantee on your first order, and which products must be unopened]</span>. To request a refund, contact us with your order number. Approved refunds are made to your original payment method, usually within <span className="fill">[number]</span> business days. For safety reasons, opened products that are not covered by a guarantee cannot be returned.</p>

        <h2 id="t-use">8. Using our website</h2>
        <p>You agree not to use the website in a way that is unlawful, harmful or disruptive. This includes attempting to gain unauthorized access to our systems, interfering with the website’s operation, scraping it in bulk, or submitting false information. We may suspend access to the website or to any account at our discretion.</p>
        <p>We may change, suspend or discontinue any part of the website or any product at any time. We do not guarantee that the website will always be available or free of errors.</p>

        <h2 id="t-ip">9. Intellectual property</h2>
        <p>The Ibis Labs name, logo, product names, packaging designs, photographs, text and other content on this website are owned by us or our licensors and are protected by intellectual property laws. You may view and share content for personal, non-commercial purposes, but you may not copy, modify, distribute or use it commercially without our written permission.</p>
        <p>If you send us feedback, ideas or suggestions, you allow us to use them without restriction or payment to you.</p>

        <h2 id="t-links">10. Third-party links and services</h2>
        <p>The website may link to or rely on services run by others, such as payment providers, email providers and social networks. We are not responsible for their content, policies or practices, and your use of them is governed by their own terms.</p>

        <h2 id="t-warranty">11. Disclaimer of warranties</h2>
        <p className="caps">To the fullest extent permitted by law, the website and its content are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement. Nothing in these terms limits any warranty that cannot be excluded under applicable law.</p>

        <h2 id="t-liability">12. Limitation of liability</h2>
        <p className="caps">To the fullest extent permitted by law, Ibis Labs and its officers, employees, manufacturers and partners will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, data or goodwill, arising from your use of the website or our products. Our total liability for any claim relating to a product will not exceed the amount you paid for that product.</p>
        <p>Nothing in these terms excludes or limits liability that cannot be excluded or limited by law, including liability for death or personal injury caused by negligence, or for fraud.</p>

        <h2 id="t-indemnity">13. Indemnity</h2>
        <p>You agree to indemnify and hold Ibis Labs harmless from claims, losses and costs (including reasonable legal fees) arising from your breach of these terms or your misuse of the website or our products, to the extent permitted by law.</p>

        <h2 id="t-law">14. Governing law and disputes</h2>
        <p>These terms are governed by the laws of <span className="fill">[governing law]</span>, without regard to conflict-of-law rules. If you have a concern, please contact us first so we can try to resolve it informally. If a dispute cannot be resolved within 30 days, it will be resolved <span className="fill">[courts or arbitration: to be decided with your lawyer]</span>.</p>

        <h2 id="t-general">15. General</h2>
        <p>If any part of these terms is found unenforceable, the rest remains in effect. Our failure to enforce a right is not a waiver of that right. You may not transfer your rights under these terms without our consent. These terms, together with our Privacy Policy and any terms shown at checkout, are the entire agreement between you and us about their subject.</p>

        <h2 id="t-changes">16. Changes to these terms</h2>
        <p>We may update these terms from time to time. The updated version will be posted on this page with a new effective date. Changes will not apply retroactively to orders already placed. If you keep using the website after changes take effect, you accept the updated terms.</p>

        <h2 id="t-contact">17. Contact</h2>
        <p>Questions about these terms, an order or a product can be sent to <a href="mailto:support@ibislabs.io">support@ibislabs.io</a> or by mail to <span className="fill">[registered address]</span>.</p>
      </div>
    </div>
  </section>
    </main>
  );
}
