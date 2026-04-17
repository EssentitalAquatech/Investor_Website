


import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../utils/email";
import "./Contact.css";


function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
     emailjs.sendForm(
  SERVICE_ID,
  TEMPLATE_ID,
  e.target,
  PUBLIC_KEY
)
      .then(() => {
        alert("✅ Message sent successfully!");
        setIsSubmitting(false);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message");
        setIsSubmitting(false);
      });
  };

  const socialLinks = {
    linkedin:
      "https://www.linkedin.com/company/essential-aquatech-private-limited/",
    youtube: "https://youtu.be/uSTIec5ky9k?si=izU7ytsubX9Uj7SI",
    instagram:
      "https://www.instagram.com/essentialaquatech?igsh=MW8wdDFtcXo3ODlmMQ==",
    googleMaps: "https://maps.app.goo.gl/XFM2sL69HL8UTqqu8?g_st=aw",
  };

  return (
    <div className="contact-page-content contact-fade-in">
      <div className="contact-container container">
        <div className="text-center mb-5">
          {/* <h1 className="contact-page-title">Get In Touch</h1> */}
          <h1 className="contact-page-title">
  <span className="get-in">Get In </span>
  <span className="touch">Touch</span>
</h1>
          <p className="contact-subtitle">
            Have questions about our water solutions? We're here to help. Send
            us a message and our team will respond within 24 hours.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="contact-form-container">
              <h2 className="mb-4">Send us a Message</h2>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="contact-form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="contact-form-control form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="contact-form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="contact-form-control form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 mt-3">
                  <div className="col-md-6">
                    <label className="contact-form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="contact-form-control form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="contact-form-label">
                      What best describes you?
                    </label>
                  

                    <select
  name="subject"
  className="contact-form-control form-control"
  required
  defaultValue=""
>
  <option value="" disabled>
    Please Select
  </option>

  <option value="Farmer / Agriculture Professional">
    Farmer / Agriculture Professional
  </option>

  <option value="Sales Agent / Distributor">
    Sales Agent / Distributor
  </option>

  <option value="Investor / Business Owner">
    Investor / Business Owner
  </option>

  <option value="Researcher / Academic">
    Researcher / Academic
  </option>

  <option value="Government Official / Partners">
    Government Official / Partners
  </option>

  <option value="Other">
    Other
  </option>
</select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="contact-form-label">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    className="contact-form-control contact-textarea form-control"
                    rows="6"
                    placeholder="Tell us about your water needs or questions..."
                    required
                  ></textarea>
                </div>

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


          <div className="col-lg-5">
            <div className="contact-info-card card h-100">
              <div className="card-body">
                <h3 className="contact-card-title">Contact Information</h3>
                
                <div className="contact-info-item">
                  <i className="contact-info-icon bi bi-geo-alt-fill"></i>
                  <div className="contact-info-text">
                    <strong>Visit Us</strong><br />
                    <a 
                      href={socialLinks.googleMaps} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none"
                    >
                      Click here to view our location on Google Maps<br />
                      <small>Essential Aquatech Private Limited</small>
                    </a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className="contact-info-icon bi bi-telephone-fill"></i>
                  <div className="contact-info-text">
                    <strong>Call Us</strong><br />
                    +91 9046226703<br />
                    <small>Mon-Fri, 9AM-5PM EST</small>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <i className="contact-info-icon bi bi-envelope-fill"></i>
                  <div className="contact-info-text">
                    <strong>Email Us</strong><br />
                    24x7@essentialaquatech.com<br />
                    <small>Response within 24 hours</small>
                  </div>
                </div>
                
                <div className="contact-office-hours">
                  <h6 className="contact-hours-title">
                    <i className="bi bi-clock me-2"></i>Office Hours
                  </h6>
                  <div className="contact-hours-item">
                    <span className="contact-hours-day">Monday - Friday</span>
                    <span className="contact-hours-time">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="contact-hours-item">
                    <span className="contact-hours-day">Saturday</span>
                    <span className="contact-hours-time">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="contact-hours-item">
                    <span className="contact-hours-day">Sunday</span>
                    <span className="contact-hours-time">Closed</span>
                  </div>
                </div>
                
                <div className="contact-social-links">
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    title="Follow us on LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a 
                    href={socialLinks.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    title="Subscribe to our YouTube channel"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    title="Follow us on Instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a 
                    href={socialLinks.googleMaps} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    title="Find us on Google Maps"
                  >
                    <i className="bi bi-geo-alt-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-map-container mt-5">
          <a 
            href={socialLinks.googleMaps} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            
          </a>
        
        </div>
      </div>
    </div>
  );
}

export default Contact;




