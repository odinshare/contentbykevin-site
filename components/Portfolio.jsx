"use client";
import React, { useState } from "react";

// Portfolio component showcasing three key projects: RecoveryOnTheHarbor, WashWorks, and MorteMedia
const projects = [
  {
    id: 1,
    title: "RecoveryOnTheHarbor.com",
    description:
      "A fully responsive web platform for Recovery on the Harbor, a peer-run recovery support center in East Boston. Featuring program details, volunteer sign‑up, outreach event listings, and low‑barrier access resources for those seeking community‑driven treatment and support.",
    imgSrc: "/assets/recovery-coming-soon.jpg",
  },
  {
    id: 2,
    title: "WashWorks",
    description:
      "Premium residential and commercial power‑washing services delivered with precision and care. WashWorks revitalizes siding, decks, driveways, and more—coming soon with an intuitive booking interface, before-and-after galleries, and seasonal maintenance plans.",
    imgSrc: "/assets/washworks-coming-soon.jpg",
  },
  {
    id: 3,
    title: "MorteMedia",
    description:
      "MorteMedia is a cybersecurity consultancy specializing in end‑to‑end digital transformation and secure business overhauls. Backed by HackTheBox Academy pentester expertise, we deliver vulnerability assessments, secure architecture design, and ongoing monitoring. Launching soon.",
    imgSrc: "/assets/mortemedia-coming-soon.jpg",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <section id="portfolio" className="px-4 py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-navy mb-8">My Work</h2>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(({ id, title, description, imgSrc }) => (
            <div
              key={id}
              className="space-y-2 cursor-pointer"
              onClick={() => setSelectedProject({ title, description, imgSrc })}
            >
              <div className="relative h-48 w-full bg-gray-300 flex items-center justify-center">
                <img
                  src={imgSrc}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <span className="z-10 text-lg font-semibold text-white bg-black bg-opacity-40 rounded px-2">
                  {title}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            {/* Modal content: image on top, description below */}
            <div className="flex flex-col h-screen sm:h-auto">
              {/* Image area */}
              <div className="h-1/2 sm:h-64 bg-gray-100">
                <img
                  src={selectedProject.imgSrc}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Text area */}
              <div className="p-6 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4 text-navy">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
