import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import ParticlesBackground from "./ParticlesBackground";
import avatarImg from "../assets/avatar.png";

import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center relative"
      id="home"
    >
      <ParticlesBackground />
      <div className="container mx-auto z-10">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-9">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[85px] hover:text-accent transition-all duration-300 drop-shadow-[0_0_15px_rgba(133,76,230,0.5)]"
            >
              ABHISHEK <span>PRASAD</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[24px] lg:text-[45px] font-secondary
            font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                speed={80}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A passionate Software Developer and MERN Stack enthusiast based in India. I love building modern, responsive web applications and solving complex problems with clean code.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="/12322357_ABHISHEK CV (1).pdf"
                download="12322357_ABHISHEK CV (1).pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-lg"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                Download CV
                <FiDownload style={{ marginLeft: "5px" }} />
              </a>


            </motion.div>
            {/*socials*/}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/iamabhishek86/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/imabhishek86/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
          {/*text*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto hover:scale-105 transition-all duration-500 drop-shadow-[0_0_30px_rgba(133,76,230,0.6)]"
          >
            <img src={avatarImg} alt="Abhishek Prasad" className="relative z-10 rounded-full w-full object-cover aspect-square" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
