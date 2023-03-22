import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
  


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
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet error voluptas quasi. Quibusdam, velit nam incidunt aliquid repellendus obcaecati illo necessitatibus temporibus eum, harum molestias consequatur tempore voluptate cupiditate exercitationem.
          Omnis iste voluptas possimus laudantium veritatis, magnam provident. Expedita molestiae natus ut aperiam assumenda. Earum eos similique modi vitae quod culpa officia, dolorem ipsum eius quaerat fugiat aliquam est non.
          Eum ab consequuntur exercitationem et. Sed iusto voluptate dolore alias. Aliquam ipsam aperiam illum laboriosam architecto harum maiores? Eum ab dolorum aliquid possimus fugit eligendi architecto cum corrupti a ad?
          Est, nulla! Velit et cum ut vero ipsum sunt dignissimos architecto quidem deserunt eligendi quae dolorum quibusdam, quas culpa harum iure eaque mollitia omnis itaque adipisci ratione quaerat ea enim!
        </motion.p>
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