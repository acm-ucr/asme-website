import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import filters from "@/data/filters";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-col md:flex-row">
      <div className="md:w-1/3 flex gap-3">
        <p className="m-0">{monthNames[event.date.getMonth()]}</p>
        <p className="m-0">{event.date.getFullYear()}</p>
      </div>
      <Row className="w-2/3 m-0 p-0 flex justify-end justify-items-center items-center ">
        {filters.map((filter, index) => {
          return (
            <Col key={index} xs={12} md={3} className="m-0 p-1">
              <div
                className={`w-full ${filter.color} whitespace-nowrap p-1 text-center text-xs md:text-lg rounded-sm flex justify-center`}
              >
                {filter.topic}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CustomToolbar;
