import React, { Component }  from 'react';

import { motion } from "framer-motion";
import "./style.css";

const ParentVariant = {
  initial: {
    x: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TextVariant = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const TextVariant2 = {
  initial: {
    x: -400,
  },
  animate: {
    x: 0,
    transition: {
      duration: 1.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const PageHeader = () => {
  return (
    <>
      <motion.div
        className="text-area "
        variants={ParentVariant}
        initial="initial"
        animate="animate"
      >
        <span>
          <motion.h1 className="mt-2" variants={TextVariant}>
            Hi, I'm Hung
          </motion.h1>
        </span>
        {/* <span>
          <motion.h1 variants={TextVariant}>I'm Hung</motion.h1>
        </span> */}
        <span>
          <motion.h2 variants={TextVariant2}>Make user have a good experience on my website is my truthly happiness !</motion.h2>
        </span>
      </motion.div>
    </>
  );
};

export default PageHeader;
