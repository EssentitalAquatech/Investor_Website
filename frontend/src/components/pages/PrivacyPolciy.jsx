// // src/components/pages/PrivacyPolicy.js
// import React from 'react';

// function PrivacyPolicy() {
//   return (
//     <div className="page-content">
//       <div className="container">
//         <h1 className="page-title">Privacy Policy</h1>
//         <p>Last Updated: January 2023</p>
        
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
//         <h4 className="mt-4">Information We Collect</h4>
//         <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        
//         <h4 className="mt-4">How We Use Your Information</h4>
//         <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        
//         <h4 className="mt-4">Data Security</h4>
//         <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
//       </div>
//     </div>
//   );
// }

// export default PrivacyPolicy;










import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "./ReturnPolicy.css";

export const Route = createFileRoute("/return-policy")({
  component: PrivacyPolicy,
  head: () => ({
    title: "Return Policy | Enterprise IT Solutions",
    meta: [
      {
        name: "description",
        content:
          "Read our enterprise-grade Return Policy covering refunds, eligibility, inspection, shipping, cancellation and support.",
      },
      {
        property: "og:title",
        content: "Return Policy | Enterprise IT Solutions",
      },
      {
        property: "og:description",
        content:
          "Clear, transparent and professional Return Policy for enterprise customers.",
      },
    ],
  }),
});

function PrivacyPolicy() {
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href")?.slice(1);
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <main className="rp-page">

      {/* HERO */}
      <header className="rp-hero">
        <div className="container">
          <span className="rp-eyebrow">
            <span className="rp-dot" /> Privacy Document
          </span>

          <h1 class="rp-hero-title">
  <span class="return">Privacy</span>
  <span class="policy"> Policy</span>
</h1>

          <p className="rp-lead">
            A transparent, enterprise-grade overview of returns, refunds,
            inspection, shipping, cancellations and customer support.
          </p>

          <div className="rp-meta">
            <span className="rp-meta-item">Effective: 01 Jan 2025</span>
            
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="rp-content">
        <div className="container">
          <div className="row g-4">

            {/* TOC */}
            <aside className="col-12 col-xl-3">
              <nav className="rp-toc">
                <h6>On this page</h6>
                <ol>
                  <li><a href="#process">Information We Collect</a></li>
                  <li><a href="#refund">How We Use Information</a></li>
                  <li><a href="#conditions">Conditions</a></li>
                  <li><a href="#eligibility">Eligibility</a></li>
                  <li><a href="#nonreturn">Non-Returnable</a></li>
                  <li><a href="#inspection">Inspection</a></li>
                  <li><a href="#shipping">Shipping</a></li>
                  <li><a href="#cancel">Cancellation</a></li>
                  <li><a href="#support">Support</a></li>
                </ol>
              </nav>
            </aside>

            {/* SECTIONS */}
            <div className="col-12 col-xl-9">

              {/* 1 */}
              <article id="process" className="rp-section">
                <div className="rp-section-head">
                  <div className="rp-section-icon">↻</div>
                  <div>
                    <span className="rp-section-num">Section 01</span>
                    <h2>Information We Collect</h2>
                  </div>
                </div>
                <p>
                 We collect information that helps us deliver, secure, and improve our services. The categories of data we collect depend on how you interact with our platform and the role you have within your organization.
                </p>
                <h5>Information you provide</h5>
                <p>Account details such as name, business email, role, and company.<br/>
Billing details including company address and tax identifiers.<br/>
Content you upload, generate, or process within the platform.<br/>
Support communications and feedback you choose to share.</p>
<h5>Information collected automatically</h5>
<p>Device, browser, operating system, and language preferences.<br/>
IP address, approximate location, and session activity logs.<br/>
Product usage telemetry and diagnostic events.</p>
              </article>

              {/* 2 */}
              <article id="refund" className="rp-section">
                <div className="rp-section-head">
                  <div className="rp-section-icon">⏱</div>
                  <div>
                    <span className="rp-section-num">Section 02</span>
                    <h2>How We Use Information</h2>
                  </div>
                </div>

                {/* <table className="rp-table"> */}
                  {/* <thead>
                    <tr>
                      <th>Method</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Credit/Debit Card</td>
                      <td>5–7 days</td>
                      <td>Standard</td>
                    </tr>
                    <tr>
                      <td>UPI / Net Banking</td>
                      <td>3–5 days</td>
                      <td>Standard</td>
                    </tr>
                    <tr>
                      <td>Wallet</td>
                      <td>24 hours</td>
                      <td>Instant</td>
                    </tr>
                  </tbody>
                </table> */}
                <p>We use collected information to operate our services responsibly, to improve customer experience, and to meet contractual and legal obligations. Specifically, we may use information to:<br/>

Provision, configure, and maintain your account and workspace.<br/>
Authenticate users and prevent unauthorized access or abuse.<br/>
Provide technical support, product onboarding, and training.<br/>
Analyze platform performance and improve product reliability.<br/>
Send service announcements, security alerts, and policy updates.<br/>
Comply with applicable laws, regulations, and lawful requests.</p>
              </article>

              {/* 3 */}
              <article id="conditions" className="rp-section">
                <h2>Conditions for Returns</h2>
                <p>
                  Product unused, original packaging, accessories and invoice required.
                </p>
              </article>

              {/* 4 */}
              <article id="eligibility" className="rp-section">
                <h2>Eligibility Criteria</h2>
                <ul>
                  <li>Defective on arrival</li>
                  <li>Wrong item shipped</li>
                  <li>Damaged in transit</li>
                  <li>Activation issues</li>
                </ul>
              </article>

              {/* 5 */}
              <article id="nonreturn" className="rp-section">
                <h2>Non-Returnable Items</h2>
                <p>
                  Digital licenses, custom builds, opened consumables, and services.
                </p>
              </article>

              {/* 6 */}
              <article id="inspection" className="rp-section">
                <h2>Inspection & Approval</h2>
                <p>
                  QC checks, serial verification and functional testing before refund.
                </p>
              </article>

              {/* 7 */}
              <article id="shipping" className="rp-section">
                <h2>Shipping & Reverse Pickup</h2>
                <p>
                  Reverse pickup available for eligible defective or wrong items.
                </p>
              </article>

              {/* 8 */}
              <article id="cancel" className="rp-section">
                <h2>Cancellation Policy</h2>
                <p>
                  Orders can be cancelled within 2 hours of placement.
                </p>
              </article>

              {/* 9 */}
              <article id="support" className="rp-section">
                <h2>Customer Support</h2>
                <p>
                  Email: 24x7@essentialaquatech.com
                </p>
              </article>

            

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;