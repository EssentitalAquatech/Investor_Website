

import React, { useState, useEffect } from "react";
import ScheduleVideo from "./ScheduleVideo";
import emailjs from "@emailjs/browser";
import {
  SCHEDULE_SERVICE_ID,
  SCHEDULE_TEMPLATE_ID,
  PUBLIC_KEY,
} from "../utils/email.js";
import "./ScheduleDemoModal.css";

function ScheduleDemoModal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobRole: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === "email") {
      setIsValidEmail(validateEmail(value));
    }
    if (name === "phone") {
      setIsValidPhone(validatePhone(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setIsValidEmail(false);
      setSubmitMessage("Please enter a valid email address.");
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      setIsValidPhone(false);
      setSubmitMessage("Please enter a valid phone number (at least 10 digits).");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await emailjs.send(
        SCHEDULE_SERVICE_ID,
        SCHEDULE_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          jobRole: formData.jobRole,
        },
        PUBLIC_KEY
      );

      setSubmitMessage("✅ Thank you! Your demo request has been submitted successfully. Our team will contact you within 24 hours.");
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobRole: ""
      });
      
      setIsValidEmail(true);
      setIsValidPhone(true);
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitMessage("❌ Oops! There was an error submitting your request. Please try again or contact us directly.");
    } finally {
      if (isMounted) {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <ScheduleVideo />
      
      <div className="eaq-schedule-demo-wrapper">
        {/* Background Elements */}
        <div className="eaq-bg-element eaq-bg-element-1"></div>
        <div className="eaq-bg-element eaq-bg-element-2"></div>
        <div className="eaq-bg-element eaq-bg-element-3"></div>
        
        <div className="eaq-form-container-main">
          <div className="eaq-demo-form-card eaq-fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="eaq-form-card-accent"></div>
            
            <div className="eaq-form-header-container">
              {/* <h2 className="eaq-form-main-title">
                Talk to Our Essential Aquatech Experts
              </h2> */}
              <h2 className="eaq-form-main-title">
  <span className="black-text">Talk to Our </span>
  <span className="blue-text">Essential Aquatech Experts</span>
</h2>
              <p className="eaq-form-subtitle-text">
                Discover how Essential Aquatech can transform your operations. 
                Schedule a personalized demo with our specialists.
              </p>
              <div className="eaq-title-underline"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="eaq-contact-form">
              <div className="eaq-form-grid">
                <div className="eaq-form-group">
                  <label htmlFor="eaqFirstName" className="eaq-form-label eaq-form-label-required">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="eaq-form-input"
                    id="eaqFirstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="eaq-form-group">
                  <label htmlFor="eaqLastName" className="eaq-form-label eaq-form-label-required">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="eaq-form-input"
                    id="eaqLastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="eaq-form-group">
                <label htmlFor="eaqEmail" className="eaq-form-label eaq-form-label-required">
                  Email Address
                </label>
                <input
                  type="email"
                  className={`eaq-form-input ${!isValidEmail && formData.email ? 'eaq-input-error' : ''}`}
                  id="eaqEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
                {!isValidEmail && formData.email && (
                  <span className="eaq-validation-message eaq-error-message">
                    Please enter a valid email address
                  </span>
                )}
              </div>
              
              <div className="eaq-form-group">
                <label htmlFor="eaqPhone" className="eaq-form-label eaq-form-label-required">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`eaq-form-input ${!isValidPhone && formData.phone ? 'eaq-input-error' : ''}`}
                  id="eaqPhone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
                {!isValidPhone && formData.phone && (
                  <span className="eaq-validation-message eaq-error-message">
                    Please enter a valid phone number (at least 10 digits)
                  </span>
                )}
              </div>
              
              <div className="eaq-form-group">
                <label htmlFor="eaqJobRole" className="eaq-form-label eaq-form-label-required">
                  Which role best describes your job?
                </label>
                <select
                  className="eaq-form-select"
                  id="eaqJobRole"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your role</option>
                  <option value="Farmer / Agriculture Professional">Farmer / Agriculture Professional</option>
                  <option value="Sales Agent / Distributor">Sales Agent / Distributor</option>
                  <option value="Investor / Business Owner">Investor / Business Owner</option>
                  <option value="Researcher / Academic">Researcher / Academic</option>
                  <option value="Government Official/ Partners">Government Official/ Partners</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="eaq-submit-btn-container">
                <button
                  type="submit"
                  className={`eaq-submit-btn ${isSubmitting ? 'eaq-btn-loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      <span className="eaq-btn-icon">📅</span>
                      Schedule My Demo
                    </>
                  )}
                </button>
              </div>
              
              {/* {submitMessage && (
                <div className={`eaq-message-alert ${
                  submitMessage.includes('✅') || submitMessage.includes('successfully') 
                    ? 'eaq-alert-success' 
                    : 'eaq-alert-error'
                }`}>
                  <span className="eaq-alert-icon">
                    {submitMessage.includes('✅') ? '✅' : '⚠️'}
                  </span>
                  <span>{submitMessage}</span>
                </div>
              )} */}

{submitMessage && (
  <div className={`eaq-message-alert ${
    submitMessage.includes('successfully') || submitMessage.includes('Thank you')
      ? 'eaq-alert-success' 
      : 'eaq-alert-error'
  }`}>
    <span className="eaq-alert-icon">
      {/* Icon को हटा दिया क्योंकि मैसेज में पहले से है */}
    </span>
    <span>{submitMessage}</span>
  </div>
)}


            </form>
          </div>
        </div>
        
        <div className="eaq-benefits-section eaq-fade-in-up" style={{animationDelay: "0.4s"}}>
          <div className="eaq-benefit-card">
            <div className="eaq-benefit-icon">⚡</div>
            <h4 className="eaq-benefit-title">Quick Response Time</h4>
            <p className="eaq-benefit-desc">We'll get back to you within 24 hours with a personalized solution</p>
          </div>
          
          <div className="eaq-benefit-card">
            <div className="eaq-benefit-icon">👨‍🔬</div>
            <h4 className="eaq-benefit-title">Expert Consultation</h4>
            <p className="eaq-benefit-desc">Talk directly with our aquaculture specialists and technical experts</p>
          </div>
          
          <div className="eaq-benefit-card">
            <div className="eaq-benefit-icon">🔐</div>
            <h4 className="eaq-benefit-title">Secure & Confidential</h4>
            <p className="eaq-benefit-desc">Your information is protected with enterprise-grade security</p>
          </div>
          
          <div className="eaq-benefit-card">
            <div className="eaq-benefit-icon">🎯</div>
            <h4 className="eaq-benefit-title">Tailored Solution</h4>
            <p className="eaq-benefit-desc">Get a demo customized for your specific needs and requirements</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleDemoModal;










