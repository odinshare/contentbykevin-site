// app/faq/FAQContent.jsx
// ─────────────────────────────────────────────────────────────────────────────
// This is a **client component** (marked "use client") so we can use React state
// and Heroicons for the expand/collapse arrows. It renders the FAQ accordion.
//

"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const faqItems = [
  {
    question: "What is the cost of web development services in 2025?",
    answer:
      "Our pricing starts at $1,200 for a basic informational website, with custom features (e-commerce, memberships, integrations) priced separately. We always tailor a quote to your exact needs—no hidden fees.",
  },
  {
    question: "How long does it take to build a custom website?",
    answer:
      "Most small-to-medium sites take 3–6 weeks from kickoff to launch. This timeline includes discovery, design, development, quality assurance, and final deployment. Larger projects (e-commerce platforms, custom web apps) can take 8–12 weeks or more depending on complexity.",
  },
  {
    question: "Do you create mobile-friendly and responsive websites?",
    answer:
      "Absolutely. Every site we build is fully responsive, ensuring a seamless experience on phones, tablets, and desktops. We follow best practices for fluid layouts, optimized images, and touch-friendly navigation so your site looks great on any device.",
  },
  {
    question: "What content management system (CMS) do you recommend in 2025?",
    answer:
      "We specialize in headless/Next.js-powered CMS setups like Sanity, Strapi, or Contentful, as well as traditional systems like WordPress (with Headless Next.js frontends). Our recommendation depends on your team’s workflow, budget, and scalability needs.",
  },
  {
    question: "How do you optimize for search engines (SEO)?",
    answer:
      "SEO is built-in from day one: semantic HTML, fast load times, accessible markup, and proper meta tags (Open Graph, Twitter Cards). We also generate XML sitemaps, integrate structured data (JSON-LD), and advise on keyword-driven content strategy to help your site climb the rankings.",
  },
  {
    question: "Will I be able to update my site myself after launch?",
    answer:
      "Yes. We provide a user-friendly editor interface (CMS) and walk you through how to make common updates—text changes, new blog posts, image swaps—without touching code. We also offer ongoing maintenance plans if you prefer we handle updates and backups for you.",
  },
  {
    question: "What is your process for web design and development?",
    answer:
      "We follow a four-step process: 1) Discovery & Planning (define goals, user personas, site map), 2) Design (wireframes, high-fidelity mockups, UI/UX feedback), 3) Development (Next.js front end, CMS integration, performance tuning), and 4) Review & Launch (QA, accessibility audit, DNS setup). Each phase ends with your approval before moving on.",
  },
  {
    question: "Do you offer e-commerce solutions?",
    answer:
      "Yes—we integrate popular platforms like Shopify, Stripe Checkout, or build custom solutions with tools like Snipcart for headless commerce. We ensure secure payment gateways, inventory management, and a seamless checkout experience.",
  },
  {
    question: "How do you handle hosting and site performance?",
    answer:
      "We typically deploy on Vercel (for Next.js) or Netlify, enabling automatic performance optimization (edge caching, image optimization, code splitting). We configure CDN, HTTPS, and serverless functions as needed for lightning-fast load times.",
  },
  {
    question: "What ongoing support and maintenance do you offer?",
    answer:
      "We provide optional maintenance plans that cover security updates, regular backups, content updates, and troubleshooting. If you’d rather focus on running your business, let us handle the technical details so your site stays healthy and secure.",
  },
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <main className="max-w-3xl mx-auto my-12 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-outline text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqItems.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
              {openIndex === idx ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <div
              className={`bg-white overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                openIndex === idx ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="px-6 py-4">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}