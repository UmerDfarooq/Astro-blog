import { useState } from "react";
import { motion } from "framer-motion";
import avatar from "/avatar.png";
import { useMediaQuery } from "usehooks-ts";

export function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width:1280px)");

  const navMotion = {
    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <nav className="relative mx-8 mb-24 flex justify-between font-medium items-center pt-8 pb-6 md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2  "
        width="250"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          initial={{ pathLength: 0, opacity: 0 }}
          transition={{ delay: 1, duration: 0.75 }}
          d="M2 2L428 1.99996"
          stroke="#282828"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img src={avatar} alt="Profile Picture" />
      </div>
      {/* title */}

      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>

      {/* check if we are on mobile or not*/}
      {matches && (
        <div className="flex gap-12">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      )}

      {!matches && (
        <div
          className="space-y-1.5 cursor-pointer z-50 "
          onClick={() => setToggled((prevToggle) => !prevToggle)}
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5  w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 32 }}
            className="block h-0.5  w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0 }}
            className="block h-0.5  w-8 bg-black"
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/services">
              Services
            </motion.a>
            <motion.a variants={itemMotion} href="/contact">
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
