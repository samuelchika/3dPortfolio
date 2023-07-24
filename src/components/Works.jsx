import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex jusity-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain mx-auto"
              />
            </div>
          </div>
        </div> */}
        <div className="mb-4 flex flex-wrap gap-6 justify-center">
          {tags.map((tag) => (
            <p key={tag.name} classname={`text-[14px] font-bold block`}>
              <span className={`${tag.color} `}>
                {" "}
                {tag?.icon && <tag.icon className="inline-block  border-white" />}
              </span>
            </p>
          ))}
        </div>
        <div className="mt-5 text-justify">
          <h3 className="text-white font-bold text-[24px] mb-2 text-center">{name}</h3>
          <p className="text-secondary text-[14px]">{description}</p>
        </div>

        
        <div className="w-full flex justify-center items-center mt-6 ">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            
            <span>View</span>
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}> My Work </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          varient={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-5xl text-justify leading-[30px] "
        >
          Below are some of my project which might be viewed publicly. Most are
          my project are live project. If you need more about any project or
          want to know about me with regards to my projects. The contact form is
          available below or you can visit my Github page above. Also, the
          projects are mostly Web Application project. I will make available my
          DevOps project soon for interested persons.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
