"use client";
// Icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMetasploit,
  SiBurpsuite,
  SiTailwindcss,
  SiNextdotjs,
  SiKalilinux,
  SiWireshark,
  SiLangchain,
  SiTypescript,
  SiKotlin,
  SiGooglecloud,
} from "react-icons/si";
import { FaPython, FaSwift, FaAws } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
// End icons
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description: [
    "Born and raised in Bellevue Washington, a stone's throw away from a little company called Microsoft. I've always been fascinated with technology and how it can change the world!",
    "In my spare time I enjoy playing Golf ⛳️, spending time with my family, and following the NHL (Go Kraken!) 🏒",
  ],
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dominic Cobb",
    },
    {
      fieldName: "Phone",
      fieldValue: "Upon Request",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Email",
      fieldValue: "him@dominiccobb.ai",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, Urdu",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description: [
    "Proven track record of leading teams, driving technical transformations, and implementing best practices in software architecture, testing, and DevOps.",
  ],
  items: [
    {
      company: "Yum Brands",
      position: "Software Engineer",
      duration: "2023 - Present",
    },
    {
      company: "Spark (Freelance)",
      position: "Lead Developer",
      duration: "Ongoing",
    },
    {
      company: "General Assembly",
      position: "Lead SWE Instructor",
      duration: "Summer 2021",
    },
    {
      company: "Extra Card ",
      position: "Senior Software Engineer",
      duration: "2020 - 2021",
    },
    {
      company: "Seventh Ave",
      position: "Lead Mobile Engineer",
      duration: "2019 - 2020",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education & Certifications",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "General Assemly",
      degree: " Software Engineering Immersive",
      duration: "2020",
    },
    {
      institution: "Lake Washington Institute of Technology",
      degree: " Mechanical Engineering (No Degree)",
      duration: "2009 - 2012",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <FaSwift />,
      name: "Swift",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaGolang />,
      name: "Go",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiKalilinux />,
      name: "Kali Linux",
    },
    {
      icon: <SiMetasploit />,
      name: "Metasploit",
    },
    {
      icon: <SiBurpsuite />,
      name: "Burpsuite",
    },
    {
      icon: <SiWireshark />,
      name: "Wireshark",
    },
    {
      icon: <SiLangchain />,

      name: "Langchain",
    },
    {
      icon: <AiOutlineOpenAI />,

      name: "OpenAi",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">
              Education & Certifications
            </TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {experience.description.map((text) => (
                  <p
                    key={text}
                    className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                  >
                    {text}
                  </p>
                ))}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                {about.description.map((text) => (
                  <p
                    key={text}
                    className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
