// app/faq/page.jsx
// ─────────────────────────────────────────────────────────────────────────────
// This is a **server component** – it exports `metadata` for SEO,
// then simply renders the client component `<FAQContent />` below.
//

import FAQContent from "./FAQContent";

export const metadata = {
  title: "FAQ | Content by Kevin",
  description:
    "Answers to your top questions about web development, pricing, process, and more. Get clarity on responsive design, SEO, maintenance, and timelines for 2025.",
};

export default function FAQPage() {
  return <FAQContent />;
}