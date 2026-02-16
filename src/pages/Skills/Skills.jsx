import React from "react";
import {
  SiAltiumdesigner,
  SiArduino,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiPostman
} from "react-icons/si";
import { TbCircuitResistor, TbBrandVscode } from "react-icons/tb";
import { BsCpu } from "react-icons/bs";
import { BiChip } from "react-icons/bi";

const skillGroups = [
  {
    id: "01",
    category: "HARDWARE ENGINEERING",
    subtitle: "Electronic Design & PCB Layout",
    icon: TbCircuitResistor,
    color: "#3b82f6", // Electric Blue
    items: [
      { name: "Altium Designer", icon: SiAltiumdesigner, detail: "Schematic & PCB Layout" },
      { name: "Proteus", icon: TbCircuitResistor, detail: "Circuit Simulation" },
      { name: "Multi-layer PCB Design", icon: TbCircuitResistor, detail: "Used in LifeSeeker Rover" },
      { name: "Component Creation", icon: BiChip, detail: "Custom Footprints & Symbols" },
      { name: "Gerber Generation", icon: TbCircuitResistor, detail: "Manufacturing Ready Files" },
      { name: "Signal Analysis", icon: BsCpu, detail: "Oscilloscope & Logic Analyzer" }
    ]
  },
  {
    id: "02",
    category: "FIRMWARE & EMBEDDED",
    subtitle: "Real-time Logic & Device Control",
    icon: BsCpu,
    color: "#10b981", // Signal Green
    items: [
      { name: "C/C++", icon: SiCplusplus, detail: "Hard Real-time Systems" },
      { name: "Python", icon: SiPython, detail: "Scripting & Automation" },
      { name: "ESP32 / ESP8266", icon: SiArduino, detail: "Primary MCU Platform" },
      { name: "Arduino Ecosystem", icon: SiArduino, detail: "Rapid Prototyping" },
      { name: "MicroPython", icon: SiPython, detail: "IoT Device Logic" },
      { name: "UART, I2C, SPI", icon: BsCpu, detail: "Hardware Communication" },
      { name: "MQTT Protocol", icon: BiChip, detail: "IoT Messaging" },
      { name: "Sensor Integration", icon: BiChip, detail: "sEMG, IMU, mmWave Radar" }
    ]
  },
  {
    id: "03",
    category: "WEB & CLOUD INTERFACE",
    subtitle: "Full-Stack IoT Dashboards",
    icon: SiReact,
    color: "#06b6d4", // Cyan
    items: [
      { name: "React.js", icon: SiReact, detail: "Real-time Dashboards" },
      { name: "Node.js", icon: SiNodedotjs, detail: "Backend Services" },
      { name: "Express.js", icon: SiExpress, detail: "RESTful APIs" },
      { name: "MongoDB", icon: SiMongodb, detail: "Data Ingestion & Analytics" },
      { name: "WebSocket / MQTT", icon: BiChip, detail: "Live Device Telemetry" },
      { name: "Device Authentication", icon: BiChip, detail: "Commercial IoT Security" },
      { name: "Git", icon: SiGit, detail: "Version Control" },
      { name: "VS Code", icon: TbBrandVscode, detail: "Primary IDE" },
      { name: "Postman", icon: SiPostman, detail: "API Testing" }
    ]
  }
];

const SkillCard = ({ group }) => {
  const IconComponent = group.icon;

  return (
    <div
      className="border border-slate-800 p-6 hover:border-blue-500 transition-all duration-300 bg-slate-950/50 backdrop-blur-sm group relative overflow-hidden"
      style={{ "--accent-color": group.color }}
    >
      {/* Circuit trace animation on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 circuit-lines"></div>

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-slate-600">{group.id}</span>
          <div className="h-px flex-1 bg-slate-800"></div>
          <IconComponent
            className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
            style={{ color: group.color }}
          />
        </div>
        <h3 className="text-sm font-mono text-blue-400 mb-1 tracking-wider">
          {group.category}
        </h3>
        <p className="text-xs text-slate-500 font-mono">{group.subtitle}</p>
      </div>

      {/* Skills List */}
      <ul className="space-y-3 relative z-10">
        {group.items.map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <li
              key={idx}
              className="group/item flex items-start gap-3 text-sm text-slate-300 hover:text-white transition-colors duration-200"
            >
              <span className="text-slate-600 mt-0.5 group-hover/item:text-blue-400 transition-colors">›</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <ItemIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: group.color }} />
                  <span className="font-medium">{item.name}</span>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-0.5 ml-5">{item.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <main className="pt-16 lg:pt-20 pb-24 md:pb-20 text-white min-h-screen bg-[#0a0f1e] relative overflow-hidden">
      {/* PCB Grid Background */}
      <div className="absolute inset-0 pcb-grid-bg opacity-30 pointer-events-none"></div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <section className="container mx-auto px-4 md:px-6 py-4 md:py-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <BsCpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-mono text-blue-400">TECHNICAL STACK</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
            The Full <span className="text-blue-400">IoT</span> Stack
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-mono">
            Hardware → Firmware → Cloud: Complete end-to-end engineering workflow
          </p>

          {/* Flow Diagram */}
          <div className="flex items-center justify-center gap-4 mt-8 text-sm font-mono">
            <span className="text-blue-400">HARDWARE</span>
            <span className="text-slate-600">→</span>
            <span className="text-green-400">FIRMWARE</span>
            <span className="text-slate-600">→</span>
            <span className="text-cyan-400">CLOUD</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500 font-mono">
            <span className="text-slate-600">//</span> Continuously expanding — currently exploring RTOS and edge computing
          </p>
        </div>
      </section>

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
          background: linear-gradient(90deg, transparent, var(--accent-color, #3b82f6), transparent);
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

export default SkillsSection;