import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { motion } from "framer-motion";

const transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 1,
};
const animation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Landing = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="relative bg-header bg-cover py-3 h-[400px] md:h-[700px] w-full justify-end flex items-stretch"
    >
      <motion.div
        variants={animation}
        transition={{ ...transition, delay: 0 }}
        className="absolute bottom-0 left-5 md:left-10 bg-white w-1/3 my-4 shadow-[1rem_-1rem_0_0] shadow-asme-blue-400 z-10"
      >
        <Image src={logo} alt="logo" />
      </motion.div>
      <div className="flex flex-col items-end text-white font-poppins bg-asme-transparentBlue w-11/12 md:w-2/3 mt-24 md:mt-32 mb-12 pr-4 justify-center">
        <motion.p
          variants={animation}
          transition={{ ...transition, delay: 0.3 }}
          className="text-right font-bold text-lg md:text-4xl w-11/12 border-r-8 border-asme-blue-100 m-0 pr-2"
        >
          American Society of Mechanical Engineers at UCR (ASME)
        </motion.p>
        <motion.div
          variants={animation}
          transition={{ ...transition, delay: 0.6 }}
          className="bg-white w-1/2 h-1 my-2"
        />
        <motion.p
          variants={animation}
          transition={{ ...transition, delay: 0.9 }}
          className="text-right text-sm md:text-2xl m-0"
        >
          ASME seeks to develop well-rounded engineers at UC Riverside that are
          experienced and ready for the real-world
        </motion.p>
        <motion.div
          variants={animation}
          transition={{ ...transition, delay: 1.2 }}
          className="mt-4"
        >
          <Link
            href="/events"
            className="no-underline font-poppins border-white border-2 border-solid px-4 md:py-2 text-sm md:text-lg hover:bg-white/50 text-white hover:text-asme-blue-400 hover:scale-110 transition duration-200 ease-in-out"
          >
            Join Us
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
