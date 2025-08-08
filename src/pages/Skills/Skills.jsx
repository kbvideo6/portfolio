import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaCube, // Using FaCube for SolidWorks and 3D Modeling
  FaFilm,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiAutodesk, // This one exists
  SiAdobeaftereffects, // This one also exists
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { BsCpu as ElectronicsIcon } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Full-Stack Development",
      color: "text-green-400",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-4 h-4 text-gray-400" />,
        },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Engineering & Design",
      color: "text-blue-400",
      skills: [
        {
          name: "Electronics",
          icon: <ElectronicsIcon className="w-4 h-4 text-gray-300" />,
        },
        {
          // --- FIX IS HERE ---
          name: "SolidWorks",
          icon: <FaCube className="w-4 h-4 text-[#DA1F0F]" />, // Using FaCube with SolidWorks brand color
        },
        {
          name: "AutoCAD",
          icon: <SiAutodesk className="w-4 h-4 text-[#0696D7]" />,
        },
        {
          name: "3D Modeling",
          icon: <FaCube className="w-4 h-4 text-blue-300" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative & Motion Graphics",
      color: "text-yellow-400",
      skills: [
        {
          name: "After Effects",
          icon: <SiAdobeaftereffects className="w-4 h-4 text-[#9999FF]" />,
        },
        {
          name: "Video Editing",
          icon: <FaFilm className="w-4 h-4 text-purple-400" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "GitHub",
          icon: <FaGithub className="w-4 h-4 text-gray-300" />,
        },
      ],
    },
    {
      icon: Code2,
      title: "Languages & Tools",
      color: "text-pink-400",
      skills: [
        {
          name: "C#",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#A179D4]" />,
        },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center mb-1">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-1 mb-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;