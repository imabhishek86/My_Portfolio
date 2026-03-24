import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// Import React Icons
import {
  FaGraduationCap,
  FaAward,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section mt-16" id="about" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-y-10 lg:flex-row">
          {/* Box wrapper with rounded borders, accent shadow, and transparent background */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full p-6 bg-white/50 dark:bg-transparent rounded-lg shadow-lg"
            style={{ 
              border: `2px solid var(--primary-color)`,
              boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 15px var(--primary-color)` 
            }}
          >
            {/* text */}
            <div className="flex-1">
              <h2 className="h2 text-accent">About me.</h2>
              <h3 className="h3 mb-4">
                I'm a Driven Technophile looking to secure a challenging job
                role in the IT sector.
              </h3>
              <div className="mb-6">
                <p className="text-xl font-bold">Greetings!</p>
                <br></br>
                <ul>
                  <li className="flex items-center gap-2 mb-2">
                    <FaLaptopCode className="min-w-fit" /> I'm Abhishek Prasad, a Software Developer specializing in the MERN Stack.
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaGraduationCap className="min-w-fit" /> I hold a strong foundation in computer science principles, data structures, and algorithms.
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaAward className="min-w-fit" /> Over the course of my journey, I have built various practical applications including job portals and productivity tools.
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <FaLightbulb className="min-w-fit" /> I bring a unique work style to the table, characterized by a passion for solving complex problems and creating intuitive UI/UX.
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRocket className="min-w-fit" /> My aim is to master technical skills and forge a fulfilling career in software development.
                  </li>
                </ul>
              </div>
              {/* stats */}
              <div className="flex flex-col sm:flex-row gap-x-6 lg:gap-x-10 mb-12 justify-center lg:justify-between">
                <div className="flex-1 text-center mb-4 sm:mb-0">
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? <CountUp start={0} end={500} duration={3} /> : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Linkedin
                    <br />
                    Connections
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? (
                      <CountUp start={0} end={450} duration={3} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    DSA
                    <br />
                    Problems Solved
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                    +
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
              </div>
              {/* Contact button below stats */}
              {/* <div className="flex justify-center lg:justify-center"> */}
              {/* <button className="btn btn-lg">Contact me</button> */}
              {/* </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
