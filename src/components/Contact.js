import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import MotionWrapper from "./MotionWrapper";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("QJgBCg7WNhCjRdoZA");
    emailjs
      .sendForm(
        "service_o8clhcs",
        "template_ekqh0yd",
        form.current,
        "QJgBCg7WNhCjRdoZA"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message.");
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaUser />,
      title: "Name",
      value: "Abhishek Prasad",
      link: null,
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "abhi32348@gmail.com",
      link: "mailto:abhi32348@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91-6205244565", // Using a likely placeholder format
      link: "tel:+916205244565",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "India",
      link: null,
    },
  ];

  return (
    <section className="py-20 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12">
          {/* text & contact info */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col justify-start"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[70px] leading-none mb-8">
                Let's work <br /> together!
              </h2>
            </div>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 lg:mb-0">
              {contactInfo.map((info, index) => (
                <MotionWrapper key={index}>
                  <div className="bg-[#12122b]/50 border border-white/10 p-5 rounded-xl backdrop-blur-sm transition-all duration-300 group h-full">
                    <div className="flex items-center gap-x-4">
                      <div className="text-2xl text-accent group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h5 className="text-sm text-white/40 uppercase tracking-widest">{info.title}</h5>
                        {info.link ? (
                          <a href={info.link} className="text-lg font-medium hover:text-accent transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border border-white/10 rounded-2xl flex flex-col gap-y-6 p-8 items-start bg-[#12122b]/30 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <input
              className="bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white/30 focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
            <input
              className="bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white/30 focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              className="bg-transparent border-b border-white/20 py-12 outline-none w-full placeholder:text-white/30 focus:border-accent transition-all resize-none mb-4"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            <MotionWrapper>
              <button 
                type="submit" 
                className="btn btn-lg w-full md:w-auto"
              >
                Send message
              </button>
            </MotionWrapper>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
