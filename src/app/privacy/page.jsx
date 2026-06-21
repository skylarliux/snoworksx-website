import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | SNOWORKSX',
  description: 'Privacy Policy for SNOWORKSX — how we collect, use, and protect your personal information.',
};

const LAST_UPDATED = 'June 2025';

export default function PrivacyPage() {
  return (
    <>
      <section style={{ background:'#0A0A0A', padding:'64px 0 48px', color:'#FFFFFF' }}>
        <div className="container">
          <span className="section-tag-white">Legal</span>
          <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:'clamp(36px,5vw,60px)', fontWeight:900, textTransform:'uppercase', letterSpacing:'-.01em', lineHeight:1.0, marginBottom:16 }}>Privacy Policy</h1>
          <p style={{ fontSize:14, color:'rgba(255,255,255,0.4)' }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section style={{ padding:'64px 0 80px' }}>
        <div className="container" style={{ maxWidth:820 }}>
          <PolicySection title="1. Introduction">
            <p>SNOWORKSX (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information you provide when you visit snoworksx.com or contact us through our website enquiry forms.</p>
            <p>By using our website, you agree to the collection and use of information in accordance with this policy. This site is operated by SNOWORKSX, a manufacturing company registered in Weihai, Shandong Province, China.</p>
          </PolicySection>

          <PolicySection title="2. Information We Collect">
            <p><strong>Information you provide directly:</strong> When you submit a quote request or contact form, we collect your name, company or brand name, email address, phone number, country of residence, and any project details you choose to share.</p>
            <p><strong>Information collected automatically:</strong> When you visit our site, we may automatically collect certain technical information including your IP address, browser type, operating system, referring URLs, and pages visited. This information is collected via standard web analytics tools (such as Google Analytics) and is used in aggregate to understand how visitors use our site.</p>
            <p><strong>Cookies:</strong> Our website may use cookies — small text files stored on your device — to improve your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Note that some parts of the site may not function properly without cookies.</p>
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your manufacturing enquiries and quote requests</li>
              <li>Communicate with you about your project requirements</li>
              <li>Improve our website content and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do not use your contact details for unsolicited marketing. If you receive a follow-up from us, it is solely in connection with an enquiry you submitted.</p>
          </PolicySection>

          <PolicySection title="4. Confidentiality of Business Information">
            <p>We understand that manufacturing enquiries often contain commercially sensitive information. Any product specifications, design files, volume data, or brand information you share with us is treated as strictly confidential. We do not share such information with third parties without your express written consent.</p>
            <p>For production partnerships, a formal Non-Disclosure Agreement (NDA) is available and recommended before any detailed design files or proprietary specifications are exchanged.</p>
          </PolicySection>

          <PolicySection title="5. Data Sharing and Disclosure">
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
            <ul>
              <li><strong>Service providers:</strong> Third-party vendors who assist us in operating our website or conducting our business (such as email hosting providers), subject to confidentiality obligations.</li>
              <li><strong>Legal requirements:</strong> When disclosure is required by law or to protect our legal rights.</li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Data Retention">
            <p>We retain personal information for as long as necessary to fulfil the purposes described in this policy, or as required by law. Enquiry data is typically retained for three years to allow for follow-up on business relationships. You may request deletion of your data at any time by contacting us.</p>
          </PolicySection>

          <PolicySection title="7. Data Security">
            <p>We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </PolicySection>

          <PolicySection title="8. Third-Party Links">
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.</p>
          </PolicySection>

          <PolicySection title="9. Your Rights">
            <p>You may have the right to access, correct, or delete personal information we hold about you, depending on applicable law. To exercise these rights, please contact us using the details below.</p>
          </PolicySection>

          <PolicySection title="10. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes your acceptance of the updated policy.</p>
          </PolicySection>

          <PolicySection title="11. Contact Us">
            <p>If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> info@snoworksx.com</li>
              <li><strong>Address:</strong> SNOWORKSX, Weihai, Shandong Province, China</li>
              <li><strong>Website:</strong> snoworksx.com</li>
            </ul>
          </PolicySection>

          <div style={{ marginTop:48, paddingTop:32, borderTop:'1px solid #E5E5E5', display:'flex', gap:24, flexWrap:'wrap' }}>
            <Link href="/terms" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#CC1414', textDecoration:'none' }}>Terms & Conditions →</Link>
            <Link href="/contact" style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#888', textDecoration:'none' }}>Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PolicySection({ title, children }) {
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
