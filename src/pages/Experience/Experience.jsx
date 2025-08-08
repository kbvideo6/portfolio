import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-blue-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-1000" />
        <Icon className="w-12 h-12 text-pink-400 relative z-10 transform group-hover:rotate-1 transition-transform duration-100" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-pink-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-pink-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-blue-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-blue-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "3D Animator & Video Editor",
      company: "Fiverr",
      period: "2019 - 2022",
      description:
        "Produced a wide range of 3D animations and video content for various clients. My work involved the entire production pipeline, from conceptualization and storyboarding to modeling, animation, rendering, and post-production.",
    },
    {
      icon: Layers,
      title: "IT Technician & Web Developer",
      company: "Sihanada",
      period: "2016 - 2019",
      description:
        "Managed and maintained the IT infrastructure at a local media grid. I also developed and maintained web applications, contributing to a variety of digital projects and ensuring the smooth operation of our online presence.",
    },
    {
      icon: Code2,
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2023 - Present",
      description:
        "Actively contributed to a number of open-source projects, focusing primarily on JavaScript-based technologies. My contributions include bug fixes, feature development, and documentation.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#0f0f0f]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_2px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:400px_400px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_10%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pink-400  rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500/20 to-blue-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              ගහන්න ඕන වෙලාවෙ අතගාපු එක තමා වැරැද්ද!!
              |    |
              "It's not what we do once in a while that shapes our lives. It's what we do consistently." - Tony Robbins
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-10 left-20 w-56 h-56 bg-pink-500/50 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-[] right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
