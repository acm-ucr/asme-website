import React from "react";
import { joinList } from "@/data/joinCards";
import JoinCard from "./JoinCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const JoinCards = () => {
  return (
    <Row className="w-[95%] lg:w-4/5 relative z-10">
      {joinList.map((join, index) => (
        <Col xs={6} md={3} className="mb-4 lg:p-3" key={index}>
          <JoinCard
            text={join.text}
            icon={join.icon}
            link={join.link}
            hover={join.hover}
            color={join.color}
          />
        </Col>
      ))}
    </Row>
  );
};

export default JoinCards;
