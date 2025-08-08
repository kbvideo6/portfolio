import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Ordinary Level",
      school: "Secondary School",
      mascot: "📘",
      year: "2017-2019",
      achievements: ["Overall Result: 8A, 1B", "Mathematics: A", "Science: A", "English: A", "Sinhala: A", "History: A", "Drama: B"],
      skills: ["Mathematics", "Science", "English Literature", "Sinhala Language", "History", "Drama Performance"],
      description:
        "Completed Ordinary Level with strong foundation in core academic subjects including Mathematics, Science, Languages and Social Studies.",
    },

    {
      degree: "Advanced Level",
      school: "Secondary School",
      mascot: "📗",
      year: "2020-2022",
      achievements: ["Mathematics: C", "Physics: B", "Chemistry: B", "General Information Technology: A", "English Literature: A"],
      skills: ["Advanced Mathematics", "Physics Principles", "Chemical Reactions", "Programming Concepts", "English Literature Analysis"],
      description:
        "Specialized in Physical Science stream with focus on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.",
    },

    {
      degree: "Bachelor of Electronic and Embedded Systems",
      school: "University of Sri Jayewardenepura",
      mascot: "🎓",
      year: "2023-present",
      achievements: ["Electronics and Embedded Systems", "CGPA: 3.7/4.0", "Dean's List: 2022, 2023"],
      skills: ["Embedded Systems Design", "Microcontroller Programming", "Circuit Design", "PCB Design", "Digital Electronics", "Signal Processing"],
      description:
        "Pursuing degree in Electronics and Embedded Systems Engineering with focus on IoT applications, microcontroller programming, and digital system design.",
    },

    {
      degree: "Online Computer Science Degree",
      school: "Coursera/edX/Udemy",
      mascot: "💻",
      year: "2022-Present",
      achievements: ["Full Stack Development", "Data Structures & Algorithms", "Cloud Computing"],
      skills: ["JavaScript", "Python", "React", "Node.js", "Database Management", "Git Version Control", "AWS Cloud Services"],
      description:
        "Supplementary online education in Computer Science covering modern web development, algorithms, and cloud technologies to complement academic studies.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden pt-20 bg-[#04081A]">


      <div className="max-w-9xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-9xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent mb-3">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            අපට කළ හැකි උපරිමය කරන විට, නොසිතන ප්‍රමාණකාර දේවල් අපගේ ජීවිතයට ලැබේ. ||“Education is not preparation for life; education is life itself.” — John Dewey

          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
