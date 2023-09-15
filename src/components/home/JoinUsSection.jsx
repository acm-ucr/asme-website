import JoinCards from "./JoinCards.jsx";
import { motion } from "framer-motion";

const JoinUsSection = () => {
  return (
    <>
      <div className="w-1/2 md:w-[30%] relative z-0 self-start ml-5">
        <div className="bg-asme-blue-100 w-full h-20 shadow-[10px_-10px_0_0] shadow-asme-blue-200 relative" />
        <div className="flex">
          <div className="bg-asme-blue-200 w-2 h-12 inline-block left-0 top-0 mr-1" />
          <div className="bg-asme-blue-400 w-2 h-8 inline-block left-3 top-0 mr-1" />
          <div className="bg-asme-blue-500 w-2 h-14inline-block left-6 top-0 mr-1" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 1,
          }}
          className="bg-white absolute left-0 top-5 text-asme-blue-400 font-poppins font-bold text-lg md:text-2xl"
        >
          <p className="px-16 my-0 py-2">Join Us</p>
        </motion.div>
      </div>
      <JoinCards />
    </>
  );
};

export default JoinUsSection;
