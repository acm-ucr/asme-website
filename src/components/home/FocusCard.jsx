import { motion } from "framer-motion";
const FocusCard = ({ name, text, icon, bgColor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.3 + index * 0.3,
      }}
      className={`flex flex-col justify-start aspect-square text-white ${bgColor} w-full py-3 aspect-square`}
    >
      <div className="flex justify-start items-start ml-2">
        {icon}
        <div className="border-b-4 border-white justify-end text-lg md:text-lg lg:text-xl leading-none font-bold flex items-end pr-8 md:pr-4 lg:pr-8 pl-4">
          {name}
        </div>
      </div>
      <div className="text-sm md:text-base lg:text-lg px-3 mt-4">{text}</div>
    </motion.div>
  );
};

export default FocusCard;
