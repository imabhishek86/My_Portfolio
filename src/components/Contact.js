import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Initialize with the public key
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
          e.target.reset(); // Reset form on success
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please check the console for details.");
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/*text*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/*form*/}
          <motion.form
            ref={form} // Attach form ref to the form element
            onSubmit={sendEmail} // Add onSubmit handler
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
