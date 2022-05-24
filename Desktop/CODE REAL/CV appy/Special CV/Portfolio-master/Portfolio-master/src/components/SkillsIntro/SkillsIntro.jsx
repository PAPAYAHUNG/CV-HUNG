import React from "react";

import Marquee from "./Marquee/Marquee";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import "./style.css";

const SkillsIntro = () => {
  return (
    <>
      <div className="skill-intro">
        <motion.div
          initial={{ y: -100, x: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            delay: 0.8,
            type: "spring",
            duration: 0.5,
            ease: "easeIn",
            damping: 10,
          }}
        >
          <Icon icon="carbon:arrow-right" className="arrow" />

        </motion.div>
        <div>
          <Marquee text="3 Years Frontend-Developer" />
          <Marquee className="ml-3" text="Passionate and Enthusiastic " />
          <Marquee className="ml-5" text='An open-minded and friendly guy also!' />
        </div>
      </div>
    </>
  );
};

export default SkillsIntro;