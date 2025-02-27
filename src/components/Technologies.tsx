import { RiReactjsLine } from "react-icons/ri";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiGithub,
  SiJest,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologías
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiExpress className="text-7xl"></SiExpress>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700"></BiLogoPostgresql>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <SiTypescript className="text-7xl text-blue-700"></SiTypescript>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiPrisma className="text-7xl "></SiPrisma>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <SiJest className="text-7xl text-red-700"></SiJest>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <SiBootstrap className="text-7xl text-violet-700"></SiBootstrap>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-sky-700"></SiTailwindcss>
        </motion.div>
        <motion.div initial="initial"
          animate="animate"
          variants={iconVariants(2)}
           className="p-4">
          <SiGit className="text-7xl text-orange-700"></SiGit>
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(2)} className="p-4">
          <SiGithub className="text-7xl text-white-700"></SiGithub>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
