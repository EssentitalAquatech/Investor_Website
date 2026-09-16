import { useEffect } from "react";

const SITE_URL = "https://www.essentialaquatech.in";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/w_1200,h_1200,c_fit/Logo1.png";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  useEffect(() => {
    const pageUrl = canonical || `${SITE_URL}${window.location.pathname}`;

    document.title = title;
    const metaDescription = String(description || "").replace(/\s+/g, " ").trim().slice(0, 160);
    setMeta("name", "description", metaDescription);
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", metaDescription);
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", "Essential Aquatech");
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", metaDescription);
    setMeta("name", "twitter:image", image);

    setCanonical(pageUrl);
  }, [title, description, canonical, image, type]);

  return null;
}

export default SEO;
