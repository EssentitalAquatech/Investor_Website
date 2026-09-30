



import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutInvestors.css";

const partners = [
  {
    id: "iit-kharagpur-incubation",
    name: "IIT Kharagpur",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/KHARAGPUR.png",
    type: "Incubation",
    description:
      "Research, technology and innovation ecosystem supporting our journey from technology development to real-world impact.",
  },

  {
    id: "stpi-1",
    name: "STPI",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/STPI.png",
    type: "Incubation",
    description:
      "Technology startup ecosystem support through incubation, mentoring, infrastructure and industry connections.",
  },

  {
    id: "aic",
    name: "AIC",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/AIC.jpg",
    type: "Incubation",
    description:
      "Startup incubation ecosystem providing mentorship, business support, networking and pathways to scale.",
  },

 {
  id: "earthon",
  name: "Earthon USA",
  logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/Earthon.png",
  type: "Investor",
  description:
    "Providing strategic investment and support to help us accelerate growth, strengthen innovation and scale our impact.",
},
{
  id: "greenr",
  name: "Greenr",
  logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/Greenr.jpg",
  type: "Accelerator",
  description:
    "Greenr Sustainability Accelerator, powered by TechnoServe with support from the IKEA Foundation and Visa Foundation, supporting high-growth businesses in building sustainable and scalable impact.",
},

  {
    id: "iit-kharagpur-strategic",
    name: "IIT Kharagpur",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/IIT.png",
    type: "Technology Partner",
    description:
      "Strategic collaboration focused on evidence, research and measurable social impact.",
  },

 {
  id: "j-pal",
  name: "J-PAL",
  logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/JPAL.png",
  type: "Research & Evidence Partner",
  description:
    "A global research center based at MIT, working with researchers and partners to generate rigorous evidence and measurable social impact.",
},



  {
    id: "action-for-india",
    name: "Action For India",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/ACTION.png",
    type: "Accelerator",
    description:
      "Accelerator ecosystem supporting technology-led social impact and pathways to scale.",
  },

{
  id: "ministry-agriculture-farmers-welfare",
  name: "Ministry of Agriculture & Farmers Welfare",
  logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/Wel",
  type: "Government of India",
  description:
    "Government of India ministry working towards the development, growth and welfare of India’s agricultural sector and farming community.",
},
{
  id: "meity",
  name: "MeitY",
logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/MITY",
  type: "Government of India",
  description:
    "Ministry of Electronics and Information Technology, Government of India, driving innovation and growth across electronics, information technology, digital governance and emerging technologies.",
},
{
  id: "niti-aayog",
  name: "NITI Aayog",
logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/NITI1",
  type: "Government of India",
  description:
    "National Institution for Transforming India (NITI Aayog), the Government of India’s apex policy think tank, providing strategic and technical inputs for national development, innovation and inclusive growth.",
},
];  

const AboutInvestors = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index) || 0;

          entry.target.style.transitionDelay = `${(index % 4) * 90}ms`;
          entry.target.classList.add("ip-in-view");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    window.location.href = "/#contact";
  };

  return (
    <div className="ip-page">
      {/* ================= HERO ================= */}
      <section className="ip-hero">
        <div className="container text-center">
          <span className="ip-eyebrow ip-fade-up">
            Trusted Ecosystem
          </span>

          <h1 className="ip-title ip-fade-up ip-delay-1">
            Investors <span className="ip-amp">&amp;</span>{" "}
            <span className="ip-title-accent">Partners</span>
          </h1>

          <p className="ip-subtitle ip-fade-up ip-delay-2">
            We collaborate with leading institutions, incubators,
            accelerators and strategic partners who help us build,
            validate and scale the intelligence layer for aquaculture.
          </p>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="ip-showcase">
        <div className="container">
          <div className="text-center mb-5 ip-section-head">
            <h2>Backed by the Best</h2>

            <p>
              A strong ecosystem of institutions, incubators,
              accelerators and strategic partners supporting our journey.
            </p>
          </div>

          <div className="row g-4">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div
                  ref={(element) => {
                    cardsRef.current[index] = element;
                  }}
                  className="ip-card"
                  data-index={index}
                >
                  {/* LOGO */}
                  <div className="ip-logo-wrap">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="ip-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* COMPANY NAME */}
                  <h3 className="ip-card-title">
                    {partner.name}
                  </h3>

                  {/* RELATIONSHIP TYPE */}
                  <span className="ip-card-tag">
                    {partner.type}
                  </span>

                  {/* DESCRIPTION */}
                  <p className="ip-card-description">
                    {partner.description}
                  </p>

                  {/* HOVER GLOW */}
                  <span
                    className="ip-card-glow"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="ip-cta">
        <div className="container text-center">
          <h2>Become a Partner</h2>

          <p>
            Join a network of pioneers shaping the future of
            aquaculture intelligence.
          </p>

          <button
            type="button"
            className="ip-btn"
            onClick={handleGetInTouch}
          >
            Get in Touch →
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutInvestors;