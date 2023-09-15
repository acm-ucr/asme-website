import { BsGearFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Title = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.7 }}
      className="w-fit border-b-4 border-asme-blue-400 my-5 md:my-10 flex items-center self-start"
    >
      <p className="text-asme-blue-400 text-lg lg:text-2xl font-bold mb-1 ml-3 md:ml-8">
        {title}
      </p>
      <BsGearFill className="text-asme-blue-100 text-lg md:text-xl lg:text-2xl ml-3" />
    </motion.div>
  );
};

export default Title;
