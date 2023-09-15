import { FaGears } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
const iconStyle = "text-white text-4xl";
export const cardList = [
  {
    name: "Technical",
    text: "Work on exciting, real-world projects with fellow members. ",
    icon: <FaGears className={iconStyle} />,
    bgColor: "bg-asme-blue-200",
  },
  {
    name: "Social",
    text: "Forge lasting friendships with fellow members who share your values and interests.",
    icon: <GoPeople className={iconStyle} />,
    bgColor: "bg-asme-blue-300",
  },
  {
    name: "Professional",
    text: "Boost your resume and increase your chances of getting internships with the skills and connections.",
    icon: <RiComputerLine className={iconStyle} />,
    bgColor: "bg-asme-blue-400",
  },
];
