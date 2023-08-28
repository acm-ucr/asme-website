import React from "react";
import { FaGears } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { Row, Col } from "react-bootstrap";
import FocusCard from "./FocusCard";
const iconStyle = "text-white text-4xl";
const cardList = [
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
const FocusCards = () => {
  return (
    <Row className="p-4 w-3/4 my-12 font-poppins">
      {cardList.map((card, index) => (
        <Col sm={12} md={4} className="p-3 md:p-2 lg:p-3" key={index}>
          <FocusCard
            name={card.name}
            text={card.text}
            icon={card.icon}
            bgColor={card.bgColor}
          />
        </Col>
      ))}
    </Row>
  );
};

export default FocusCards;
