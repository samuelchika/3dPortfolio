import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skills } from "../constants";
import { styles } from '../styles';
import { motion } from 'framer-motion';


const Tech = () => {

  const SkillsCard = ({skill}) => {
    return (
      <div className='xs:w-[250px] w-full'>
        <motion.div>
        <h4 className="text-bold text-left w-full"><skill.icon className="text-[#915eff] inline-block" /> &nbsp; <span className="text-secondary text-xl">{skill.title}</span> </h4> 
          <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="py-5 px-4 flex flex-col space-y-4 items-center min-h-[280px]"
          >
           
           { skill.details.map((techs, index) => (
            <span className="text-start w-full text-lg"><techs.icon className="text-secondary inline-block font-extrabold" /> &nbsp;{techs.tech}</span>
           ))}
          </div>
        </motion.div>
      </div>
    )
  }
  return (
    <div className="w-screen lg:max-w-[3840px]">
      <div className="w-full lg:w-[90%] mx-auto">
        <div className="block w-full ml-2">
        <p className={styles.sectionSubText}> Services I can offer</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-10  px-10 ">
        <div className="mt-10 w-full flex flex-wrap gap-10 ">
        
            { skills.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
        </div>
      </div>
      
      </div>
        
      
      
    </div>
  )
}

export default Tech