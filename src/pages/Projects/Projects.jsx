import React from "react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Cpu, Server, Activity, MapPin, Wifi, Shield, Settings, Database, Cloud, Smartphone, Monitor, Car, Droplets, HardDrive, Users, Video, Link, Lock, Award, Wrench } from "lucide-react";
import TypewriterTitle from "@/components/ui/TypewriterTitle";

const projects = [
  {
    id: "01",
    title: "Pulsera Vital - Wearable Health Monitor",
    category: "Wearable // Full-Stack",
    description: "Engineered a comprehensive health monitoring bracelet (ESP32-S3, BLE) integrated with a React Native/Expo app and a robust Supabase backend. Architected the v2.0 Prisma schema, developed 45+ REST endpoints, and implemented multi-channel emergency alerting systems.",
    stack: ["ESP32-S3", "React Native", "Supabase", "Prisma", "BLE"],
    icon: Activity,
    links: { ongoing: true },
    status: "Production",
    statusColor: "#10b981",
    color: "#10b981",
  },
  {
    id: "02",
    title: "BYD EV Home Assistant Integration",
    category: "IoT // Reverse Engineering",
    description: "Reverse-engineered the BYD CN API utilizing AES-128-CBC encryption and MQTT protocols. Developed a local Home Assistant Operating System (HAOS) bridge to integrate BYD electric vehicle telemetry seamlessly into smart home environments.",
    stack: ["Python", "MQTT", "Home Assistant", "AES-128"],
    icon: Car,
    links: { ongoing: true },
    status: "Active",
    statusColor: "#3b82f6",
    color: "#3b82f6",
  },
  {
    id: "03",
    title: "Japan Wildlife Trap System",
    category: "IoT // Mobile App",
    description: "Developed a remote monitoring system for wildlife traps in the Japanese market. Utilized Raspberry Pi 5 with 4G cellular connectivity, established MQTT communication, and built a companion React Native application for real-time alerts.",
    stack: ["Raspberry Pi 5", "React Native", "MQTT", "4G LTE"],
    icon: Wifi,
    links: { ongoing: true },
    status: "Deployed",
    statusColor: "#10b981",
    color: "#10b981",
  },
  {
    id: "04",
    title: "Pumping Station IoT Pilot",
    category: "Industrial IoT",
    description: "Deployed an IoT pilot for a maintenance company using Waveshare ESP32-S3 SIM7670G boards with 4G/cellular capability. Interfaced with CT clamp sensors for power monitoring and scaled the solution using NORVI Agent One industrial controllers.",
    stack: ["ESP32-S3", "4G LTE", "CT Sensors", "NORVI Agent"],
    icon: Droplets,
    links: { ongoing: true },
    status: "Pilot",
    statusColor: "#eab308",
    color: "#eab308",
  },
  {
    id: "05",
    title: "4G Alcohol Ignition Interlock Camera",
    category: "Hardware Design // Automotive",
    description: "Engineered a custom PCB based on the LilyGO T-SIM7600G-H for an alcohol ignition interlock camera unit. Delivered a high-reliability hardware solution designed for automotive safety compliance.",
    stack: ["Altium Designer", "PCB Design", "LilyGO", "4G LTE"],
    icon: Shield,
    links: { ongoing: true },
    status: "Completed",
    statusColor: "#8b5cf6",
    color: "#8b5cf6",
  },
  {
    id: "06",
    title: "CM5 Carrier Board Security Architecture",
    category: "Hardware // Security",
    description: "Conducted schematic reviews for a Compute Module 5 (CM5) carrier board featuring SN65DSI86 DSI-to-eDP and AMOLED display integration. Designed a comprehensive security architecture utilizing LUKS, ATSHA204A crypto-authentication, secure boot, and hardware key licensing.",
    stack: ["CM5", "Hardware Security", "LUKS", "ATSHA204A"],
    icon: Lock,
    links: { ongoing: true },
    status: "Active",
    statusColor: "#f43f5e",
    color: "#f43f5e",
  },
  {
    id: "07",
    title: "CAN Bus Telemetry Dashboard",
    category: "Automotive IoT",
    description: "Developed a WebSocket-based telemetry dashboard evaluated as an alternative to the AIM X-Log system. Utilized ESP32 and MCP2515 CAN controllers to acquire and transmit vehicle data with extremely low latency.",
    stack: ["ESP32", "MCP2515", "CAN Bus", "WebSockets"],
    icon: Monitor,
    links: { ongoing: true },
    status: "Prototype",
    statusColor: "#3b82f6",
    color: "#3b82f6",
  },
  {
    id: "08",
    title: "Hydroponic Dosing Controller",
    category: "IoT // Smart Agriculture",
    description: "Created an automated hydroponic dosing controller using ESP32-S3 and ESPHome. Designed a graphical user interface using LVGL and seamlessly integrated the system with Home Assistant via MQTT for comprehensive environment control.",
    stack: ["ESP32-S3", "ESPHome", "LVGL", "Home Assistant"],
    icon: Droplets,
    links: { ongoing: true },
    status: "Active",
    statusColor: "#10b981",
    color: "#10b981",
  },
  {
    id: "09",
    title: "M.2 Smart Home Z-Wave Module",
    category: "Hardware Design",
    description: "Designed a compact M.2 smart home module featuring the EFR32ZG23 Z-Wave SoC and CP2102N USB bridge. The PCB was fully drafted in EasyEDA Pro and manufactured via JLCPCB for robust smart home hub integration.",
    stack: ["EasyEDA Pro", "EFR32ZG23", "Z-Wave", "PCB"],
    icon: HardDrive,
    links: { ongoing: true },
    status: "Completed",
    statusColor: "#8b5cf6",
    color: "#8b5cf6",
  },
  {
    id: "10",
    title: "Remote Claw Machine",
    category: "IoT // Entertainment",
    description: "Developed a remote-controlled claw machine utilizing ESP32 microcontrollers and WebSockets. Implemented a robust queue management system to handle multiple concurrent remote players seamlessly.",
    stack: ["ESP32", "WebSockets", "Node.js", "C++"],
    icon: Server,
    links: { ongoing: true },
    status: "Deployed",
    statusColor: "#f59e0b",
    color: "#f59e0b",
  },
  {
    id: "11",
    title: "Mosquitto & Firebase Scalability",
    category: "Cloud // Architecture",
    description: "Analyzed and troubleshot technical infrastructure to resolve a specific scalability bottleneck in a large-scale IoT deployment. Redesigned the Mosquitto MQTT broker and Firebase integration to ensure high availability and optimal performance under load.",
    stack: ["Mosquitto MQTT", "Firebase", "System Architecture"],
    icon: Cloud,
    links: { ongoing: true },
    status: "Completed",
    statusColor: "#8b5cf6",
    color: "#8b5cf6",
  },
  {
    id: "12",
    title: "Firebase-to-Home Assistant Bridge",
    category: "Software // Integration",
    description: "Built a bridge application between Firebase and Home Assistant for a private client. Developed a Node.js service leveraging MQTT Discovery alongside a React-based monitoring dashboard for seamless ecosystem interoperability.",
    stack: ["Node.js", "MQTT", "Home Assistant", "Firebase", "React"],
    icon: Link,
    links: { ongoing: true },
    status: "Completed",
    statusColor: "#8b5cf6",
    color: "#8b5cf6",
  },
  {
    id: "13",
    title: "BYD Telemetry HiveMQ Migration",
    category: "Cloud // IoT",
    description: "Migrated a BYD vehicle telemetry dashboard's underlying messaging architecture to HiveMQ cloud. Successfully maintained and enhanced integrations with Home Assistant for a streamlined smart garage experience.",
    stack: ["HiveMQ", "MQTT", "Home Assistant", "Cloud Architecture"],
    icon: Cloud,
    links: { ongoing: true },
    status: "Completed",
    statusColor: "#8b5cf6",
    color: "#8b5cf6",
  },
  {
    id: "14",
    title: "MQTT/DTU Industrial Integration",
    category: "Industrial IoT",
    description: "Integrated a KNF dissolved oxygen sensor with cloud infrastructure using a ZY-401-601 Data Transfer Unit (DTU). Configured a secure TLS MQTT broker bridge for robust industrial data acquisition.",
    stack: ["MQTT", "TLS", "DTU", "Industrial Sensors"],
    icon: Settings,
    links: { ongoing: true },
    status: "Active",
    statusColor: "#eab308",
    color: "#eab308",
  },
  {
    id: "15",
    title: "LoRaWAN Sensor Deployment",
    category: "Networking // IoT",
    description: "Architected a comprehensive LoRaWAN sensor deployment proposal utilizing the ChirpStack open-source network server. Specified and integrated Milesight and Dragino hardware for wide-area environmental monitoring.",
    stack: ["LoRaWAN", "ChirpStack", "Milesight", "Dragino"],
    icon: Wifi,
    links: { ongoing: true },
    status: "Proposed",
    statusColor: "#64748b",
    color: "#64748b",
  },
  {
    id: "16",
    title: "Staff Management System",
    category: "Software // Planning",
    description: "Formulated a detailed, milestone-based technical proposal for a Staff Management System for Hills & Valley Pharmacy. Focused on system architecture, database design, and clear project delivery phases.",
    stack: ["System Architecture", "Technical Writing", "Planning"],
    icon: Users,
    links: { ongoing: true },
    status: "Proposed",
    statusColor: "#64748b",
    color: "#64748b",
  },
  {
    id: "17",
    title: "NetX IoT Challenge 2026",
    category: "Leadership // Event Org",
    description: "Spearheaded the event structure for the NetX IoT Challenge 2026. Drafted comprehensive evaluation criteria, established team communication protocols via WhatsApp, and built an ambassador referral program.",
    stack: ["Event Management", "Leadership", "Communication"],
    icon: Award,
    links: { ongoing: true },
    status: "Completed",
    statusColor: "#8b5cf6",
    color: "#8b5cf6",
  },
  {
    id: "18",
    title: "74LS47 Decoder Logic Design",
    category: "Digital Electronics",
    description: "Designed the foundational logic circuits utilizing the 74LS47 BCD to 7-segment decoder. Produced highly structured technical documentation to accompany the hardware design for educational and manufacturing purposes.",
    stack: ["Digital Logic", "74LS47", "Technical Documentation"],
    icon: Cpu,
    links: { ongoing: true },
    status: "Completed",
    statusColor: "#8b5cf6",
    color: "#8b5cf6",
  },
  {
    id: "19",
    title: "Custom Electronic Prototyping",
    category: "Hardware // Prototyping",
    description: "Prototyped and extensively troubleshot a wide variety of custom electronic circuits. Leveraged Arduino and ESP32 development boards alongside Altium Designer to validate complex hardware designs prior to fabrication.",
    stack: ["Altium Designer", "ESP32", "Arduino", "Prototyping"],
    icon: Wrench,
    links: { ongoing: true },
    status: "Active",
    statusColor: "#eab308",
    color: "#eab308",
  }
];

const ProjectCard = React.memo(({ project }) => {
  const IconComponent = project.icon;
  return (
    <div className="group bg-slate-950/50 border border-slate-800 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col">
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
          {project.links.ongoing ? (
            <div
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-mono border border-slate-700 text-slate-400 rounded-md bg-slate-800/50 cursor-not-allowed"
            >
              <Activity className="w-4 h-4 animate-pulse opacity-70" />
              Updating Portfolio Assets
            </div>
          ) : (
            <>
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-mono border border-slate-700 text-slate-300 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  View Code
                </a>
              )}
              {(project.links.demo || project.links.schematic || project.links.paper) && (
                <a
                  href={project.links.demo || project.links.schematic || project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-mono text-white rounded-md transition-colors shadow-lg hover:opacity-90"
                  style={{
                    backgroundColor: project.color,
                    boxShadow: `0 4px 14px ${project.color}30`,
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.links.demo
                    ? "Live Demo"
                    : project.links.schematic
                      ? "Schematic"
                      : "Paper"}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default function Projects() {
  return (
    <main className="pt-4 md:pt-6 pb-24 md:pb-20 bg-[#0a0f1e] text-white min-h-screen relative overflow-hidden">
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

            <TypewriterTitle
              prefix="./"
              title="Selected Projects"
              className="text-3xl md:text-4xl font-bold font-mono mb-4"
            />
            <p className="text-slate-400 text-lg max-w-2xl">
              Engineering solutions from concept to deployment — PCB layouts, IoT architectures, and signal processing pipelines.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-3 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
                <div className="p-2.5 bg-blue-500/10 rounded-lg">
                  <Monitor className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-white">{projects.length}</div>
                  <div className="text-[10px] md:text-xs text-slate-400 font-mono uppercase tracking-wider">Projects Delivered</div>
                </div>
              </div>
              
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-3 flex items-center gap-4 hover:border-emerald-500/30 transition-colors">
                <div className="p-2.5 bg-emerald-500/10 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-mono text-white">300+</div>
                  <div className="text-[10px] md:text-xs text-slate-400 font-mono uppercase tracking-wider">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
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
