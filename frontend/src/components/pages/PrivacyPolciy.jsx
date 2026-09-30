







// import { useEffect } from "react";
// import SEO from "../SEO";
// import "./PrivacyPolicy.css";

// function PrivacyPolicy() {
//   useEffect(() => {
//     const handler = (e) => {
//       const link = e.target.closest('a[href^="#"]');
//       if (!link) return;

//       const id = link.getAttribute("href")?.slice(1);
//       const el = document.getElementById(id);

//       if (el) {
//         e.preventDefault();
//         el.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     };

//     document.addEventListener("click", handler);

//     return () => {
//       document.removeEventListener("click", handler);
//     };
//   }, []);

//   return (
//     <main className="rp-page">
//       <SEO
//         title="Privacy Policy | Essential Aquatech"
//         description="Read the Privacy Policy of Essential Aquatech covering personal information collection, use, retention, security, user rights and responsible data handling."
//         canonical="https://www.essentialaquatech.in/privacy-policy"
//       />

//       {/* HERO */}
//       <header className="rp-hero">
//         <div className="container">
//           <span className="rp-eyebrow">
//             <span className="rp-dot" /> Privacy Document
//           </span>

//           <h1 className="rp-hero-title">
//             <span className="return">Privacy</span>
//             <span className="policy"> Policy</span>
//           </h1>

//           <p className="rp-lead">
//             This Privacy Policy explains how Essential Aquatech collects,
//             uses, stores, protects and manages personal information when you
//             interact with our website, services, products and enquiry
//             channels.
//           </p>

//           <div className="rp-meta">
//             <span className="rp-meta-item">
//               Effective: 30 Sep 2026
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* CONTENT */}
//       <section className="rp-content">
//         <div className="container">
//           <div className="row g-4">

//             {/* TABLE OF CONTENTS */}
//             <aside className="col-12 col-xl-3">
//               <nav className="rp-toc">
//                 <h6>On this page</h6>

//                 <ol>
//                   <li>
//                     <a href="#process">Information We Collect</a>
//                   </li>

//                   <li>
//                     <a href="#refund">How We Use Information</a>
//                   </li>

//                   <li>
//                     <a href="#purpose">Purpose of Processing</a>
//                   </li>

//                   <li>
//                     <a href="#retention">Data Retention</a>
//                   </li>

//                   <li>
//                     <a href="#sharing">Data Sharing</a>
//                   </li>

//                   <li>
//                     <a href="#security">Data Security</a>
//                   </li>

//                   <li>
//                     <a href="#rights">Your Rights</a>
//                   </li>

//                   <li>
//                     <a href="#cookies">Cookies & Technologies</a>
//                   </li>

//                   <li>
//                     <a href="#updates">Policy Updates</a>
//                   </li>

//                   <li>
//                     <a href="#support">Contact & Grievance</a>
//                   </li>
//                 </ol>
//               </nav>
//             </aside>

//             {/* SECTIONS */}
//             <div className="col-12 col-xl-9">

//               {/* 1 */}
//               <article id="process" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">↻</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 01
//                     </span>

//                     <h2>Information We Collect</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Essential Aquatech may collect information that you
//                   voluntarily provide when you contact us, submit an enquiry,
//                   request information, explore our products or services, or
//                   otherwise interact with our website.
//                 </p>

//                 <h5>Information you provide</h5>

//                 <p>
//                   <strong>Name:</strong> Your name or full name.
//                   <br />

//                   <strong>Email Address:</strong> Your email address for
//                   communication and responding to enquiries.
//                   <br />

//                   <strong>Phone Number:</strong> Your phone number when
//                   provided for communication, service or business assistance.
//                   <br />

//                   <strong>Enquiry Information:</strong> The enquiry type,
//                   message and other information that you voluntarily submit.
//                   <br />

//                   <strong>Business Information:</strong> Where voluntarily
//                   provided, information relating to your company,
//                   dealership, distribution, partnership or business enquiry.
//                 </p>

//                 <h5>Information collected automatically</h5>

//                 <p>
//                   When you visit our website, certain technical information
//                   may be collected automatically by the website or its
//                   supporting technologies, such as browser type, device
//                   information, pages visited and basic technical or
//                   diagnostic information.
//                 </p>

//                 <p>
//                   We only intend to collect and use information that is
//                   reasonably relevant to the purpose for which it is
//                   processed.
//                 </p>
//               </article>

//               {/* 2 */}
//               <article id="refund" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">⏱</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 02
//                     </span>

//                     <h2>How We Use Information</h2>
//                   </div>
//                 </div>

//                 <p>
//                   We use the information you provide to communicate with you,
//                   respond to your requests and enquiries, provide requested
//                   services or assistance, and operate our business
//                   responsibly.
//                 </p>

//                 <p>
//                   Your information may be used to:
//                   <br />
//                   Respond to contact and business enquiries.
//                   <br />
//                   Communicate regarding products, services or requested
//                   assistance.
//                   <br />
//                   Process partnership, dealer or distributor enquiries.
//                   <br />
//                   Provide customer or business support.
//                   <br />
//                   Understand and improve our products, services and website.
//                   <br />
//                   Maintain records relating to enquiries and communications.
//                   <br />
//                   Protect our website, systems and users against misuse,
//                   fraud or unauthorized activity.
//                   <br />
//                   Comply with applicable legal and regulatory requirements.
//                 </p>
//               </article>

//               {/* 3 */}
//               <article id="purpose" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">✓</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 03
//                     </span>

//                     <h2>Purpose of Processing</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Personal information is processed for specific and
//                   legitimate purposes connected with your interaction with
//                   Essential Aquatech.
//                 </p>

//                 <ul className="rp-list">
//                   <li>
//                     <strong>Enquiry Response</strong>
//                     <small>
//                       To respond to questions, requests and messages submitted
//                       through our contact channels.
//                     </small>
//                   </li>

//                   <li>
//                     <strong>Products & Services</strong>
//                     <small>
//                       To provide information, assistance or services that you
//                       have requested.
//                     </small>
//                   </li>

//                   <li>
//                     <strong>Business Enquiries</strong>
//                     <small>
//                       To communicate regarding partnership, dealer,
//                       distributor, institutional or other business enquiries.
//                     </small>
//                   </li>

//                   <li>
//                     <strong>Website & Service Improvement</strong>
//                     <small>
//                       To understand and improve our website, products,
//                       services and customer experience.
//                     </small>
//                   </li>
//                 </ul>
//               </article>

//               {/* 4 */}
//               <article id="retention" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">⌛</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 04
//                     </span>

//                     <h2>Data Retention</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Essential Aquatech may retain personal information for as
//                   long as it is reasonably necessary to fulfil the purpose
//                   for which it was collected, including responding to an
//                   enquiry, providing a requested product or service, managing
//                   a business relationship, maintaining appropriate records,
//                   resolving disputes or meeting applicable legal
//                   requirements.
//                 </p>

//                 <p>
//                   Once personal information is no longer required for the
//                   relevant purpose or legal obligation, it may be deleted,
//                   anonymised or otherwise disposed of in accordance with
//                   applicable requirements and our internal practices.
//                 </p>

//                 <div className="rp-callout">
//                   <strong>Important</strong>
//                   Your information is not intended to be retained
//                   indefinitely. Retention depends on the purpose for which
//                   the information was collected and any applicable legal or
//                   operational requirements.
//                 </div>
//               </article>

//               {/* 5 */}
//               <article id="sharing" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">↗</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 05
//                     </span>

//                     <h2>Data Sharing</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Essential Aquatech does not intend to sell your personal
//                   information. Information may be shared or made available
//                   where reasonably necessary to provide the requested
//                   service, operate our website and business, protect our
//                   systems, or comply with applicable law.
//                 </p>

//                 <p>
//                   Where external service providers are used for functions
//                   such as website operation, communication, email delivery,
//                   hosting, analytics, security or other business operations,
//                   relevant information may be processed by those providers
//                   as necessary for the applicable service.
//                 </p>

//                 <p>
//                   We seek to limit access to personal information to what is
//                   reasonably necessary for the relevant purpose.
//                 </p>
//               </article>

//               {/* 6 */}
//               <article id="security" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">🔒</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 06
//                     </span>

//                     <h2>Data Security</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Essential Aquatech takes reasonable measures to protect
//                   personal information against unauthorized access, misuse,
//                   alteration, disclosure or loss.
//                 </p>

//                 <p>
//                   Access to information may be limited to authorized
//                   personnel, systems or service providers who require it for
//                   legitimate business purposes.
//                 </p>

//                 <p>
//                   However, no method of transmission or electronic storage
//                   can be guaranteed to be completely secure. We therefore
//                   encourage users to take reasonable care when sharing
//                   personal information online.
//                 </p>
//               </article>

//               {/* 7 */}
//               <article id="rights" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">◎</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 07
//                     </span>

//                     <h2>Your Rights</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Subject to applicable law, you may have rights relating to
//                   your personal information, including the ability to seek
//                   information about processing, request correction of
//                   inaccurate information, request deletion where applicable,
//                   and withdraw consent where processing is based on consent.
//                 </p>

//                 <p>
//                   You may contact Essential Aquatech using the contact
//                   information provided below for requests relating to your
//                   personal information.
//                 </p>

//                 <div className="rp-callout">
//                   <strong>Withdrawal of Consent</strong>
//                   Where processing is based on your consent, you may request
//                   withdrawal of that consent. Withdrawal may affect our
//                   ability to continue providing the relevant service or
//                   responding to the relevant enquiry.
//                 </div>
//               </article>

//               {/* 8 */}
//               <article id="cookies" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">⚙</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 08
//                     </span>

//                     <h2>Cookies & Technologies</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Our website may use cookies or similar technologies to
//                   support website functionality, security, performance and
//                   user experience.
//                 </p>

//                 <p>
//                   Depending on the technologies used on the website, certain
//                   technical information may be collected to understand how
//                   visitors interact with our website and to improve its
//                   functionality.
//                 </p>

//                 <p>
//                   You may be able to control certain cookies through your
//                   browser settings. Disabling some cookies may affect the
//                   functionality of certain parts of the website.
//                 </p>
//               </article>

//               {/* 9 */}
//               <article id="updates" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">↻</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 09
//                     </span>

//                     <h2>Changes to This Privacy Policy</h2>
//                   </div>
//                 </div>

//                 <p>
//                   Essential Aquatech may update this Privacy Policy from time
//                   to time to reflect changes in our services, website,
//                   business practices, legal requirements or applicable data
//                   protection requirements.
//                 </p>

//                 <p>
//                   When changes are made, the updated version will be published
//                   on this page along with the applicable effective date.
//                 </p>

//                 <p>
//                   We encourage you to review this page periodically to remain
//                   informed about how we handle personal information.
//                 </p>
//               </article>

//               {/* 10 */}
//               <article id="support" className="rp-section">
//                 <div className="rp-section-head">
//                   <div className="rp-section-icon">✉</div>

//                   <div>
//                     <span className="rp-section-num">
//                       Section 10
//                     </span>

//                     <h2>Contact & Privacy Enquiries</h2>
//                   </div>
//                 </div>

//                 <p>
//                   If you have a question, request or concern regarding this
//                   Privacy Policy or the handling of your personal information,
//                   you can contact Essential Aquatech.
//                 </p>

//                 <div className="rp-support">

//                   <div className="rp-support-item">
//                     <div className="rp-support-label">
//                       Company
//                     </div>

//                     <div className="rp-support-value">
//                       Essential Aquatech Private Limited
//                     </div>

//                     <div className="rp-support-sub">
//                       Aquaculture Technology & Solutions
//                     </div>
//                   </div>

//                   <div className="rp-support-item">
//                     <div className="rp-support-label">
//                       Email
//                     </div>

//                     <div className="rp-support-value">
//                       24x7@essentialaquatech.com
//                     </div>

//                     <div className="rp-support-sub">
//                       Privacy & General Enquiries
//                     </div>
//                   </div>

//                   <div className="rp-support-item">
//                     <div className="rp-support-label">
//                       Phone
//                     </div>

//                     <div className="rp-support-value">
//                       +91 90462 26705
//                     </div>

//                     <div className="rp-support-sub">
//                       Contact Support
//                     </div>
//                   </div>

//                 </div>
//               </article>

//               {/* FINAL NOTE */}
//               <div className="rp-final-note">
//                 This Privacy Policy applies to information handled through
//                 the Essential Aquatech website and related enquiry channels,
//                 subject to applicable laws and regulations.
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default PrivacyPolicy;
































import { useEffect } from "react";
import SEO from "../SEO";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href")?.slice(1);
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rp-in-view");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll("[data-anim]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="rp-page">
      <SEO
        title="Privacy Policy | Essential Aquatech"
        description="Read the Privacy Policy of Essential Aquatech covering personal information collection, use, retention, security, user rights and responsible data handling."
        canonical="https://www.essentialaquatech.in/privacy-policy"
      />

      {/* HERO */}
      <header className="rp-hero">
        <div className="container">
          <span className="rp-eyebrow" data-anim="fade-down">
            <span className="rp-dot" /> Privacy Document
          </span>

          <h1 className="rp-hero-title" data-anim="fade-up">
            <span className="return">Privacy</span>
            <span className="policy"> Policy</span>
          </h1>

          <p className="rp-lead" data-anim="fade-up" data-delay="120">
            This Privacy Policy explains how Essential Aquatech collects,
            uses, stores, protects and manages personal information when you
            interact with our website, services, products and enquiry
            channels.
          </p>

          <div className="rp-meta" data-anim="fade-up" data-delay="220">
            <span className="rp-meta-item">
              Effective: 30 Sep 2026
            </span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="rp-content">
        <div className="container">
          <div className="row g-4">

            {/* TABLE OF CONTENTS */}
            <aside className="col-12 col-xl-3">
              <nav className="rp-toc" data-anim="slide-left">
                <h6>On this page</h6>

                <ol>
                  <li>
                    <a href="#process">Information We Collect</a>
                  </li>

                  <li>
                    <a href="#refund">How We Use Information</a>
                  </li>

                  <li>
                    <a href="#purpose">Purpose of Processing</a>
                  </li>

                  <li>
                    <a href="#retention">Data Retention</a>
                  </li>

                  <li>
                    <a href="#sharing">Data Sharing</a>
                  </li>

                  <li>
                    <a href="#security">Data Security</a>
                  </li>

                  <li>
                    <a href="#rights">Your Rights</a>
                  </li>

                  <li>
                    <a href="#cookies">Cookies & Technologies</a>
                  </li>

                  <li>
                    <a href="#updates">Policy Updates</a>
                  </li>

                  <li>
                    <a href="#support">Contact & Grievance</a>
                  </li>
                </ol>
              </nav>
            </aside>

            {/* SECTIONS */}
            <div className="col-12 col-xl-9">

              {/* 1 */}
              <article id="process" className="rp-section" data-anim="slide-right">
                <div className="rp-section-head">
                  <div className="rp-section-icon">↻</div>

                  <div>
                    <span className="rp-section-num">
                      Section 01
                    </span>

                    <h2>Information We Collect</h2>
                  </div>
                </div>

                <p>
                  Essential Aquatech may collect information that you
                  voluntarily provide when you contact us, submit an enquiry,
                  request information, explore our products or services, or
                  otherwise interact with our website.
                </p>

                <h5>Information you provide</h5>

                <p>
                  <strong>Name:</strong> Your name or full name.
                  <br />

                  <strong>Email Address:</strong> Your email address for
                  communication and responding to enquiries.
                  <br />

                  <strong>Phone Number:</strong> Your phone number when
                  provided for communication, service or business assistance.
                  <br />

                  <strong>Enquiry Information:</strong> The enquiry type,
                  message and other information that you voluntarily submit.
                  <br />

                  <strong>Business Information:</strong> Where voluntarily
                  provided, information relating to your company,
                  dealership, distribution, partnership or business enquiry.
                </p>

                <h5>Information collected automatically</h5>

                <p>
                  When you visit our website, certain technical information
                  may be collected automatically by the website or its
                  supporting technologies, such as browser type, device
                  information, pages visited and basic technical or
                  diagnostic information.
                </p>

                <p>
                  We only intend to collect and use information that is
                  reasonably relevant to the purpose for which it is
                  processed.
                </p>
              </article>

              {/* 2 */}
              <article id="refund" className="rp-section" data-anim="slide-left">
                <div className="rp-section-head">
                  <div className="rp-section-icon">⏱</div>

                  <div>
                    <span className="rp-section-num">
                      Section 02
                    </span>

                    <h2>How We Use Information</h2>
                  </div>
                </div>

                <p>
                  We use the information you provide to communicate with you,
                  respond to your requests and enquiries, provide requested
                  services or assistance, and operate our business
                  responsibly.
                </p>

                <p>
                  Your information may be used to:
                  <br />
                  Respond to contact and business enquiries.
                  <br />
                  Communicate regarding products, services or requested
                  assistance.
                  <br />
                  Process partnership, dealer or distributor enquiries.
                  <br />
                  Provide customer or business support.
                  <br />
                  Understand and improve our products, services and website.
                  <br />
                  Maintain records relating to enquiries and communications.
                  <br />
                  Protect our website, systems and users against misuse,
                  fraud or unauthorized activity.
                  <br />
                  Comply with applicable legal and regulatory requirements.
                </p>
              </article>

              {/* 3 */}
              <article id="purpose" className="rp-section" data-anim="fade-up">
                <div className="rp-section-head">
                  <div className="rp-section-icon">✓</div>

                  <div>
                    <span className="rp-section-num">
                      Section 03
                    </span>

                    <h2>Purpose of Processing</h2>
                  </div>
                </div>

                <p>
                  Personal information is processed for specific and
                  legitimate purposes connected with your interaction with
                  Essential Aquatech.
                </p>

                <ul className="rp-list">
                  <li>
                    <strong>Enquiry Response</strong>
                    <small>
                      To respond to questions, requests and messages submitted
                      through our contact channels.
                    </small>
                  </li>

                  <li>
                    <strong>Products & Services</strong>
                    <small>
                      To provide information, assistance or services that you
                      have requested.
                    </small>
                  </li>

                  <li>
                    <strong>Business Enquiries</strong>
                    <small>
                      To communicate regarding partnership, dealer,
                      distributor, institutional or other business enquiries.
                    </small>
                  </li>

                  <li>
                    <strong>Website & Service Improvement</strong>
                    <small>
                      To understand and improve our website, products,
                      services and customer experience.
                    </small>
                  </li>
                </ul>
              </article>

              {/* 4 */}
              <article id="retention" className="rp-section" data-anim="slide-right">
                <div className="rp-section-head">
                  <div className="rp-section-icon">⌛</div>

                  <div>
                    <span className="rp-section-num">
                      Section 04
                    </span>

                    <h2>Data Retention</h2>
                  </div>
                </div>

                <p>
                  Essential Aquatech may retain personal information for as
                  long as it is reasonably necessary to fulfil the purpose
                  for which it was collected, including responding to an
                  enquiry, providing a requested product or service, managing
                  a business relationship, maintaining appropriate records,
                  resolving disputes or meeting applicable legal
                  requirements.
                </p>

                <p>
                  Once personal information is no longer required for the
                  relevant purpose or legal obligation, it may be deleted,
                  anonymised or otherwise disposed of in accordance with
                  applicable requirements and our internal practices.
                </p>

                <div className="rp-callout">
                  <strong>Important</strong>
                  Your information is not intended to be retained
                  indefinitely. Retention depends on the purpose for which
                  the information was collected and any applicable legal or
                  operational requirements.
                </div>
              </article>

              {/* 5 */}
              <article id="sharing" className="rp-section" data-anim="slide-left">
                <div className="rp-section-head">
                  <div className="rp-section-icon">↗</div>

                  <div>
                    <span className="rp-section-num">
                      Section 05
                    </span>

                    <h2>Data Sharing</h2>
                  </div>
                </div>

                <p>
                  Essential Aquatech does not intend to sell your personal
                  information. Information may be shared or made available
                  where reasonably necessary to provide the requested
                  service, operate our website and business, protect our
                  systems, or comply with applicable law.
                </p>

                <p>
                  Where external service providers are used for functions
                  such as website operation, communication, email delivery,
                  hosting, analytics, security or other business operations,
                  relevant information may be processed by those providers
                  as necessary for the applicable service.
                </p>

                <p>
                  We seek to limit access to personal information to what is
                  reasonably necessary for the relevant purpose.
                </p>
              </article>

              {/* 6 */}
              <article id="security" className="rp-section" data-anim="fade-up">
                <div className="rp-section-head">
                  <div className="rp-section-icon">🔒</div>

                  <div>
                    <span className="rp-section-num">
                      Section 06
                    </span>

                    <h2>Data Security</h2>
                  </div>
                </div>

                <p>
                  Essential Aquatech takes reasonable measures to protect
                  personal information against unauthorized access, misuse,
                  alteration, disclosure or loss.
                </p>

                <p>
                  Access to information may be limited to authorized
                  personnel, systems or service providers who require it for
                  legitimate business purposes.
                </p>

                <p>
                  However, no method of transmission or electronic storage
                  can be guaranteed to be completely secure. We therefore
                  encourage users to take reasonable care when sharing
                  personal information online.
                </p>
              </article>

              {/* 7 */}
              <article id="rights" className="rp-section" data-anim="slide-right">
                <div className="rp-section-head">
                  <div className="rp-section-icon">◎</div>

                  <div>
                    <span className="rp-section-num">
                      Section 07
                    </span>

                    <h2>Your Rights</h2>
                  </div>
                </div>

                <p>
                  Subject to applicable law, you may have rights relating to
                  your personal information, including the ability to seek
                  information about processing, request correction of
                  inaccurate information, request deletion where applicable,
                  and withdraw consent where processing is based on consent.
                </p>

                <p>
                  You may contact Essential Aquatech using the contact
                  information provided below for requests relating to your
                  personal information.
                </p>

                <div className="rp-callout">
                  <strong>Withdrawal of Consent</strong>
                  Where processing is based on your consent, you may request
                  withdrawal of that consent. Withdrawal may affect our
                  ability to continue providing the relevant service or
                  responding to the relevant enquiry.
                </div>
              </article>

              {/* 8 */}
              <article id="cookies" className="rp-section" data-anim="slide-left">
                <div className="rp-section-head">
                  <div className="rp-section-icon">⚙</div>

                  <div>
                    <span className="rp-section-num">
                      Section 08
                    </span>

                    <h2>Cookies & Technologies</h2>
                  </div>
                </div>

                <p>
                  Our website may use cookies or similar technologies to
                  support website functionality, security, performance and
                  user experience.
                </p>

                <p>
                  Depending on the technologies used on the website, certain
                  technical information may be collected to understand how
                  visitors interact with our website and to improve its
                  functionality.
                </p>

                <p>
                  You may be able to control certain cookies through your
                  browser settings. Disabling some cookies may affect the
                  functionality of certain parts of the website.
                </p>
              </article>

              {/* 9 */}
              <article id="updates" className="rp-section" data-anim="fade-up">
                <div className="rp-section-head">
                  <div className="rp-section-icon">↻</div>

                  <div>
                    <span className="rp-section-num">
                      Section 09
                    </span>

                    <h2>Changes to This Privacy Policy</h2>
                  </div>
                </div>

                <p>
                  Essential Aquatech may update this Privacy Policy from time
                  to time to reflect changes in our services, website,
                  business practices, legal requirements or applicable data
                  protection requirements.
                </p>

                <p>
                  When changes are made, the updated version will be published
                  on this page along with the applicable effective date.
                </p>

                <p>
                  We encourage you to review this page periodically to remain
                  informed about how we handle personal information.
                </p>
              </article>

              {/* 10 */}
              <article id="support" className="rp-section" data-anim="slide-right">
                <div className="rp-section-head">
                  <div className="rp-section-icon">✉</div>

                  <div>
                    <span className="rp-section-num">
                      Section 10
                    </span>

                    <h2>Contact & Privacy Enquiries</h2>
                  </div>
                </div>

                <p>
                  If you have a question, request or concern regarding this
                  Privacy Policy or the handling of your personal information,
                  you can contact Essential Aquatech.
                </p>

                <div className="rp-support">

                  <div className="rp-support-item">
                    <div className="rp-support-label">
                      Company
                    </div>

                    <div className="rp-support-value">
                      Essential Aquatech Private Limited
                    </div>

                    <div className="rp-support-sub">
                      Aquaculture Technology & Solutions
                    </div>
                  </div>

                  <div className="rp-support-item">
                    <div className="rp-support-label">
                      Email
                    </div>

                    <div className="rp-support-value">
                      24x7@essentialaquatech.com
                    </div>

                    <div className="rp-support-sub">
                      Privacy & General Enquiries
                    </div>
                  </div>

                  <div className="rp-support-item">
                    <div className="rp-support-label">
                      Phone
                    </div>

                    <div className="rp-support-value">
                      +91 90462 26705
                    </div>

                    <div className="rp-support-sub">
                      Contact Support
                    </div>
                  </div>

                </div>
              </article>

              {/* FINAL NOTE */}
              <div className="rp-final-note" data-anim="fade-up">
                This Privacy Policy applies to information handled through
                the Essential Aquatech website and related enquiry channels,
                subject to applicable laws and regulations.
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;