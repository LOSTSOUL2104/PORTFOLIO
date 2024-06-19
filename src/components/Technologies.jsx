import React from "react";
import {
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y:[10,-10],
    transition:{
    duration: duration,
    ease: "linear",
    repeat : Infinity,
    repeatTYpe: "reverse",
    }
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-25">
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
      className="my-20 text-center text-5xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-6">
        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-neutral-800 py-5 ring-2 ring-neutral-700 shadow-lg shadow-neutral-700"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconvariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-neutral-800 py-5 ring-2 ring-neutral-700 shadow-lg shadow-neutral-700"
        >
          <TbBrandNextjs className="text-7xl " />
        </motion.div>

        <motion.div
          variants={iconvariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-neutral-800 p-5 ring-2 ring-neutral-700 shadow-lg shadow-neutral-700"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconvariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-neutral-800 py-5 ring-2 ring-neutral-700 shadow-lg shadow-neutral-700"
        >
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconvariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-neutral-800 py-5 ring-2 ring-neutral-700 shadow-lg shadow-neutral-700"
        >
          <FaGithub className="text-7xl text-white" />
        </motion.div>

        <motion.div
          variants={iconvariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-neutral-800 py-5 ring-2 ring-neutral-700 shadow-lg shadow-neutral-700"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
