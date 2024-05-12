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
          className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] text-justify whitespace-pre-line"
        >
          A versatile and dedicated professional with over 9+ years of diverse
          technical background encompassing Node.js Full Stack Development,
          Zabbix Monitoring, DevOps practices, Network Engineering, and
          Automation Engineering.
          <ul className="list-disc ml-6 my-2">
            <li>
              <span className="font-bold text-[18px] underline">
                Node.js Full Stack Development
              </span>
              : Proficient in building scalable web applications (cloud /
              on-premises) using Node.js, Express.js, and popular front-end
              frameworks like React.js and Next.js, collaborating with UI/UX
              engineers on Figma. Experienced in working with SQL and NoSQL
              databases such as MySQL, MongoDB and PostgreSQL, and implementing
              RESTful APIs and microservices and deployment on cloud and shared
              domain considering security with OWASP recommendation.
            </li>

            <li>
              <span className="font-bold text-[18px] underline">
                Zabbix Professional
              </span>
              : Expert in deploying and managing Zabbix monitoring solutions for
              large-scale IT environments. Skilled in configuring Zabbix
              proxies, creating custom templates, and setting up advanced
              visualizations and alerting systems.
            </li>

            <li>
              <span className="font-bold text-[18px] underline">
                DevOps Engineer
              </span>
              : Strong experience in implementing CI/CD process using tools like
              Jenkins, GitLab CI / Workflow, and Travis CI. Proficient in
              containerization and orchestration technologies like Docker and
              Kubernetes, monitoring deployements using Zabbix and New Relic and
              infrastructure as code (IaC) tools such as Terraform and Ansible
              with cloud provider - AWS.
            </li>

            <li>
              <span className="font-bold text-[18px] underline">
                Network Engineer
              </span>
              : Solid understanding of network protocols, LAN/WAN, TCP/IP, and
              VPN/Firewall configuration. Experienced in troubleshooting network
              issues, configuring routers and switches, and managing network
              security measures.
            </li>
            <li>
              <span className="font-bold text-[18px] underline">
                Automation Engineer
              </span>
              : Proficient in automating repetitive tasks and processes to
              improve efficiency and reliability. Experienced in scripting
              languages like Bash, and automation tools like Jenkins and
              Ansible.
            </li>
          </ul>
          Throughout my career, I have demonstrated the ability to learn new
          technologies quickly, work collaboratively in team settings, and lead
          projects to successful completion. I am passionate about leveraging
          technology to solve complex problems and drive business success.
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
