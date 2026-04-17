

// src/components/pages/AnotherProduct.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './AnotherProduct.css';

function AnotherProduct() {
    const navigate = useNavigate();
    const [expandedProducts, setExpandedProducts] = useState({});

    const handleGoBack = () => {
        navigate('/products');
    };

    const toggleReadMore = (productId) => {
        setExpandedProducts(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    const products = [
        {
            id: "prod_001",
            name: "AQUEAMINA",
            shortDesc: "Minerals & Micro Nutrients Promoter. Enriches pond water nutritional value. Promotes disease resistance...",
            fullDesc: "Minerals & Micro Nutrients Promoter. Enriches pond water nutritional value. Promotes disease resistance. Helps to grow phyto and zoo planktons. Improves fcr increase growth and body weight and disease resistance. Reduce culture period by fast growth...",
            price: "₹195.50 - ₹3610",
            image: "/src/assets/images/AQUEAMINA.png",
            discountBadge: "35% OFF",
            variants: ["1kg", "10kg", "20kg"]
        },
        {
            id: "prod_002",
            name: "BOTTOM SAFE",
            shortDesc: "Keep pond bottom healthy by treating sludge, removing ammonia, h2s and other toxic gases...",
            fullDesc: "Keep pond bottom healthy by treating, sludge, removing ammonia, h2s and other toxic gases. Reduce algal bloom and keep the pond healthy. Increase beneficial bacteria, improves pond ecosystem. Reduces stress, improves immunity & appetite. Balance ph. Improves concentration of dissolved oxygen. It helps to grow natural feed and improves f.c.r. & improves in weight gain",
            price: "₹195.50 - ₹3610",
            image: "/src/assets/images/Bottom-Safe.png",
            discountBadge: "28% OFF",
            variants: ["1kg", "10kg", "20kg"]
        },
        {
            id: "prod_003",
            name: "CALCI FISH",
            shortDesc: "Improves structural and bone strength. Helps in the buildup of healthy muscles...",
            fullDesc: "Improves structural and bone strength. Helps in the buildup of healthy muscles. Reduces stress and improves immunity. Improves appetite and helps in gaining body weight.",
            price: "₹945",
            image: "/src/assets/images/CALCI-FISH.png",
            discountBadge: "29% OFF",
            variants: ["5L"]
        },
        {
            id: "prod_004",
            name: "CLEAR POND",
            shortDesc: "Absorbs ammonia, hydrogen sulphide and various toxic gasses from fish pond water...",
            fullDesc: "Absorbs ammonia, hydrogen sulphide and various toxic gasses from fish pond water. Reduces pathogenic bacterial load. Removes bad odour by treating sludge. Improves ecosystem. Increase growth and better immunity",
            price: "₹414 - ₹1439",
            image: "/src/assets/images/ClearPond.png",
            discountBadge: "38% OFF",
            variants: ["250ml", "1L"]
        },
        {
            id: "prod_005",
            name: "DO OXY PLUS",
            shortDesc: "RELEASES INSTANT OXYGEN IN WATER, IMPROVES DO LEVEL. REDUCE LOW DO CONDITIONS...",
            fullDesc: "RELEASES INSTANT OXYGEN IN WATER, IMPROVES DO LEVEL. REDUCE LOW DO CONDITIONS AND RELIEFS GRASPING OF DISTRESS FISHES. REDUCES STRESS AND PREVENTS MORTALITY DUE TO LOW OXYGEN LEVEL. REDUCE EFFECT OF TOXIC GASSES. INCREASE IN SPAWN PRODUCTION, REDUCES MORTALITY RATE.",
            price: "₹1050",
            image: "/src/assets/images/Do.png",
            discountBadge: "17% OFF",
            variants: ["1kg"]
        },
        {
            id: "prod_006",
            name: "EAZY CHUN",
            shortDesc: "95% PURE FISH LIME. Maintains Ph Balance Of Water. Promots Plankton Growth...",
            fullDesc: "95% PURE FISH LIME. Maintains Ph Balance Of Water. Promots Plankton Growth & Maintains Proper Ecosystem. Improves Dissolve Oxygen Concentration Of Water. Promotes High Immunity Of Fishes.",
            price: "₹275",
            image: "/src/assets/images/EAZY.png",
            discountBadge: "27% OFF",
            variants: ["1kg"]
        },
        {
            id: "prod_007",
            name: "LIV ZYM",
            shortDesc: "Treats in hepatic liver, liver atrophy, swollen liver, liver necrosis...",
            fullDesc: "Treats in hepatic liver, liver atrophy, swollen liver, liver necrosis. Prevents liver disease or getting affected by toxic elements. Improves digestion, increases in appetite. Reduces stress and improves immunity. Keeps fish healthy with better f.c.r. Helps in body weight gain.",
            price: "₹979",
            image: "/src/assets/images/LIV.png",
            discountBadge: "25% OFF",
            variants: ["5L"]
        },
        {
            id: "prod_008",
            name: "LIV ACTIVE GEL",
            shortDesc: "Acts as a protector to prevent liver damage. Binds all kinds of feed supplements...",
            fullDesc: "Acts as a protector to prevent liver damage. Binds all kinds of feed supplements, and probiotics with feed. Improves digestion, increases appetite & improves FCR. Increases growth and body weight and disease resistance. Reduce culture period by fast growth",
            price: "₹1249 - ₹4649",
            image: "/src/assets/images/LIVACTIVE.png",
            discountBadge: "14% OFF",
            variants: ["5L", "20L"]
        },
        {
            id: "prod_009",
            name: "MEDISAN",
            shortDesc: "Controls bacterial & fungal diseases of fish. Effective in the presence of organic load...",
            fullDesc: "Controls bacterial & fungal diseases of fish. Effective in the presence of organic load. It improves immunity and reduces stress. Treats pathogenically polluted water. Not harmful to spawns, larvae of fish.",
            price: "₹330 - ₹990",
            image: "/src/assets/images/MEDISAN.png",
            discountBadge: "38% OFF",
            variants: ["250ml", "1L"]
        },
        {
            id: "prod_010",
            name: "PHYTO PRO FS",
            shortDesc: "It helps create phytoplankton or makes green water. Creates plankton, natural feed...",
            fullDesc: "It helps create phytoplankton or makes green water. Creates plankton, natural feed. It helps to grow natural feed, improves f.c.r, & improves in weight gain. Reduces stress, improves immunity. Increase beneficial bacteria, improves pond ecosystem",
            price: "₹1889",
            image: "/src/assets/images/PHYTO.png",
            discountBadge: "6% OFF",
            variants: ["1kg"]
        },
        {
            id: "prod_011",
            name: "PREVENT 80",
            shortDesc: "Effective control of bacterial, and fungal diseases of fish. Kills virus, fungi & harmful bacteria...",
            fullDesc: "Effective control of bacterial, and fungal diseases of fish. Kills virus, fungi & harmful bacteria. Effective in the presence of organic load. Protects natural eco system & reduces stress. Prevents plankton bloom.",
            price: "₹649 - ₹5519",
            image: "/src/assets/images/PREVENT.png",
            discountBadge: "23% OFF",
            variants: ["0.5L", "1L", "5L"]
        },
        {
            id: "prod_012",
            name: "RENO FAST",
            shortDesc: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot...",
            fullDesc: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal disease. It improves immunity and reduces stress. Improves appetite",
            price: "₹749 - ₹2889",
            image: "/src/assets/images/RENO.png",
            discountBadge: "29% OFF",
            variants: ["250ml", "1L"]
        },
        {
            id: "prod_013",
            name: "ROT GUARD",
            shortDesc: "Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot...",
            fullDesc: "Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal and protozoan disease. Improves immunity and reduces stress. Improves appetite",
            price: "₹379",
            image: "/src/assets/images/ROT.png",
            discountBadge: "43% OFF",
            variants: ["100gm"]
        },
        {
            id: "prod_014",
            name: "SANI FISH",
            shortDesc: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot...",
            fullDesc: "Effective control of bacterial, and fungal diseases of fish. Highly effective on tail rot, fin rot, black/brown gill, red spot, black spot, and other bacterial & fungal disease. It improves immunity and reduces stress. Improves appetite",
            price: "₹1539",
            image: "/src/assets/images/SANI.png",
            discountBadge: "23% OFF",
            variants: ["250ml"]
        },
        {
            id: "prod_015",
            name: "VITEAMIN FS",
            shortDesc: "VITAMIN – MINERAL SUPPLEMENT. Promotes faster growth for fish. Body mass gain in short...",
            fullDesc: "VITAMIN – MINERAL SUPPLEMENT. Promotes faster growth for fish. Body mass gain in short. Better nutrient digestion ability. Higher FRC. Improves stress tolerance. Vitamin – mineral supliment.",
            price: "₹219",
            image: "/src/assets/images/VITEAMIN.png",
            discountBadge: "51% OFF",
            variants: ["1kg"]
        },
        {
            id: "prod_016",
            name: "WATER SOFT",
            shortDesc: "Reduces hardness and alkalinity. Fights against plankton bloom...",
            fullDesc: "Reduces hardness and alkalinity. Fights against plankton bloom. Helps to reduce the poisonous effect of water. Treat polluted water caused by different types of metals. Caused by toxic/poisonous substances. Reduces stress in fish",
            price: "₹299 - ₹2389",
            image: "/src/assets/images/WATER.png",
            discountBadge: "25% OFF",
            variants: ["0.5kg", "5kg"]
        },
        {
            id: "prod_017",
            name: "YEAST EA",
            shortDesc: "Enhance growth performance. Enhance bowel well-being, immune system...",
            fullDesc: "Enhance growth performance. Enhance bowel well-being, immune system. Increase in natural food and plankton. Reduce bacterial load. Improves water quality. Improves FCR",
            price: "₹319",
            image: "/src/assets/images/YEAST.png",
            discountBadge: "24% OFF",
            variants: ["1kg"]
        },
        {
            id: "prod_018",
            name: "ZEA - G",
            shortDesc: "Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic gases...",
            fullDesc: "Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic Gases. Improves Water Odour By Treating Sludge. Balance Ph, Improves Concentration Of Dissolve Oxygen. Balance Eco System, Helps In Improves Planktons. Reduces Stress, Improves Immunity And Appetite. Helps To Release Trapped Toxic Gasses And Improves Pond Bottom Condition",
            price: "₹1549 - ₹3099",
            image: "/src/assets/images/ZEA.png",
            discountBadge: "6% OFF",
            variants: ["10kg", "20kg"]
        },
        {
            id: "prod_019",
            name: "ZEAPOND",
            shortDesc: "Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic gasses...",
            fullDesc: "Reduces the effect of ammonia, sulfur dioxide, hydrogen sulfide, and other toxic gasses. Improves water odor by treating sludge. Balance ph. Improves concentration of dissolved oxygen. Balance ecosystem helps improve plankton. Reduces stress, enhances immunity and appetite. Helps to release trapped toxic gasses and improves pond bottom condition",
            price: "₹409 - ₹2409",
            image: "/src/assets/images/ZEAPOND.png",
            discountBadge: "18% OFF",
            variants: ["5kg", "25kg"]
        }
    ];

    return (
        <div className="ap-container">
       <h1 className="ap-title">
  <span className="premium-text">Premium</span>{" "}
  <span className="products-text">Products</span>
</h1>
            <p className="ap-description">
                Discover our collection of high-quality aquaculture products
            </p>

            <div className="ap-products-grid">
                {products.map((product) => (
                    <div key={product.id} className="ap-product-card">
                        {product.discountBadge && (
                            <div className="ap-discount-badge">{product.discountBadge}</div>
                        )}
                        <div className="ap-product-image-container">
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="ap-product-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
                                }}
                            />
                        </div>
                        <div className="ap-product-info">
                            <h3 className="ap-product-name">{product.name}</h3>
                            <div className="ap-product-description-wrapper">
                                <p className="ap-product-description">
                                    {expandedProducts[product.id] ? product.fullDesc : product.shortDesc}
                                </p>
                                <button 
                                    className="ap-read-more-btn"
                                    onClick={() => toggleReadMore(product.id)}
                                >
                                    {expandedProducts[product.id] ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                            
                            {/* Variants Display */}
                            {product.variants && product.variants.length > 0 && (
                                <div className="ap-product-variants">
                                    {product.variants.map((variant, index) => (
                                        <span key={index} className="ap-variant-item">
                                            {variant}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            <div className="ap-product-price">
                                {product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                className="ap-back-to-products-btn"
                onClick={handleGoBack}
            >
                <svg 
                    className="ap-back-arrow" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M15.8337 10H4.16699" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                    <path 
                        d="M8.33366 14.1667L4.16699 10L8.33366 5.83337" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
                Back to Products
            </button>
        </div>
    );
}

export default AnotherProduct;











