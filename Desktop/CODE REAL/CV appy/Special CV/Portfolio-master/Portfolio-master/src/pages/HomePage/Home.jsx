// import React, { Component }  from 'react';

import "./style.css";

import { WorkData } from "../../data/WorkData";
import { motion } from "framer-motion";
import AOS from 'aos';

import {
  ContactBtn,
  PageHeader,
  SkillsIntro,
  CTABtn,
  Intro,
  Nav,
  SectionTitle,
  WorkCard,
  AboutText,
  SocialConnect,
  ContactEmail,
  FooterNav,
  SkillsBox,
} from "../../components";
import SkillItems from "../../components/SkillSlider/SkillItems";
import Experience from "../../components/Experience/Experience";
import Portfolio from "../../components/Portfolio/Portfolio";





const Home = () => {

  AOS.init({ duration: 2000, delay: 150 })

  const WCard = WorkData.map((work) => {
    return <WorkCard key={work.id} work={work} />;
  });

  return (
    <>
      <motion.div
        className="page"
        exit={{ x: "-100vw" }}
        transition={{ ease: "easeInOut" }}
      >
        <div className="head-wrap" id="home">
          <Nav />
          <div className="head">
            <PageHeader />
            <SkillsIntro />
          </div>
        </div>

        <section className="skills" data-aos="fade-left">
          <article>
            <SectionTitle title="Competences" />
          </article>
          <SkillItems />
          {/* <SkillsBox /> */}
        </section>
        <div className="portfo container">
          {/* <section className="intro">
            <ContactBtn />
            <Intro />
            <div className="resume-btn-wrap">
              <CTABtn
                text="Resume"
                link="https://drive.google.com/file/d/1_cAMkys07aDdbtoDAwwCRVtqqoJzfbbe/view?usp=sharing"
                padding="clamp(8px, 2px + 1vw, 10px)"
                width="clamp(120px, 90px + 10vw ,220px)"
              />
            </div>
          </section> */}

          {/* <Experience /> */}


          {/* <section className="work" id="work">
            <SectionTitle title="Selected Works :" />
            <div className="projects-wrap">{WCard}</div>
          </section> */}
          <section className="work" id="work">
            <Portfolio />
          </section>
        </div>

        <section className="about" id="about">
          <article>
            <SectionTitle title="About Me :" />
          </article>
          <div>
            <AboutText />
            {/* <SocialConnect dim="clamp(20px, 18px + 5vw, 55px)" /> */}
          </div>
        </section>


        <div className="container">
          <section className="contact" id="connect">
            <article>
              <SectionTitle
                title="Say Hi to Me!"
                fontSize="clamp(36px, 20px + 7vw, 80px)"
              />
            </article>
            <ContactEmail />
            {/* <footer>
              <SocialConnect dim="25px" size="15px" />
              <div className="footer-content">
                <FooterNav />
              </div>
            </footer> */}
          </section>
          <div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
