import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -6,
        boxShadow: "0px 0px 25px rgba(133, 76, 230, 0.7)",
        borderColor: "rgba(133, 76, 230, 0.5)",
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
