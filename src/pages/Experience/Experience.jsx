import React from "react";
import { BiChip, BiGitBranch } from "react-icons/bi";
import { BsCpu } from "react-icons/bs";
import { SiAltiumdesigner, SiReact, SiNodedotjs, SiMongodb, SiPython, SiArduino } from "react-icons/si";

const experience = [
  {
    role: "Freelance IoT & Embedded Engineer",
    company: "Self-Employed",
    location: "Remote / Freelance",
    period: "2024 - PRESENT",
    status: "active",
    description:
      "Architecting full-stack IoT solutions for commercial clients. Currently developing a scalable MERN-stack backend for a vape detection system, handling real-time data ingestion and device authentication. Designing custom PCBs for industrial applications using Altium Designer.",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Altium", icon: SiAltiumdesigner },
      { name: "MQTT", icon: BiChip },
      { name: "MongoDB", icon: SiMongodb }
    ],
    color: "#3b82f6" // Electric Blue
  },
  {
    role: "Backend Developer (JavaScript & Python)",
    company: "Freelance",
    location: "Remote / Freelance",
    period: "2025 - PRESENT",
    status: "active",
    description:
      "Developing robust backend architectures and data ingestion APIs. Utilizing Python and JavaScript to build scalable infrastructure that bridges embedded hardware solutions with the cloud.",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "JavaScript", icon: BiChip },
      { name: "Architecture", icon: BiGitBranch }
    ],
    color: "#eab308" // Yellow (for Python/JS backend focus)
  },
  {
    role: "Hardware System Design & IoT Project Team Lead",
    company: "University of Sri Jayewardenepura",
    location: "Physics Department - USJ",
    period: "2025 - PRESENT",
    status: "active",
    description:
      "Directing a high-stakes, competitive SLIOT hardware project. Leading the end-to-end engineering of advanced IoT systems under rigorous constraints and strict deadlines, encompassing rapid prototyping, sensor integration, and system architecture.",
    tech: [
      { name: "Robotics", icon: BsCpu },
      { name: "Python", icon: SiPython },
      { name: "ESP32", icon: SiArduino },
      { name: "Research", icon: BiGitBranch }
    ],
    color: "#10b981" // Signal Green
  },
  {
    role: "Freelance Video & Animation Specialist",
    company: "Fiverr",
    location: "Freelance Platform",
    period: "2019 - 2022",
    status: "completed",
    description:
      "Launched freelance career delivering 200+ projects. Specialized in motion graphics and video editing utilizing Adobe After Effects and Premiere Pro.",
    tech: [
      { name: "Project Management", icon: BiGitBranch },
      { name: "Video Edition", icon: BiChip }
    ],
    color: "#64748b" // Slate (de-emphasized)
  }
];

const TimelineItem = ({ item, index, isLast }) => {
  return (
    <div className="relative group">
      {/* Timeline Dot */}
      <div
        className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-[#0a0f1e] transition-all duration-300 group-hover:scale-125"
        style={{ backgroundColor: item.color }}
      >
        {item.status === 'active' && (
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{ backgroundColor: item.color, opacity: 0.75 }}
          />
        )}
      </div>

      {/* Connecting Line Glow on Hover */}
      {!isLast && (
        <div className="absolute -left-[33px] top-6 w-0.5 h-full bg-slate-800 group-hover:bg-blue-500/50 transition-colors duration-300" />
      )}

      {/* Content Card */}
      <div className="pb-12 pl-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 font-mono">
            {item.role}
          </h3>
          <span
            className="font-mono text-sm px-3 py-1 rounded-md border inline-block w-fit"
            style={{
              borderColor: item.color,
              backgroundColor: `${item.color}10`,
              color: item.color
            }}
          >
            {item.period}
          </span>
        </div>

        {/* Company & Location */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <span className="text-slate-300 font-semibold">{item.company}</span>
          <span className="hidden sm:block text-slate-600">•</span>
          <span className="text-slate-500 text-sm font-mono">{item.location}</span>
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-5 max-w-3xl">
          {item.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech, idx) => {
            const TechIcon = tech.icon;
            return (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-900/50 text-slate-300 text-xs md:text-sm font-mono rounded-md border border-slate-700 hover:border-slate-600 transition-colors flex items-center gap-2 group/tag"
              >
                <TechIcon className="w-3.5 h-3.5 group-hover/tag:scale-110 transition-transform" />
                {tech.name}
              </span>
            );
          })}
        </div>

        {/* Circuit trace animation on hover */}
        <div className="absolute left-0 top-1/2 w-full h-px bg-blue-500/0 group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white relative overflow-hidden pt-4 md:pt-6 pb-24 md:pb-20">
      {/* PCB Grid Background */}
      <div className="absolute inset-0 pcb-grid-bg opacity-20 pointer-events-none" />

      {/* Gradient Accents */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <BiGitBranch className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono text-blue-400">COMMIT HISTORY</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-blue-400">./</span> Engineering Timeline
          </h2>

          <p className="text-slate-400 text-lg font-mono leading-relaxed">
            Building scalable hardware and software systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-slate-800 ml-3 pl-8 md:pl-12 relative">
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}

            {/* Timeline End Marker */}
            <div className="absolute -left-[33px] bottom-0 h-12 w-0.5 bg-slate-800" />
          </div>

          {/* Timeline Legend */}
          <div className="mt-12 p-6 border border-slate-800 rounded-lg bg-slate-950/50 backdrop-blur-sm">
            <h3 className="text-sm font-mono text-slate-500 mb-3">LEGEND:</h3>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-slate-400">Active Position</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-600" />
                <span className="text-slate-400">Completed</span>
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

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </main>
  );
};

export default ExperienceSection;
