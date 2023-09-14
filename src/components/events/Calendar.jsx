"use client";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import Modal from "./Modal.jsx";
import moment from "moment";

const localizer = momentLocalizer(moment);

const CalendarEvent = ({ events }) => {
  const [modalEvent, setModalEvent] = useState(null);

  return (
    <section className="w-full flex justify-center items-center flex-col mt-[2vh] text-base md:text-xl">
      <div className="w-11/12 md:w-10/12 flex justify-center items-center text-base md:text-xl">
        <div className="h-[90vh] md:h-[110vh] w-full relative text-base md:text-xl mb-24">
          <Calendar
            className="font-poppins w-full m-0 p-0 text-base md:text-xl"
            events={events}
            localizer={localizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
            }}
            eventPropGetter={() => {
              return {
                className: `p-0 !active:ring-0 !focus:outline-0 !bg-transparent`,
              };
            }}
            onSelectEvent={(event) => {
              setModalEvent(event);
            }}
            dayPropGetter={(event) => {
              const bg =
                new Date(event).toLocaleDateString() ==
                new Date().toLocaleDateString()
                  ? "!bg-opacity-40 !bg-asme-textshadow"
                  : "!bg-transparent";
              return {
                className: `${bg}`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          />
        </div>
        <Modal event={modalEvent} setState={setModalEvent} />
      </div>
    </section>
  );
};

export default CalendarEvent;