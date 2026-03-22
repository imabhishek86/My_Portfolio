import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ripples, setRipples] = useState([]);

  const whatsappNumber = "916205244565";
  const email = "abhi32348@gmail.com";

  const playClickSound = () => {
    const clickSound = new Audio("/click.mp3");
    clickSound.play().catch((err) => console.log("Audio play failed:", err));
  };

  const handleClick = (e, callback) => {
    // Ripple Effect Logic
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    
    // Play Sound
    playClickSound();

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (callback) callback();
  };

  const menuItems = [
    {
      icon: <FaEnvelope />,
      href: `mailto:${email}`,
      color: "bg-[#12122b]",
      shadow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]",
      hoverShadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400",
      label: "Send Email",
      size: "h-12 w-12",
      iconSize: "text-xl",
    },
    {
      icon: <FaWhatsapp />,
      href: `https://wa.me/${whatsappNumber}`,
      color: "bg-[#25d366]",
      shadow: "shadow-[0_0_15px_rgba(37,211,102,0.4)]",
      hoverShadow: "hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]",
      borderColor: "border-transparent",
      hoverBorder: "border-transparent",
      label: "Chat on WhatsApp",
      size: "h-14 w-14",
      iconSize: "text-3xl",
      isWhatsApp: true,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-y-4">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-y-4 mb-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative flex items-center justify-end"
              >
                <span className="absolute right-16 scale-0 rounded bg-gray-800 px-3 py-1 text-xs text-white transition-all group-hover:scale-100 whitespace-nowrap">
                  {item.label}
                </span>
                
                {item.isWhatsApp && (
                  <div className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20 pointer-events-none w-full h-full"></div>
                )}
                
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  onClick={(e) => handleClick(e)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative overflow-hidden flex ${item.size} items-center justify-center rounded-full ${item.color} text-white border ${item.borderColor} ${item.shadow} ${item.hoverShadow} ${item.hoverBorder} transition-all duration-300 z-10`}
                >
                  <div className={item.iconSize}>{item.icon}</div>
                  {/* Ripple elements */}
                  {ripples.map((ripple) => (
                    <span
                      key={ripple.id}
                      className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
                      style={{
                        width: ripple.size,
                        height: ripple.size,
                        top: ripple.y,
                        left: ripple.x,
                      }}
                    />
                  ))}
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={(e) => handleClick(e, () => setIsOpen(!isOpen))}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`relative overflow-hidden flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_0_20px_rgba(133,76,230,0.5)] hover:shadow-[0_0_30px_rgba(133,76,230,0.8)] transition-all duration-300 z-[1000]`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl"
        >
          <FaPlus />
        </motion.div>
        {/* Ripple elements */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
            style={{
              width: ripple.size,
              height: ripple.size,
              top: ripple.y,
              left: ripple.x,
            }}
          />
        ))}
      </motion.button>

      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 600ms linear;
        }
      `}</style>
    </div>
  );
};

export default FloatingContact;
