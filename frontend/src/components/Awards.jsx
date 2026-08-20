

  import React, { useEffect, useRef, useState } from "react";
  import "./Award.css";

  // ☁️ Cloudinary Images
  const awardImages = {
    image1:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/A57I9865.jpg",

    image2:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/IMG-20250505-WA0009.png",

    image3:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/EAI_BEA.jpg",

    image4:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/indian_chamber_of_commerce_startup_page-0013.jpg",

    image5:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/Fx_1.jpg",

    image6:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/Telegraph_II.jpg",

    image7:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/Fx_2.jpg",

    image8:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/Sikkim_1.jpg",

    image9:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/COFAM.png",

    image10:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/PUB.jpg",

    image11:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/Telegraph_EA.jpg",

    image12:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/ARK_MIC.jpg",

    image13:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/IMG-20241217-WA0007.jpg",

    image14:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/AFBIC_Telegraph_2025.jpg",

    image15:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/IMG-20250312-WA0001.jpg",

    image16:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/WhatsApp_Image_2025-04-21_at_2.35.35_PM.jpg",
  };

  function Award() {
    const [selected, setSelected] = useState(null);
    const scrollRef = useRef(null);

    const awards = [
     {
  id: 1,
  image: awardImages.image1,
  heading: (
    <>
      Bharat Entrepreneur Award 2024
      <br />
      <span className="award-heading-org">
        EAI India, New Delhi
      </span>
    </>
  ),
  year: "2024",
  desc:
    "Honoured with the Bharat Entrepreneur Award 2024 by EAI India, New Delhi, in recognition of entrepreneurial excellence, innovation, and the vision to build technology-driven solutions creating meaningful impact across the aquaculture and sustainability ecosystem.",
},
      {
        id: 2,
        image: awardImages.image2,
        heading: "EarthON Eco Champions Bootcamp — Certificate of Recognition",
        year: "2024",
        desc: "Received a Certificate of Recognition from EarthON Foundation for our active participation and valuable contribution to the EarthON Eco Champions Bootcamp, recognizing our commitment to innovation, climate action, and sustainable solutions for a better future.",
      },
      {
        id: 3,
        image: awardImages.image3,
        heading: "Bharat Entrepreneur Award 2024",
        year: "2024",
        desc: "Mr. Arkaprava Das, Founder & CEO of Essential Aquatech Pvt. Ltd., was honoured with the Bharat Entrepreneur Award 2024 by the Entrepreneurs Association of India (EAI) at the Bharat Entrepreneurship Summit in New Delhi. The award recognized his entrepreneurial contribution and efforts toward innovation and technology-driven development in the aquaculture sector.",
      },
     {
  id: 4,
  image: awardImages.image4,
  heading: (
    <>
      Essential Aquatech
      <br />
      <span className="award-heading-org">
        Startup Success Story
      </span>
    </>
  ),
  year: "",
  desc:
    "Recognized as a promising aquaculture startup for developing technology-driven, climate-responsive solutions that empower fish farmers through AI, data intelligence, water quality monitoring, disease management, and sustainable farming practices.",
},
   {
  id: 5,
  image: awardImages.image5,
  heading: (
    <>
      Integrated Fisheries Development
      <br />
      <span className="award-heading-org">
        An Aquaponics Approach
      </span>
    </>
  ),
  year: "2018",
  desc:
    "Participated in the Farm School initiative on Integrated Fisheries Development – An Aquaponics Approach, held in Jalpaiguri, West Bengal, on 9 February 2018. The initiative showcased an integrated aquaponics model combining aquaculture and plant cultivation, promoting efficient resource utilization, sustainable farming practices, and innovative approaches to fisheries development.",
},
    {
  id: 6,
  image: awardImages.image6,
  heading: (
    <>
      Fish & Veg Farm Success
      <br />
      <span className="award-heading-org">
        The Telegraph India
      </span>
    </>
  ),
  year: "2018",
  desc:
    "Featured by The Telegraph India for pioneering an innovative aquaponics model that integrates fish farming with vegetable cultivation, demonstrating sustainable resource use and a new approach to integrated aquaculture.",
},
    {
  id: 7,
  image: awardImages.image7,
  heading: (
    <>
      Innovative Aquaculture Practices
      <br />
      <span className="award-heading-org">
        Uttar Banga Sambad
      </span>
    </>
  ),
  year: "2018",
  desc:
    "Featured in Uttar Banga Sambad for pioneering innovative aquaculture practices in Jalpaiguri, showcasing integrated fish farming and soilless cultivation as sustainable alternatives to conventional farming.",
},
   {
  id: 8,
  image: awardImages.image8,
  heading: (
    <>
      Soil-less Farming Innovation
      <br />
      <span className="award-heading-org">
        Government of Sikkim
      </span>
    </>
  ),
  year: "2018",
  desc:
    "Featured for pioneering soil-less farming practices through aquaponics and hydroponics, demonstrating sustainable approaches to food production, efficient water use, and livelihood development.",
},
      {
  id: 9,
  image: awardImages.image9,
  heading: (
    <>
      Best Entrepreneur Award 2024
      <br />
      <span className="award-heading-org">
        NBUPRERONA – COFAM
      </span>
    </>
  ),
  year: "2024",
  desc:
    "Recognized as the Best Entrepreneur (Fisheries & Aquaculture Input) from North Bengal in 2024 at NBUPRERONA-2024, presented by COFAM in collaboration with the Startup-Incubation Centre Committee, University of North Bengal, recognizing entrepreneurial excellence in the fisheries and aquaculture sector.",
},
    {
  id: 10,
  image: awardImages.image10,
  heading: (
    <>
      Aquaculture Research Publication
      <br />
      <span className="award-heading-org">
        The Pharma Innovation Journal
      </span>
    </>
  ),
  year: "2023",
  desc:
    "Featured in The Pharma Innovation Journal through research on the application of aquaculture inputs in Assam, contributing insights into sustainable fish farming practices, input management, productivity, and the challenges faced by farmers.",
},
    {
  id: 11,
  image: awardImages.image11,
  heading: (
    <>
      Fish Farming Innovation
      <br />
      <span className="award-heading-org">
        The Telegraph
      </span>
    </>
  ),
  year: "2018",
  desc:
    "Featured in The Telegraph for developing innovative, climate-resilient solutions for aquaculture, including fish health products, farmer training, RAS, and integrated aquaponics systems to improve productivity and sustainability.",
},
     {
  id: 12,
  image: awardImages.image12,
  heading: (
    <>
      Certificate of Appreciation
      <br />
      <span className="award-heading-org">
        IFD – Aquaponics
      </span>
    </>
  ),
  year: "2018",
  desc:
    "Appreciated by the Fish Farmers' Development Agency, Jalpaiguri, Government of West Bengal, for contributions to the Integrated Fisheries Development – An Aquaponics Approach Farm School and its technical development, supervision, and monitoring.",
},
   {
  id: 13,
  image: awardImages.image13,
  heading: (
    <>
      Sustainable Aquaculture
      <br />
      <span className="award-heading-org">
        INFOCOM 2024 – ABP
      </span>
    </>
  ),
  year: "2024",
  desc:
    "Presented insights on climate-resilient aquaculture at INFOCOM 2024, highlighting the impact of changing water conditions, disease risks, algal blooms, and oxygen deficiency and the role of technology in building sustainable fish farming systems.",
},
     {
  id: 14,
  image: awardImages.image14,
  heading: (
    <>
      AFBIC – IIT Kharagpur
      <br />
      <span className="award-heading-org">
        RKVY Grant
      </span>
    </>
  ),
  year: "2025",
  desc:
    "Received a ₹25 lakh RKVY grant through AFBIC, IIT Kharagpur, recognizing our innovative approach to aquaculture using AI, advanced technology, and real-time water quality monitoring to build smarter and more productive fish farms.",
},
     {
  id: 15,
  image: awardImages.image15,
  heading: (
    <>
      AFBIC – IIT Kharagpur
      <br />
      <span className="award-heading-org">
        Cohort
      </span>
    </>
  ),
  year: "2024",
  desc:
    "Selected for the AFBIC – IIT Kharagpur Cohort, recognizing our potential to develop innovative, technology-driven solutions and providing access to mentorship, incubation support, and an ecosystem focused on scalable entrepreneurship and real-world impact.",
},
      {
        id: 16,
        image: awardImages.image16,
        heading: "EarthON Eco Champions Bootcamp — Certificate of Recognition",
        year: "2024",
        desc: "Received a Certificate of Recognition from EarthON Foundation for our active participation and valuable contribution to the EarthON Eco Champions Bootcamp, recognizing our commitment to innovation, climate action, and sustainable solutions for a better future.",
      },
    ];

    useEffect(() => {
      const container = scrollRef.current;

      if (!container) return;

      let animationFrame;

      const scroll = () => {
        container.scrollLeft += 0.7;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }

        animationFrame = requestAnimationFrame(scroll);
      };

      scroll();

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }, []);

    return (
      <section className="awardSectionMain">
        <div className="container">
          <h2 className="awardMainHeading">
            Awards & <span>Achievements</span>
          </h2>

          <div className="awardWrapperBox">
            <div className="awardScrollContainer" ref={scrollRef}>
              {[...awards, ...awards].map((award, i) => (
                <div
                  key={i}
                  className="awardSingleCard"
                  onClick={() => setSelected(award)}
                >
                  <img
                    src={award.image}
                    alt={award.heading}
                  />

                  <div className="awardOverlay"></div>

                  <div className="awardTextBox">
                    <h5>{award.heading}</h5>
                    <p>{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="awardModal"
            onClick={() => setSelected(null)}
          >
            <div
              className="awardModalContent"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="awardCloseBtn"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              <img
                src={selected.image}
                alt={selected.heading}
              />

              <h3>{selected.heading}</h3>

              <p className="awardYear">
                {selected.year}
              </p>

              <p className="awardDesc">
                {selected.desc}
              </p>
            </div>
          </div>
        )}
      </section>
    );
  }

  export default Award;















