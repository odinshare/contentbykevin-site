// app/components/Portfolio.jsx
"use client";
import React, { useState } from "react";


const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of Project One.",
      imgSrc: "/assets/placeholder1.jpg",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of Project Two.",
      imgSrc: "/assets/placeholder2.jpg",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of Project Three.",
      imgSrc: "/assets/placeholder3.jpg",
    },
    {
      id: 4,
      title: "Project Four",
      description: "A brief description of Project Four.",
      imgSrc: "/assets/placeholder4.jpg",
    },
    {
      id: 5,
      title: "Project Five",
      description: "A brief description of Project Five.",
      imgSrc: "/assets/placeholder5.jpg",
    },
    {
      id: 6,
      title: "Project Six",
      description: "A brief description of Project Six.",
      imgSrc: "/assets/placeholder6.jpg",
    },
  ];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <section
        id="portfolio"
        className="px-4 py-20 bg-gray-50 text-center"
      >
        <h2 className="text-3xl font-bold text-navy mb-8">Our Work</h2>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(({ title, description, imgSrc }) => (
            <div
              key={title}
              className="space-y-2 cursor-pointer"
              onClick={() => setSelectedProject({ title, description, imgSrc })}
            >
              <div className="h-48 w-full bg-gray-300 flex items-center justify-center">
                <p className="text-lg font-medium text-navy">{title}</p>
              </div>
              <p className="text-gray-600">A brief description of {title}.</p>
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
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