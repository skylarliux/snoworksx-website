import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | SNOWORKSX',
  description: 'Terms and Conditions for use of the SNOWORKSX website and OEM manufacturing enquiry services.',
};

const LAST_UPDATED = 'June 2025';

export default function TermsPage() {
  return (
    <>
      <section style={{ background:'#0A0A0A', padding:'64px 0 48px', color:'#FFFFFF' }}>
        <div className="container">
          <span className="section-tag-white">Legal</span>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(36px,5vw,60px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.0, marginBottom:16 }}>Terms & Conditions</h1>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)' }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section style={{ padding:'64px 0 80px' }}>
        <div className="container" style={{ maxWidth:820 }}>

          <div style={{ background:'#F7F7F7', border:'1px solid #E5E5E5', padding:'20px 24px', marginBottom:40 }}>
            <p style={{ fontSize:14, color:'#555', lineHeight:1.7, margin:0 }}>
              <strong style={{ color:'#0A0A0A' }}>Please read carefully.</strong> These Terms govern your use of the SNOWORKSX website. Submitting an enquiry form does not create a binding contract or purchase commitment. Manufacturing agreements are governed by separate written contracts signed by both parties.
            </p>
          </div>

          <TermsSection title="1. Acceptance of Terms">
            <p>By accessing and using the SNOWORKSX website (snoworksx.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.</p>
            <p>These terms apply to all visitors, users, and others who access or use the website.</p>
          </TermsSection>

          <TermsSection title="2. Use of This Website">
            <p>The SNOWORKSX website is provided for informational and business enquiry purposes. You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit their use of the site.</p>
            <p>You must not:</p>
            <ul>
              <li>Use the site in any way that breaches any applicable local, national, or international law or regulation</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
              <li>Attempt to gain unauthorised access to any part of the site or its related systems</li>
              <li>Reproduce, duplicate, copy, or resell any part of our site in contravention of these terms</li>
            </ul>
          </TermsSection>

          <TermsSection title="3. Enquiries and Quote Requests">
            <p>Submitting a quote request or contact form through this website constitutes an expression of interest only. It does not constitute a purchase order, binding offer, or contract of any kind.</p>
            <p>Any manufacturing agreement, pricing, delivery schedule, or quality commitment becomes binding only when both parties have signed a formal written contract or purchase order. SNOWORKSX reserves the right to decline any enquiry at its discretion.</p>
            <p>We aim to respond to all enquiries within one business day. Response times may vary during public holidays observed in China.</p>
          </TermsSection>

          <TermsSection title="4. Intellectual Property">
            <p>All content on this website — including text, graphics, logos, product descriptions, and specifications — is the property of SNOWORKSX or its content suppliers and is protected by applicable intellectual property laws.</p>
            <p>You may view and print pages for your own personal or business evaluation use. You may not reproduce, distribute, or commercially exploit any content without our prior written consent.</p>
            <p>Any product specifications, design files, or brand assets submitted to us by enquiry users remain the intellectual property of the submitting party. We will not use or disclose such materials beyond what is necessary to respond to your enquiry.</p>
          </TermsSection>

          <TermsSection title="5. Confidentiality">
            <p>We treat all business information shared through enquiry forms as commercially confidential. For formal OEM production partnerships, a Non-Disclosure Agreement (NDA) is strongly recommended before the exchange of detailed specifications, brand assets, or proprietary product designs.</p>
            <p>We may request that visitors sign an NDA before sharing any technical drawings or brand identity materials. This is in the interests of both parties.</p>
          </TermsSection>

          <TermsSection title="6. Product Information and Specifications">
            <p>Product specifications, materials, dimensions, and capabilities described on this website are representative and indicative of our manufacturing capabilities. They do not constitute a product guarantee or warranty.</p>
            <p>Final product specifications for any OEM project are defined in the written contract and sample approval process. We reserve the right to update or modify the website content at any time without notice.</p>
            <p>All product images on this site are for illustrative purposes. Actual products are manufactured to client specifications.</p>
          </TermsSection>

          <TermsSection title="7. Disclaimer of Warranties">
            <p>This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. SNOWORKSX makes no representations or warranties of any kind, express or implied, regarding the operation of the site, the accuracy of the information, or the fitness for a particular purpose.</p>
            <p>We do not warrant that the website will be uninterrupted, error-free, or free from viruses or other harmful components.</p>
          </TermsSection>

          <TermsSection title="8. Limitation of Liability">
            <p>To the fullest extent permitted by applicable law, SNOWORKSX shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on its content.</p>
            <p>Our total liability for any claim related to this website shall not exceed the amount, if any, you paid to access it (which for this free website is zero).</p>
          </TermsSection>

          <TermsSection title="9. Third-Party Links">
            <p>Our website may contain links to external websites not operated by us. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.</p>
          </TermsSection>

          <TermsSection title="10. Governing Law">
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of the People&apos;s Republic of China. Any disputes arising from these terms or use of this website shall be subject to the jurisdiction of the courts of Weihai, Shandong Province, China.</p>
            <p>For international business disputes, we are open to arbitration through mutually agreed international arbitration procedures.</p>
          </TermsSection>

          <TermsSection title="11. Changes to These Terms">
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes take effect immediately upon posting to the website. The date at the top of this page reflects the most recent revision. Your continued use of the site constitutes acceptance of the revised terms.</p>
          </TermsSection>

          <TermsSection title="12. Contact">
            <p>If you have questions about these Terms and Conditions, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> info@snoworksx.com</li>
              <li><strong>Address:</strong> SNOWORKSX, Weihai, Shandong Province, China</li>
            </ul>
          </TermsSection>

          <div style={{ marginTop:48, paddingTop:32, borderTop:'1px solid #E5E5E5', display:'flex', gap:24, flexWrap:'wrap' }}>
            <Link href="/privacy" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#CC1414', textDecoration:'none' }}>Privacy Policy →</Link>
            <Link href="/contact" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#888', textDecoration:'none' }}>Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsSection({ title, children }) {
  return (
    <div style={{ marginBottom:40 }}>
      <h2 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:800, textTransform:'uppercase', letterSpacing:'.02em', marginBottom:16, paddingBottom:8, borderBottom:'2px solid #E5E5E5' }}>{title}</h2>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {children}
      </div>
      <style>{`
        div p{font-size:15px;line-height:1.8;color:#4A4A4A;margin:0}
        div ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8}
        div li{font-size:15px;line-height:1.7;color:#4A4A4A;padding-left:20px;position:relative}
        div li::before{content:"—";position:absolute;left:0;color:#CC1414}
        div strong{font-weight:600;color:#0A0A0A}
      `}</style>
    </div>
  );
}
