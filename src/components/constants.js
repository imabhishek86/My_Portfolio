import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiC, SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { BsDiagram3 } from "react-icons/bs";

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C++",
        icon: <SiCplusplus className="text-2xl text-blue-600" />,
      },
      {
        name: "C",
        icon: <SiC className="text-2xl text-blue-500" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-2xl text-yellow-400" />,
      },
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 className="text-2xl text-orange-500" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt className="text-2xl text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
      },
      {
        name: "React.js",
        icon: <FaReact className="text-2xl text-cyan-400" />,
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-2xl text-green-500" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-2xl text-green-600" />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel className="text-2xl text-red-600" />,
      },
    ],
  },
  {
    title: "Core Concepts & Tools",
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: <BsDiagram3 className="text-2xl text-purple-500" />,
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-2xl text-orange-600" />,
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "lpu.png",
    school: "Lovely Professional University",
    date: "2023 - 2027",
    grade: "7.95 / 10",
    desc: "Pursuing Bachelor of Technology in Computer Science Engineering.",
    degree: "B.Tech Computer Science Engineering",
  },
  {
    id: 1,
    img: "https://img.icons8.com/color/48/000000/university.png",
    school: "Park Mount Public School",
    date: "",
    grade: "91%",
    desc: "Completed Class 12th curriculum, securing an excellent academic score.",
    degree: "Class 12",
  },
  {
    id: 2,
    img: "https://img.icons8.com/color/48/000000/university.png",
    school: "Prarambhika Public School",
    date: "",
    grade: "86%",
    desc: "Completed Class 10th curriculum with outstanding performance.",
    degree: "Class 10",
  },
];

export const projects = [
  {
    id: 0,
    title: "Udyog Saarthi",
    date: "Recent",
    description:
      "A comprehensive job portal platform designed to seamlessly connect job seekers with potential employers. It features user authentication, job posting, application tracking, and an intuitive dashboard.",
    image: "https://img.icons8.com/color/96/000000/briefcase.png",
    tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Express"],
    category: "web app",
    github: "https://github.com/imabhishek86/Udyog_Saarthi-2.0",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    date: "Current",
    description:
      "A modern, responsive personal portfolio website showcasing projects, skills, and experiences. Implemented with smooth scrolling, clean minimal design, and subtle animations.",
    image: "https://img.icons8.com/color/96/000000/resume-website.png",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    category: "web app",
    github: "https://github.com/imabhishek86/My_Portfolio",
  },
  {
    id: 3,
    title: "React Weather App",
    date: "Current",
    description:
      "A responsive weather application built using React that shows real-time weather information of any city using a weather API. The app displays temperature, weather conditions, humidity, and wind speed with a clean and modern UI.",
    image: "https://img.icons8.com/color/96/000000/partly-cloudy-day--v1.png",
    tags: ["React", "JavaScript", "HTML", "CSS", "API Integration"],
    category: "web app",
    github: "https://github.com/imabhishek86/react-weather-app",
    demo: "https://reactweatherrrapp.netlify.app/",
  },
  {
    id: 4,
    title: "React To-do List",
    date: "Current",
    description:
      "A simple and responsive To-Do List application built with React.js that allows users to add, delete, and manage daily tasks efficiently with a clean UI.",
    image: "https://img.icons8.com/color/96/000000/todo-list--v1.png",
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/imabhishek86/React-To-do-List",
  },
  {
    id: 5,
    title: "Recipe Meal Planner",
    date: "Current",
    description:
      "A web application that helps users plan meals and discover recipes. It allows users to organize meals, explore recipes, and manage their weekly meal planning with a simple and interactive interface.",
    image: "https://img.icons8.com/color/96/000000/meal.png",
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/imabhishek86/Recipe_Meal_Planner",
  },
  {
    id: 6,
    title: "Ecosystem Conservation",
    date: "Current",
    description:
      "A website designed to raise awareness about ecosystem conservation and environmental sustainability. The platform provides information about biodiversity, conservation practices, and encourages users to protect natural ecosystems.",
    image: "https://img.icons8.com/color/96/000000/compost.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/imabhishek86/Ecosystem-Conservation",
  },
];

export const achievements = [
  {
    title: "Solved 400+ questions on LeetCode",
    link: "https://leetcode.com/u/thee_abhishek/",
    icon: "FaCode",
  },
  {
    title: "Secured Top 10 position among 150 participants in Innovate X Hackathon",
    icon: "FaTrophy",
  },
];

export const certifications = [
  {
    title: "Cloud Computing – NPTEL",
    link: "https://drive.google.com/file/d/18oVBcky0tBry6_ZKqJGbCkHEgQ2RrBi8/view?usp=drive_link",
    icon: "FaCloud",
  },
  {
    title: "Full-Stack Web Development – CSE Pathshala",
    link: "https://drive.google.com/file/d/1DXL-5Rx6nP-cvowtBUwxUDOQh7ejhrVy/view?usp=drive_link",
    icon: "FaCertificate",
  },
  {
    title: "Problem Solving – HackerRank",
    link: "https://www.hackerrank.com/",
    icon: "FaCertificate",
  },
  {
    title: "Introduction to Hardware and OS – Coursera",
    link: "https://drive.google.com/file/d/1z-OFXO1_YW908waPA63V2olr4K9XuDva/view?usp=drive_link",
    icon: "FaCertificate",
  },
  {
    title: "Web Development – FreeCodeCamp",
    link: "https://drive.google.com/file/d/12TsfgIZTojMLPTQ3TjEttFAHuyA0nknN/view?usp=drive_link",
    icon: "FaCertificate",
  },
];
