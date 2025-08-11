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
    question: "How much do your websites cost?",
    answer:
      "Basic, clean, professional sites like washworks.us or recoveryontheharbor.com usually start around $1,200. If you want extra functionality—like custom integrations, automation, or e-commerce—the price goes up depending on what’s involved. Every project is quoted up front so you know exactly what you’re paying for.",
  },
  {
    question: "How long will it take to get my site online?",
    answer:
      "For a straightforward informational site, I can usually get you live in 3–4 weeks from the time we lock in the details. Bigger builds with advanced features or custom design work can take 6–8 weeks or more, depending on scope and how quickly you provide content.",
  },
  {
    question: "Will my site work on phones and tablets?",
    answer:
      "Yes. Everything I build is mobile-friendly by default. Whether someone’s on a phone, tablet, or desktop, your site will adjust to fit and function properly without them having to zoom or fight with tiny buttons.",
  },
  {
    question: "What platform or setup do you use for websites?",
    answer:
      "I keep things simple and modern—usually a Next.js front end deployed through platforms like Vercel or Cloudflare, tied to a Git repo so updates are quick and painless. If a project needs a CMS, I can set that up too, but a lot of clients prefer a streamlined, no-clutter build.",
  },
  {
    question: "Do you do SEO work?",
    answer:
      "I set up your site so it’s search-engine friendly from day one—fast load times, clean code, correct tags, and an automatic sitemap. I can also walk you through basic keyword and content strategy so you can keep improving your ranking after launch.",
  },
  {
    question: "Can I make my own updates once it’s done?",
    answer:
      "If you want that ability, yes. I can set up a simple workflow so you can swap out text, images, or blog posts without touching code. Or, if you’d rather not deal with it, I offer ongoing maintenance so you can just send me changes when you need them.",
  },
  {
    question: "What’s your process for building a site?",
    answer:
      "First, we figure out exactly what you want the site to do and who it’s for. Then I put together a structure and basic design concept for you to approve. Once that’s locked, I handle development, test it thoroughly, and launch it. You get updates at every stage so there are no surprises.",
  },
  {
    question: "Can you build e-commerce sites?",
    answer:
      "Yes. I can hook your site up to Shopify, Stripe Checkout, or custom setups so you can sell products or services online. It’ll be secure, easy to manage, and designed to make checkout smooth for your customers.",
  },
  {
    question: "Where will my site be hosted?",
    answer:
      "Most of my sites are deployed on Vercel or Cloudflare—they’re fast, reliable, and handle all the technical performance stuff like caching and image optimization. I’ll also make sure your site is running over HTTPS and protected by a CDN.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "I can. Some clients just need a one-time build, others prefer an ongoing plan where I handle updates, backups, and troubleshooting. Either way, I’m available if something breaks or you want to make changes down the road.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "Websites are my main public service right now, but I also have a background in Linux systems, scripting, and automation. I’m constantly expanding into different sectors of cybersecurity, so my skillset is alwasy growing ;-)",
  },
  {
    question: "Can you help improve a site I already have?",
    answer:
      "Yes. Whether you need speed improvements, better security, or a design refresh, I can work on existing sites without tearing them down completely—saving you time and money.",
  },
  {
    question: "Do you take on small, one-off projects?",
    answer:
      "I do! Not every job needs a full site rebuild. If you just need a landing page, bug fix, or hosting setup, I can handle smaller tasks without overcomplicating the process.",
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
