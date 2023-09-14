import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FocusCard from "./FocusCard";
import { cardList } from "@/data/focusCards";
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
