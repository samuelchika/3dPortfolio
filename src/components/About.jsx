import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const SkillsCard = ({ skill }) => {
  return (
    <div className="xs:w-[250px] w-full ">
      <motion.div>
        <h4 className="text-bold text-left w-full">
          <skill.icon className="text-[#915eff] inline-block" /> &nbsp;{" "}
          <span className="text-secondary text-xl">{skill.title}</span>{" "}
        </h4>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="py-5 px-4 flex flex-col space-y-4  min-h-[280px]"
        >
          {skill.details.map((techs, index) => (
            <span className="text-start w-full text-lg">
              <techs.icon className="text-secondary inline-block font-extrabold" />{" "}
              &nbsp;{techs.tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 flex flex-col justify-evenly items-center min-h-[280px]"
        >
          <img src={icon} alt={title} className="w-24 h-24 object-contain" />
          <h3 className="text-white text-[20px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] text-justify"
        >
          DevOps / Full Stack / Network Engineer with 8+ years of experience in
          designing, automating, tutoring, implementing, and monitoring DevOps /
          Network processes for integral deployment over cloud / local
          infrastructure with emphasis on security and performance. Proficient
          in, but not limited to Jenkins, Ansible, Network Protocol, NodeJS,
          Pipelines, Zabbix, scripting, agile and training junior DevOps
          engineers. Proven track record of improving deployment / testing
          process by 70%, reducing security incidents by 50%. Collaborative team
          player with exceptional technical leadership and problem-solving
          skills.
        </motion.p>

        <div className="mt-4 w-full flex flex-wrap gap-4">
          <h2 className="text-white text-[28px] font-bold block w-full">
            Skills
          </h2>
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
