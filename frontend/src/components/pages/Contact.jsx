


// import emailjs from "@emailjs/browser";
// import { useState } from "react";
// import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../utils/email";
// import SEO from "../SEO";
// import "./Contact.css";

// function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const socialLinks = {
//     linkedin:
//       "https://www.linkedin.com/company/essential-aquatech-private-limited/",
//     youtube: "https://www.youtube.com/@essentialaquatech",
//     instagram:
//       "https://www.instagram.com/essentialaquatech?igsh=MW8wdDFtcXo3ODlmMQ==",
//     googleMaps:
//       "https://maps.app.goo.gl/XFM2sL69HL8UTqqu8?g_st=aw",
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isSubmitting) return;

//     if (!isConfirmed) {
//       alert("Please agree to the Privacy Policy before sending your message.");
//       return;
//     }

//     const form = e.currentTarget;

//     setIsSubmitting(true);

//     try {
//       await emailjs.sendForm(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         form,
//         PUBLIC_KEY
//       );

//       alert("✅ Message sent successfully!");

//       form.reset();
//       setIsConfirmed(false);
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       alert("❌ Failed to send message. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <SEO
//         title="Contact Essential Aquatech"
//         description="Get in touch with Essential Aquatech for partnerships, dealership, distribution, product enquiries and business collaborations."
//         canonical="https://www.essentialaquatech.in/contact"
//       />

//       <div className="contact-page-content contact-fade-in">
//         <div className="contact-container container">

//           {/* ==================== PAGE HEADER ==================== */}
//           <div className="text-center mb-5">
//             <h1 className="contact-page-title">
//               <span className="get-in">Get In </span>
//               <span className="touch">Touch</span>
//             </h1>

//             <p className="contact-subtitle">
//               Interested in partnering with us, becoming a dealer or
//               distributor, or exploring our products and solutions?
//               Send us a message and our team will get back to you.
//             </p>
//           </div>

//           {/* ==================== MAIN CONTENT ==================== */}
//           <div className="row g-4">

//             {/* ==================== CONTACT FORM ==================== */}
//             <div className="col-lg-7">
//               <div className="contact-form-container">
//                 <h2 className="mb-4">Send us a Message</h2>

//                 <form onSubmit={handleSubmit} noValidate>

//                   {/* Full Name + Email */}
//                   <div className="row g-3">

//                     <div className="col-md-6">
//                       <label
//                         htmlFor="contact-name"
//                         className="contact-form-label"
//                       >
//                         Full Name
//                       </label>

//                       <input
//                         id="contact-name"
//                         type="text"
//                         name="name"
//                         className="contact-form-control form-control"
//                         placeholder="Enter your full name"
//                         autoComplete="name"
//                         required
//                       />
//                     </div>

//                     <div className="col-md-6">
//                       <label
//                         htmlFor="contact-email"
//                         className="contact-form-label"
//                       >
//                         Email Address
//                       </label>

//                       <input
//                         id="contact-email"
//                         type="email"
//                         name="email"
//                         className="contact-form-control form-control"
//                         placeholder="Enter your email"
//                         autoComplete="email"
//                         required
//                       />
//                     </div>

//                   </div>

//                   {/* Phone + Enquiry Type */}
//                   <div className="row g-3 mt-3">

//                     <div className="col-md-6">
//                       <label
//                         htmlFor="contact-phone"
//                         className="contact-form-label"
//                       >
//                         Phone Number
//                       </label>

//                       <input
//                         id="contact-phone"
//                         type="tel"
//                         name="phone"
//                         className="contact-form-control form-control"
//                         placeholder="Enter your phone number"
//                         autoComplete="tel"
//                       />
//                     </div>

//                     <div className="col-md-6">
//                       <label
//                         htmlFor="contact-subject"
//                         className="contact-form-label"
//                       >
//                         Enquiry Type
//                       </label>

//                       <select
//                         id="contact-subject"
//                         name="subject"
//                         className="contact-form-control form-control"
//                         defaultValue=""
//                         required
//                       >
//                         <option value="" disabled>
//                           Please Select
//                         </option>

//                         <option value="Partnership">
//                           Partnership
//                         </option>

//                         <option value="Dealer Enquiry">
//                           Dealer Enquiry
//                         </option>

//                         <option value="Distributor Enquiry">
//                           Distributor Enquiry
//                         </option>

//                         <option value="Product Enquiry">
//                           Product Enquiry
//                         </option>

//                         <option value="Bulk / Institutional Enquiry">
//                           Bulk / Institutional Enquiry
//                         </option>

//                         <option value="Business Collaboration">
//                           Business Collaboration
//                         </option>

//                         <option value="Other">
//                           Other
//                         </option>
//                       </select>
//                     </div>

//                   </div>

//                   {/* Message */}
//                   <div className="mt-4">
//                     <label
//                       htmlFor="contact-message"
//                       className="contact-form-label"
//                     >
//                       Your Message
//                     </label>

//                     <textarea
//                       id="contact-message"
//                       name="message"
//                       className="contact-form-control contact-textarea form-control"
//                       rows="6"
//                       placeholder="Tell us how we can help you..."
//                       required
//                     ></textarea>
//                   </div>

//                   {/* ==================== PRIVACY CONFIRMATION ==================== */}
//                   <div className="contact-confirmation-box mt-4">
//                     <label
//                       htmlFor="contact-confirmation"
//                       className="contact-confirmation-label"
//                     >
//                       <input
//                         id="contact-confirmation"
//                         type="checkbox"
//                         name="consent"
//                         value="Confirmed"
//                         checked={isConfirmed}
//                         onChange={(e) =>
//                           setIsConfirmed(e.target.checked)
//                         }
//                         className="contact-confirmation-checkbox"
//                       />

//                       <span>
//                         I agree to the{" "}
//                         <a
//                           href="/privacy-policy"
//                           className="contact-privacy-link"
//                         >
//                           Privacy Policy
//                         </a>
//                         .
//                       </span>
//                     </label>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="mt-4">
//                     <button
//                       type="submit"
//                       className={`contact-submit-btn btn btn-primary ${
//                         isSubmitting ? "loading" : ""
//                       }`}
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                     </button>
//                   </div>

//                 </form>
//               </div>
//             </div>

//             {/* ==================== CONTACT INFORMATION ==================== */}
//             <div className="col-lg-5">
//               <div className="contact-info-card card h-100">
//                 <div className="card-body">

//                   <h3 className="contact-card-title">
//                     Contact Information
//                   </h3>

//                   {/* Location */}
//                   <div className="contact-info-item">
//                     <i className="contact-info-icon bi bi-geo-alt-fill"></i>

//                     <div className="contact-info-text">
//                       <strong>Visit Us</strong>
//                       <br />

//                       <a
//                         href={socialLinks.googleMaps}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white text-decoration-none"
//                       >
//                         Click here to view our location on Google Maps
//                         <br />

//                         <small>
//                           Essential Aquatech Private Limited
//                         </small>
//                       </a>
//                     </div>
//                   </div>

//                   {/* Email */}
//                   <div className="contact-info-item">
//                     <i className="contact-info-icon bi bi-envelope-fill"></i>

//                     <div className="contact-info-text">
//                       <strong>Email Us</strong>
//                       <br />

//                       <a
//                         href="mailto:24x7@essentialaquatech.com"
//                         className="contact-email-link"
//                       >
//                         24x7@essentialaquatech.com
//                       </a>

//                       <br />

//                       <a
//                         href="tel:+919046226705"
//                         className="contact-phone-link"
//                       >
//                         +91 90462 26705
//                       </a>

//                       <br />

//                       <small>
//                         Response within 24 hours
//                       </small>
//                     </div>
//                   </div>

//                   {/* Office Hours */}
//                   <div className="contact-office-hours">

//                     <h6 className="contact-hours-title">
//                       <i className="bi bi-clock me-2"></i>
//                       Office Hours
//                     </h6>

//                     <div className="contact-hours-item">
//                       <span className="contact-hours-day">
//                         Monday - Friday
//                       </span>

//                       <span className="contact-hours-time">
//                         9:00 AM - 5:00 PM
//                       </span>
//                     </div>

//                     <div className="contact-hours-item">
//                       <span className="contact-hours-day">
//                         Saturday
//                       </span>

//                       <span className="contact-hours-time">
//                         10:00 AM - 2:00 PM
//                       </span>
//                     </div>

//                     <div className="contact-hours-item">
//                       <span className="contact-hours-day">
//                         Sunday
//                       </span>

//                       <span className="contact-hours-time">
//                         Closed
//                       </span>
//                     </div>

//                   </div>

//                   {/* Social Links */}
//                   <div className="contact-social-links">

//                     <a
//                       href={socialLinks.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="contact-social-link"
//                       title="Follow us on LinkedIn"
//                       aria-label="LinkedIn"
//                     >
//                       <i className="bi bi-linkedin"></i>
//                     </a>

//                     <a
//                       href={socialLinks.youtube}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="contact-social-link"
//                       title="Subscribe to our YouTube channel"
//                       aria-label="YouTube"
//                     >
//                       <i className="bi bi-youtube"></i>
//                     </a>

//                     <a
//                       href={socialLinks.instagram}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="contact-social-link"
//                       title="Follow us on Instagram"
//                       aria-label="Instagram"
//                     >
//                       <i className="bi bi-instagram"></i>
//                     </a>

//                     <a
//                       href={socialLinks.googleMaps}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="contact-social-link"
//                       title="Find us on Google Maps"
//                       aria-label="Google Maps"
//                     >
//                       <i className="bi bi-geo-alt-fill"></i>
//                     </a>

//                   </div>

//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* ==================== MAP SECTION ==================== */}
//           <div className="contact-map-container mt-5">
//             <a
//               href={socialLinks.googleMaps}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-decoration-none"
//               aria-label="View Essential Aquatech location on Google Maps"
//             >
//             </a>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;






























import emailjs from "@emailjs/browser";
import { useState } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../utils/email";
import SEO from "../SEO";
import "./Contact.css";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const socialLinks = {
    linkedin:
      "https://www.linkedin.com/company/essential-aquatech-private-limited/",
    youtube: "https://www.youtube.com/results?search_query=essential+aquatech",
    instagram:
      "https://www.instagram.com/essentialaquatech/",
    googleMaps:
      "https://maps.app.goo.gl/XFM2sL69HL8UTqqu8?g_st=aw",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!isConfirmed) {
      alert("Please agree to the Privacy Policy before sending your message.");
      return;
    }

    const form = e.currentTarget;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");

      form.reset();
      setIsConfirmed(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Essential Aquatech"
        description="Get in touch with Essential Aquatech for partnerships, dealership, distribution, product enquiries and business collaborations."
        canonical="https://www.essentialaquatech.in/contact"
      />

      <div className="contact-page-content contact-fade-in">
        <div className="contact-container container">

          {/* ==================== PAGE HEADER ==================== */}
          <div className="text-center mb-5">
            <h1 className="contact-page-title">
              <span className="get-in">Get In </span>
              <span className="touch">Touch</span>
            </h1>

            <p className="contact-subtitle">
              Interested in partnering with us, becoming a dealer or
              distributor, or exploring our products and solutions?
              Send us a message and our team will get back to you.
            </p>
          </div>

          {/* ==================== MAIN CONTENT ==================== */}
          <div className="row g-4">

            {/* ==================== CONTACT FORM ==================== */}
            <div className="col-lg-7">
              <div className="contact-form-container">
                <h2 className="mb-4">Send us a Message</h2>

                <form onSubmit={handleSubmit} noValidate>

                  {/* Full Name + Email */}
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label
                        htmlFor="contact-name"
                        className="contact-form-label"
                      >
                        Full Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className="contact-form-control form-control"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="contact-email"
                        className="contact-form-label"
                      >
                        Email Address
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="contact-form-control form-control"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                      />
                    </div>

                  </div>

                  {/* Phone + Enquiry Type */}
                  <div className="row g-3 mt-3">

                    <div className="col-md-6">
                      <label
                        htmlFor="contact-phone"
                        className="contact-form-label"
                      >
                        Phone Number
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        className="contact-form-control form-control"
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        htmlFor="contact-subject"
                        className="contact-form-label"
                      >
                        Enquiry Type
                      </label>

                      <select
                        id="contact-subject"
                        name="subject"
                        className="contact-form-control form-control"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Please Select
                        </option>

                        <option value="Partnership">
                          Partnership
                        </option>

                        <option value="Dealer Enquiry">
                          Dealer Enquiry
                        </option>

                        <option value="Distributor Enquiry">
                          Distributor Enquiry
                        </option>

                        <option value="Product Enquiry">
                          Product Enquiry
                        </option>

                        <option value="Bulk / Institutional Enquiry">
                          Bulk / Institutional Enquiry
                        </option>

                        <option value="Business Collaboration">
                          Business Collaboration
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label
                      htmlFor="contact-message"
                      className="contact-form-label"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      className="contact-form-control contact-textarea form-control"
                      rows="6"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  {/* ==================== PRIVACY CONFIRMATION ==================== */}
                  <div className="contact-confirmation-box mt-4">
                    <label
                      htmlFor="contact-confirmation"
                      className="contact-confirmation-label"
                    >
                      <input
                        id="contact-confirmation"
                        type="checkbox"
                        name="consent"
                        value="Confirmed"
                        checked={isConfirmed}
                        onChange={(e) =>
                          setIsConfirmed(e.target.checked)
                        }
                        className="contact-confirmation-checkbox"
                      />

                      <span>
                        I agree to the{" "}
                        <a
                          href="/privacy-policy"
                          className="contact-privacy-link"
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      className={`contact-submit-btn btn btn-primary ${
                        isSubmitting ? "loading" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                </form>
              </div>
            </div>

            {/* ==================== CONTACT INFORMATION ==================== */}
            <div className="col-lg-5">
              <div className="contact-info-card card h-100">
                <div className="card-body">

                  <h3 className="contact-card-title">
                    Contact Information
                  </h3>

                  {/* Location */}
                  <div className="contact-info-item">
                    <i className="contact-info-icon bi bi-geo-alt-fill"></i>

                    <div className="contact-info-text">
                      <strong>Visit Us</strong>
                      <br />

                      <a
                        href={socialLinks.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none"
                      >
                        Click here to view our location on Google Maps
                        <br />

                        <small>
                          Essential Aquatech Private Limited
                        </small>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact-info-item">
                    <i className="contact-info-icon bi bi-envelope-fill"></i>

                    <div className="contact-info-text">
                      <strong>Email Us</strong>
                      <br />

                      <a
                        href="mailto:24x7@essentialaquatech.com"
                        className="contact-email-link"
                      >
                        24x7@essentialaquatech.com
                      </a>

                      <br />

                      <a
                        href="tel:+919046226705"
                        className="contact-phone-link"
                      >
                        +91 90462 26705
                      </a>

                      <br />

                      <small>
                        Response within 24 hours
                      </small>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="contact-office-hours">

                    <h6 className="contact-hours-title">
                      <i className="bi bi-clock me-2"></i>
                      Office Hours
                    </h6>

                    <div className="contact-hours-item">
                      <span className="contact-hours-day">
                        Monday - Friday
                      </span>

                      <span className="contact-hours-time">
                        9:00 AM - 5:00 PM
                      </span>
                    </div>

                    <div className="contact-hours-item">
                      <span className="contact-hours-day">
                        Saturday
                      </span>

                      <span className="contact-hours-time">
                        10:00 AM - 2:00 PM
                      </span>
                    </div>

                    <div className="contact-hours-item">
                      <span className="contact-hours-day">
                        Sunday
                      </span>

                      <span className="contact-hours-time">
                        Closed
                      </span>
                    </div>

                  </div>

                  {/* Social Links */}
                  <div className="contact-social-links">

                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      title="Follow us on LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a
                      href={socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      title="Subscribe to our YouTube channel"
                      aria-label="YouTube"
                    >
                      <i className="bi bi-youtube"></i>
                    </a>

                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      title="Follow us on Instagram"
                      aria-label="Instagram"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>

                    <a
                      href={socialLinks.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      title="Find us on Google Maps"
                      aria-label="Google Maps"
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </a>

                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ==================== MAP SECTION ==================== */}
          <div className="contact-map-container mt-5">
            <a
              href={socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              aria-label="View Essential Aquatech location on Google Maps"
            >
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;