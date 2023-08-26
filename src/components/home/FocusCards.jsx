import React from "react";
import { FaGears } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { Row, Col } from "react-bootstrap";
import FocusCard from "./FocusCard";
const cardList = [
  {
    name: "Technical",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: <FaGears size={65} />,
    bgColor: "bg-asme-blue-200",
  },
  {
    name: "Social",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: <GoPeople size={65} />,
    bgColor: "bg-asme-blue-300",
  },
  {
    name: "Professional",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: <RiComputerLine size={65} />,
    bgColor: "bg-asme-blue-400",
  },
];
const FocusCards = () => {
  return (
    <Row className="p-4 md:p-3 lg:p-4 w-full 2xl:p-0 2xl:w-2/3 my-12 font-poppins">
      {cardList.map((card, index) => (
        <Col xs={12} md={4} className="p-3 md:p-2 lg:p-3" key={index}>
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
