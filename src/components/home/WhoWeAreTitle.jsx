import { FaGear } from "react-icons/fa6";
import { motion } from "framer-motion";

const WhoWeAreTitle = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-40 m-0">
        <div className="bg-asme-blue-200 w-32 h-3" />
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
          className="bg-white absolute mt-2 mx-12 md:mx-28 px-4 text-asme-blue-400 font-poppins font-bold p-1 text-lg md:text-2xl inline-flex items-center"
        >
          Who We Are
          <FaGear className="inline-flex ml-2 text-asme-blue-100" />
        </motion.div>
        <div className="bg-asme-blue-100 w-40 h-14 md:h-32"></div>
      </div>
      <div className="w-40 h-12 md:h-32 relative">
        <div className="bg-asme-blue-200 w-2 h-2/3 inline-block right-6 top-0 absolute "></div>
        <div className="bg-asme-blue-400 w-2 h-1/2 inline-block right-3 top-0 absolute "></div>
        <div className="bg-asme-blue-500 w-2 h-full inline-block right-0 top-0 absolute "></div>
      </div>
    </div>
  );
};

export default WhoWeAreTitle;
