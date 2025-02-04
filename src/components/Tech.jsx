import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion"; 
import { styles } from "../styles"; 

const Tech = () => {
  return (
    <>
      {/* Motion Wrapper for Heading */}
      <motion.div variants={textVariant()} animate="visible">
        <p className={styles.sectionSubText}>Skills I Know</p>
        <h2 className={styles.sectionHeadText}>Languages.</h2>
      </motion.div>

      {/* Technology Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-8">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

// Try without SectionWrapper if issues persist
export default SectionWrapper(Tech, "");
