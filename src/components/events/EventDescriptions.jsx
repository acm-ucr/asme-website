"use client"; // probably is needed, runtime explodes when you don't "use client"

import { motion } from "framer-motion";
import EventDescription from "./EventDescription";
import UpcomingEvents from "./UpcomingEvents";

const EventDescriptions = ({ events }) => {
  return (
    <div className="w-full flex-col flex">
      <UpcomingEvents />
      <motion.div className="self-center w-9/12">
        {events.length > 0 ? (
          events.map((event, index) => (
            <motion.div
              initial={{ x: 8, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={index}
            >
              <EventDescription event={event} />
            </motion.div>
          ))
        ) : (
          <p className="font-poppins text-lg w-full text-center font-bold text-asme-blue-300">
            no events
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default EventDescriptions;
