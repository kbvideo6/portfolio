import React, { useState, Suspense, lazy, useEffect } from "react";
import "./assets/css/index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Experience = lazy(() => import("./pages/Experience/Experience"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Header = lazy(() => import("./pages/Header/Header"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Education = lazy(() => import("./pages/Education/Education"));

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.99 }}
      animate={{ scale: 1 }}
      exit={{ scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="w-full min-h-screen overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state
  const location = useLocation();

  useEffect(() => {
    // Wait until fonts are loaded before removing the loader
    const removeLoader = () => {
      const loader = document.getElementById("initial-loader");
      if (loader) {
        loader.classList.add("hidden-loader");
        setTimeout(() => {
          loader.remove();
        }, 300); // Wait for CSS transition to finish 
      }
    };

    if (document.fonts) {
      document.fonts.ready.then(removeLoader);
    } else {
      removeLoader();
    }
  }, []);

  return (
    <>
      <Suspense fallback={<div className="flex h-screen w-full items-center justify-center text-white bg-[#04081A]"></div>}>
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
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
              <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
              <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
              <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        )}
      </Suspense>
    </>
  );
}
