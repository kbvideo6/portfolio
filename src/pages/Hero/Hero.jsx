import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <></>
  );
};

export default function Hero() {
  const words = [
    "Creative Technologist & Full-Stack Developer",
    "3D Artist turned Web Developer",
    "Web developer turned Electrnoic Engineer",
    "Problem-Solver",
  ];

  const [code] = useState(`
const profile = {
  name: 'Nisal Chathu', 
  title: 'Creative Technologist | Full-Stack Developer | Open Source Advocate',
  contact: {
    email: 'your.email@example.com',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourusername'
  },
  summary: "A multi-talented developer with a creative foundation in 3D animation and a professional drive for building robust web solutions. Passionate about solving complex problems at the intersection of media and technology, and a firm believer in the power of open-source collaboration.",

  skills: [
    'JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js',
    '3D Animation', 'Video Editing', 'Adobe Creative Suite',
    'IT Support', 'Network Management', 'Git', 'GitHub', 'Linux'
  ],
  isCreative: true,
  isTechnologist: true,
  problemSolver: true,
  yearsOfExperience: new Date().getFullYear() - 2019, 
};


  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#090909] text-white min-h-screen">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-1 md:py-1 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>


          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={5} />
          </div>

          {/* Main content container */}
          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-1 md:py-1 lg:py-2 md:pt-2 xl:pt-2"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                  window.innerWidth <= 1370 &&
                  window.innerHeight >= 760 &&
                  window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-ful">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  Welcome
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hey," />
                  <span className="relative inline-block">

                    <span className="typing-effect gradient-text">
                      {" "}
                      Art Studio
                    </span>
                    <span>Here</span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>

              

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  href="https://github.com/"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r p-0.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>

                
              </div>

              {/* Floating badges */}
              
              <div className="hidden lg:block absolute right-10 top-0 animate-float">
                <div className="px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Real Code
                </div>
              </div>
              
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i>
            About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>
        <PortfolioPage />
      </main>
    </>
  );
}
