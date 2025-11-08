'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollReveal({ 
  children, 
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = true 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    scaleRotate: {
      hidden: { opacity: 0, scale: 0.5, rotate: -10 },
      visible: { opacity: 1, scale: 1, rotate: 0 }
    },
    slideUp: {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Cubic bezier suave
      }}
    >
      {children}
    </motion.div>
  );
}
