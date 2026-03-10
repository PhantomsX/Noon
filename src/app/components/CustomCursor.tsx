"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.5 });

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.2 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="hidden pointer-fine:block">
      {/* Outer circle */}
      <motion.div
        className="fixed top-0 left-0 size-14 pointer-events-none z-9999 rounded-full border-white border-2"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 size-4 pointer-events-none z-9999 rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};

export default CustomCursor;
