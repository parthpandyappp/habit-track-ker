"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [showHindiTitle, setShowHindiTitle] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowHindiTitle(true);
    }, 1500);
  }, []);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0, rotate: 2 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{
        type: "spring",
        delay: 0.5,
        stiffness: 200,
        ease: "easeIn",
        duration: 1,
      }}
      className="flex h-full flex-col items-center justify-center gap-2"
    >
      <Image src="static/images/hero.svg" alt="hero" width={300} height={100} />
      <h1 className="text-5xl font-bold mt-6 relative flex flex-col items-center justify-center gap-3">
        <div className="flex gap-2 w-[600px] text-center">
          <div className="w-72 text-right">Habit </div>
          <div className="">
            {showHindiTitle ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className="inline w-full text-left"
              >
                ट्रैक कर
              </motion.div>
            ) : (
              "Track-Ker"
            )}
          </div>
        </div>
        <p className="text-lg font-normal">
          Building better habits, one day at a time
        </p>
      </h1>
      <div className="flex gap-2">
        <button className="px-8 py-2 border-2 bg-white rounded">
          Learn More
        </button>
        <button className="px-8 py-2 rounded bg-secondary text-white">
          Register
        </button>
      </div>
    </motion.div>
  );
}
