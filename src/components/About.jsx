import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, skills } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
  

const SkillsCard = ({skill}) => {
  return (
    <div className='xs:w-[250px] w-full '>
      <motion.div>
      <h4 className="text-bold text-left w-full"><skill.icon className="text-[#915eff] inline-block" /> &nbsp; <span className="text-secondary text-xl">{skill.title}</span> </h4> 
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="py-5 px-4 flex flex-col space-y-4  min-h-[280px]"
        >
         
         { skill.details.map((techs, index) => (
          <span className="text-start w-full text-lg"><techs.icon className="text-secondary inline-block font-extrabold" /> &nbsp;{techs.tech}</span>
         ))}
        </div>
      </motion.div>
    </div>
  )
}

const ServiceCard = ({ index, title, icon}) => {
    return (
      <Tilt
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}

            className="bg-tertiary rounded-[20px] py-5 px-12 flex flex-col justify-evenly items-center min-h-[280px]"
          >
            <img src={icon} alt={title} className="w-24 h-24 object-contain" />
            <h3 className="text-white text-[20px] text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
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
          Highly skilled DevOps Engineer with a proven track record of designing, implementing, and managing robust, scalable, and automated infrastructure solutions. Possessing a deep understanding of the software development lifecycle through my Full Stack Developer experience, I excel at bridging the gap between development and operations teams, ensuring seamless collaboration and accelerated deployment cycles with my expertise in various programming languages, frameworks and database. Proficient in cloud technologies, containerization, and configuration management tools. I am dedicated to optimizing continuous integration and delivery pipelines. With my Cyber Security certificate I have a strong focus on security, reliability, and performance to promote trust with clients. I am committed to enhancing the overall efficiency and effectiveness of software development processes with my love for innovation and automation. My proficiency in agile methodologies and collaborative team environments enables me to contribute effectively throughout the software development lifecycle. By staying current with the latest industry trends, I strive to leverage emerging technologies to drive continuous improvement and create impactful DevOps solutions.
        </motion.p>

        <div className="mt-4 w-full flex flex-wrap gap-4">
          <h2 className='text-white text-[28px] font-bold block w-full'>Skills</h2>

            { skills.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
        </div>


        <div className="mt-20 flex flex-wrap gap-10">
          { services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")