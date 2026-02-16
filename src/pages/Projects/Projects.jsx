import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Cpu, Server, Activity } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "LifeSeeker Rescue Rover",
    category: "Robotics // Hardware",
    description:
      "Designed a custom multi-layer PCB for a disaster recovery rover. Integrated mmWave radar sensors to detect human vitals under debris, processing signals locally on an ESP32 before transmitting to a central command unit via LoRa.",
    stack: ["Altium Designer", "ESP32", "C++", "mmWave", "LoRa"],
    icon: Cpu,
    links: { code: "#", schematic: "#" },
    status: "Prototype",
    statusColor: "#3b82f6",
    color: "#3b82f6",
  },
  {
    id: "02",
    title: "Commercial IoT Backend",
    category: "Full-Stack // Cloud",
    description:
      "Architected the backend for a commercial IoT vape detector. Built a high-throughput data ingestion API to handle real-time events from hundreds of devices, implementing JWT authentication and WebSocket-based live alerts.",
    stack: ["Node.js", "MongoDB", "React", "MQTT", "JWT"],
    icon: Server,
    links: { code: "#", demo: "#" },
    status: "Production",
    statusColor: "#10b981",
    color: "#10b981",
  },
  {
    id: "03",
    title: "AIoT Muscle Monitor",
    category: "Wearable // Research",
    description:
      "Developed a sensor fusion algorithm to correlate muscle activity (sEMG) with motion data (IMU). Created a Python-based processing pipeline to identify muscle fatigue thresholds in real-time for wearable health monitoring.",
    stack: ["Python", "NumPy/SciPy", "sEMG", "IMU", "ML"],
    icon: Activity,
    links: { code: "#", paper: "#" },
    status: "Research",
    statusColor: "#06b6d4",
    color: "#06b6d4",
  },
];

export default function Projects() {
  return (
    <main className="pt-16 md:pt-20 pb-24 md:pb-20 bg-[#0a0f1e] text-white min-h-screen relative overflow-hidden">
      {/* PCB Grid Background */}
      <div className="absolute inset-0 pcb-grid-bg opacity-20 pointer-events-none" />

      {/* Gradient Accents */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <section className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-mono text-blue-400">CASE STUDIES</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
              <span className="text-blue-400">./</span> Selected Projects
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Engineering solutions from concept to deployment — PCB layouts, IoT architectures, and signal processing pipelines.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="group bg-slate-950/50 border border-slate-800 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col"
                >
                  {/* Visual Header - Blueprint style */}
                  <div className="h-48 bg-slate-900/80 border-b border-slate-800 relative group-hover:bg-slate-800/80 transition-colors overflow-hidden">
                    {/* Grid pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Status Badge */}
                    <div
                      className="absolute top-4 right-4 backdrop-blur px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded border"
                      style={{
                        color: project.statusColor,
                        borderColor: `${project.statusColor}40`,
                        backgroundColor: `${project.statusColor}10`,
                      }}
                    >
                      {project.status}
                    </div>

                    {/* Project ID */}
                    <div className="absolute top-4 left-4 text-xs font-mono text-slate-600">
                      PRJ-{project.id}
                    </div>

                    {/* Center Icon */}
                    <div className="flex items-center justify-center h-full">
                      <div className="relative">
                        <IconComponent
                          className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                          style={{ color: `${project.color}60` }}
                        />
                        {/* Pulse ring */}
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-20"
                          style={{ backgroundColor: project.color }}
                        />
                      </div>
                    </div>

                    {/* Corner accent lines */}
                    <div
                      className="absolute bottom-0 left-0 w-8 h-[2px] opacity-30"
                      style={{ backgroundColor: project.color }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-[2px] h-8 opacity-30"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <div className="text-xs font-mono mb-2" style={{ color: project.color }}>
                      {project.category}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-3 font-mono">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-slate-900 text-slate-300 text-[10px] uppercase font-bold tracking-wider rounded border border-slate-700 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-mono border border-slate-700 text-slate-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        View Code
                      </a>
                      <a
                        href={Object.values(project.links)[1] || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-mono text-white rounded-md transition-colors shadow-lg"
                        style={{
                          backgroundColor: project.color,
                          boxShadow: `0 4px 14px ${project.color}30`,
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.links.schematic
                          ? "Schematic"
                          : project.links.demo
                            ? "Live Demo"
                            : "Paper"}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .pcb-grid-bg {
          background-image:
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </main>
  );
}
