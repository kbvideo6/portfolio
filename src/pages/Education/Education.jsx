import React from "react";
import { BookOpen, Award, CheckCircle2 } from "lucide-react";
import { BsCpu } from "react-icons/bs";
import { SiCoursera, SiUdemy } from "react-icons/si";
import TypewriterTitle from "@/components/ui/TypewriterTitle";

const EducationSection = () => {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white relative overflow-hidden pt-4 md:pt-6 pb-24 md:pb-20">
      {/* PCB Grid Background */}
      <div className="absolute inset-0 pcb-grid-bg opacity-20 pointer-events-none" />

      {/* Gradient Accents */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono text-blue-400">CREDENTIALS</span>
          </div>

          <TypewriterTitle
            prefix="./"
            title="Education & Certifications"
            className="text-4xl md:text-5xl font-bold mb-6 font-mono"
          />

          <p className="text-slate-400 text-lg font-mono">
            Formal engineering foundation + continuous technical upskilling
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

            {/* LEFT COLUMN: The Degree (Major Focus - 60%) */}
            <div className="md:col-span-7 bg-slate-950/50 border border-slate-800 p-8 rounded-lg relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-9xl font-bold text-slate-700">USJ</span>
              </div>

              {/* Circuit trace animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 circuit-lines" />

              <div className="relative z-10">
                {/* Timeline Badge */}
                <span className="text-blue-400 font-mono text-sm tracking-widest inline-block mb-3 px-3 py-1 bg-blue-500/10 rounded-md border border-blue-500/20">
                  2023 — PRESENT
                </span>

                {/* Degree Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">
                  B.Sc. in Physics & Electronics
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 mb-6">
                  <BsCpu className="w-4 h-4 text-green-400" />
                  <p className="text-slate-400 text-base">University of Sri Jayewardenepura</p>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Specializing in <span className="text-green-400 font-semibold">Embedded System Design</span> within the Faculty of Applied Sciences.
                  Focusing on the intersection of hardware physics and software logic to build intelligent, connected systems.
                </p>

                {/* Key Coursework */}
                <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Key Coursework Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300 font-mono">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">›</span>
                      <span>Analog & Digital Electronics</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">›</span>
                      <span>Microcontroller Architecture</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">›</span>
                      <span>Signal Processing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">›</span>
                      <span>Computational Physics</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">›</span>
                      <span>Digital System Design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">›</span>
                      <span>Embedded Systems Lab</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-green-400">Currently Enrolled</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Certifications & A/L (Supporting - 40%) */}
            <div className="md:col-span-5 space-y-6">

              {/* Professional Certifications Block */}
              <div className="bg-slate-950/50 border border-slate-700 p-6 rounded-lg hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <h3 className="text-lg font-bold text-white font-mono">
                    Professional Certifications
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="text-slate-300 text-sm border-b border-slate-800 pb-3 last:border-0 last:pb-0 hover:border-green-500/30 transition-colors">
                    <div className="flex items-start gap-2 mb-1">
                      <Award className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-200">Full Stack Web Development (MERN)</div>
                        <div className="flex items-center gap-2 mt-1">
                          <SiUdemy className="w-3 h-3 text-slate-500" />
                          <SiCoursera className="w-3 h-3 text-slate-500" />
                          <span className="text-xs text-slate-500 font-mono">Udemy / Coursera</span>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="text-slate-300 text-sm border-b border-slate-800 pb-3 last:border-0 last:pb-0 hover:border-green-500/30 transition-colors">
                    <div className="flex items-start gap-2 mb-1">
                      <Award className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-200">Python for Data Science & IoT</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500 font-mono">edX</span>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="text-slate-300 text-sm hover:border-green-500/30 transition-colors">
                    <div className="flex items-start gap-2 mb-1">
                      <Award className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-200">PCB Design (Altium Designer)</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500 font-mono">Independent Certification</span>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="text-slate-300 text-sm hover:border-green-500/30 transition-colors">
                    <div className="flex items-start gap-2 mb-1">
                      <Award className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-200">Data Structures & Algorithms</div>
                        <div className="flex items-center gap-2 mt-1">
                          <SiCoursera className="w-3 h-3 text-slate-500" />
                          <span className="text-xs text-slate-500 font-mono">Coursera</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* High School Block (Minimalist) */}
              <div className="p-5 border border-dashed border-slate-700/50 rounded-lg text-center opacity-60 hover:opacity-100 transition-all duration-300 bg-slate-950/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  <h4 className="text-sm font-bold text-slate-400 font-mono">G.C.E. Advanced Level</h4>
                </div>
                <p className="text-xs text-slate-500 font-mono">2022 • Physical Science Stream</p>
                <p className="text-xs text-slate-600 mt-1">(Physics, Chemistry, Pure Mathematics)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pcb-grid-bg {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .circuit-lines::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          opacity: 0.3;
          animation: signal-flow 3s ease-in-out infinite;
        }
        
        @keyframes signal-flow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default EducationSection;
