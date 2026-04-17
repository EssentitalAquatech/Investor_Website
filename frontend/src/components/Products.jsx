







import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

function ProductSection({ imageSrc, title, description, index }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`product-section ${index % 2 !== 0 ? 'reverse' : ''}`}
    >
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="product-image-wrapper">
            <img src={imageSrc} alt={title} />
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-6 col-md-12">
          <div className="product-content-wrapper">
            <h3 className="product-title">{title}</h3>
            <p className="product-text">{description}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Products() {

  const navigate = useNavigate();

  const sections = [
    {
      imageSrc: "/src/assets/images/HomeMain.png",
      title: "Here we Write about images",
      description:
        "Lorem ipsum style writing is often used when content is needed but meaning is not Traditional fish farming data often remains scattered at ground leveTraditional fish farming data often remains scattered at ground leve important..."
    },
    {
      imageSrc: "/src/assets/images/HomeMain2.png",
      title: "Here we Write about images",
      description:
        "Traditional fish farming data often remains scattered at ground levelTraditional fish farming data often remains scattered at ground leve Traditional fish farming data often remains scattered at ground leve..."
    },
    {
      imageSrc: "/src/assets/images/HomeMain.png",
      title: "Here we Write about images",
      description:
        "Through our VLE model we are transforming rural systems Traditional fish farming data often remains scattered at ground leve Traditional fish farming data often remains scattered at ground leve..."
    }
  ];

  const handleExploreClick = () => {
    navigate('/another-product');
  };

  return (
    <section className="products-main">
      <div className="container">

        {/* Heading */}
        <h2 className="products-heading">
          Our <span>Products</span>
        </h2>

        {/* Sections */}
        {sections.map((item, index) => (
          <ProductSection
            key={index}
            index={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}

        {/* Explore Button */}
        <div className="explore-btn-container">
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore More Products

            <svg
              className="explore-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}













