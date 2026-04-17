// // src/components/pages/ReturnPolicy.js
// import React from 'react';

// function ReturnPolicy() {
//   return (
//     <div className="page-content">
//       <div className="container">
//         <h1 className="page-title">Return Policy</h1>
        
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        
//         <h4 className="mt-4">Return Process</h4>
//         <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        
//         <h4 className="mt-4">Refund Timeline</h4>
//         <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        
//         <h4 className="mt-4">Conditions for Returns</h4>
//         <ul>
//           <li>Product must be in original condition</li>
//           <li>Return within 30 days of purchase</li>
//           <li>Original receipt or proof of purchase required</li>
//           <li>Certain products may not be returnable</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ReturnPolicy;




import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "./ReturnPolicy.css";

export const Route = createFileRoute("/return-policy")({
  component: ReturnPolicy,
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

function ReturnPolicy() {
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
            <span className="rp-dot" /> Policy Document
          </span>

          <h1 class="rp-hero-title">
  <span class="return">Return</span>
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
                  <li><a href="#process">Return Process</a></li>
                  <li><a href="#refund">Refund Timeline</a></li>
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
                    <h2>Return Process</h2>
                  </div>
                </div>
                <p>
                  Submit request → Review → Pickup → Inspection → Refund
                  with real-time updates via dashboard and email.
                </p>
              </article>

              {/* 2 */}
              <article id="refund" className="rp-section">
                <div className="rp-section-head">
                  <div className="rp-section-icon">⏱</div>
                  <div>
                    <span className="rp-section-num">Section 02</span>
                    <h2>Refund Timeline</h2>
                  </div>
                </div>

                <table className="rp-table">
                  <thead>
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
                </table>
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

export default ReturnPolicy;