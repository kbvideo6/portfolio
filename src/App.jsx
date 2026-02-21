import React, { useState, Suspense, lazy } from "react";
import "./assets/css/index.css";

const Experience = lazy(() => import("./pages/Experience/Experience"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Header = lazy(() => import("./pages/Header/Header"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Education = lazy(() => import("./pages/Education/Education"));

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <Suspense fallback={<div className="flex h-screen w-full items-center justify-center text-white">Loading...</div>}>
        <Header />
        {/* Conditional Rendering */}
        {isOnePage ? (
          // One-Page Mode: Render all components together
          <>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </>
        ) : (
          // Router Mode: Use routes for navigation
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </Suspense>
    </>
  );
}
