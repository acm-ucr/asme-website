import { FaGears } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
const iconStyle = "text-white text-4xl";
export const cardList = [
  {
    name: "Technical",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: <FaGears className={iconStyle} />,
    bgColor: "bg-asme-blue-200",
  },
  {
    name: "Social",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: <GoPeople className={iconStyle} />,
    bgColor: "bg-asme-blue-300",
  },
  {
    name: "Professional",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: <RiComputerLine className={iconStyle} />,
    bgColor: "bg-asme-blue-400",
  },
];
