import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Ibis Labs website, waitlist and emails.",
};

const ADDRESS = "56 Hagalil St., Bat Hefer, Israel";

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero band">
        <div className="wrap">
          <h1>Terms of Use</h1>
          <p className="lede">Effective November 7, 2026. These terms apply to ibislabs.io, our waitlist and our emails.</p>
        </div>
      </section>
      <section className="legal band">
        <div className="wrap">
          <ul className="legal-toc" aria-label="Sections">
            <li><a href="#t-who">Who we are</a></li>
            <li><a href="#t-products">Products and sales</a></li>
            <li><a href="#t-health">Health information</a></li>
            <li><a href="#t-liability">Liability</a></li>
            <li><a href="#t-contact">Contact</a></li>
          </ul>
          <div className="legal-body">
            <h2 id="t-who">1. Who we are and agreeing to these terms</h2>
            <p>This website is operated by Ibis Labs Ltd, a company incorporated in Israel (“Ibis Labs”, “we”, “us”, “our”). Our registered address is {ADDRESS}.</p>
            <p>By using this website or joining our waitlist, you agree to these Terms of Use and to our Privacy Policy. If you do not agree, please do not use the website.</p>
            <p>You must be at least 18 years old to join our waitlist.</p>

            <h2 id="t-waitlist">2. Waitlist and emails</h2>
            <p>Before launch, you can leave your email address to hear when our products are available. Joining the waitlist does not reserve a product, guarantee availability, or create an obligation to buy. We will use your email to send launch news and related updates, as described in our Privacy Policy. You can unsubscribe at any time using the link in any email or by contacting us.</p>

            <h2 id="t-products">3. Products and sales</h2>
            <p>We do not currently sell any products through this website. Product information shown here describes products we plan to launch and may change before launch. When sales open, our products are expected to be offered in the United States only, and we will publish additional terms covering orders, pricing, payment, subscriptions, shipping, returns and refunds before you can buy. Those terms will be shown to you before you place an order.</p>

            <h2 id="t-health">4. Health information and product disclaimer</h2>
            <p><strong>Our products are dietary supplements, not medicines.</strong> The statements on this website and on our packaging have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease. The U.S. Food and Drug Administration does not approve dietary supplements before they are sold.</p>
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

            <h2 id="t-use">5. Using our website</h2>
            <p>You agree not to use the website in a way that is unlawful, harmful or disruptive. This includes attempting to gain unauthorized access to our systems, interfering with the website’s operation, scraping it in bulk, or submitting false information, including signing up email addresses that are not yours. We may suspend access to the website at our discretion.</p>
            <p>We may change, suspend or discontinue any part of the website at any time. We do not guarantee that the website will always be available or free of errors.</p>

            <h2 id="t-ip">6. Intellectual property</h2>
            <p>The Ibis Labs name, logo, product names, packaging designs, photographs, text and other content on this website are owned by us or our licensors and are protected by intellectual property laws. You may view and share content for personal, non-commercial purposes, but you may not copy, modify, distribute or use it commercially without our written permission.</p>
            <p>If you send us feedback, ideas or suggestions, you allow us to use them without restriction or payment to you.</p>

            <h2 id="t-links">7. Third-party links and services</h2>
            <p>The website may link to or rely on services run by others, such as email providers and social networks. We are not responsible for their content, policies or practices, and your use of them is governed by their own terms.</p>

            <h2 id="t-warranty">8. Disclaimer of warranties</h2>
            <p className="caps">To the fullest extent permitted by law, the website and its content are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement. Nothing in these terms limits any warranty that cannot be excluded under applicable law.</p>

            <h2 id="t-liability">9. Limitation of liability</h2>
            <p className="caps">To the fullest extent permitted by law, Ibis Labs and its officers, employees, manufacturers and partners will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, data or goodwill, arising from your use of the website or its content.</p>
            <p>Nothing in these terms excludes or limits liability that cannot be excluded or limited by law, including liability for death or personal injury caused by negligence, or for fraud.</p>

            <h2 id="t-indemnity">10. Indemnity</h2>
            <p>You agree to indemnify and hold Ibis Labs harmless from claims, losses and costs (including reasonable legal fees) arising from your breach of these terms or your misuse of the website, to the extent permitted by law.</p>

            <h2 id="t-concerns">11. Questions and concerns</h2>
            <p>If you have a concern about the website or these terms, please contact us first so we can try to resolve it informally.</p>

            <h2 id="t-general">12. General</h2>
            <p>If any part of these terms is found unenforceable, the rest remains in effect. Our failure to enforce a right is not a waiver of that right. You may not transfer your rights under these terms without our consent. These terms, together with our Privacy Policy, are the entire agreement between you and us about their subject.</p>

            <h2 id="t-changes">13. Changes to these terms</h2>
            <p>We may update these terms from time to time, including when we begin selling products. The updated version will be posted on this page with a new effective date. If you keep using the website after changes take effect, you accept the updated terms.</p>

            <h2 id="t-contact">14. Contact</h2>
            <p>Questions about these terms can be sent to <a href="mailto:support@ibislabs.io">support@ibislabs.io</a> or by mail to Ibis Labs Ltd, {ADDRESS}.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
