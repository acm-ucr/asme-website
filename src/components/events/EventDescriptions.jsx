"use client";

import React from "react";
import { motion } from "framer-motion";
import EventDescription from "./EventDescription";
import UpcomingEvents from "./UpcomingEvents";

const Events = [
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "General Meeting",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "Social",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "Other Meeting",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
    location: "Room 123",
    type: "Social",
    time: "12:00 pm - 2:00 pm",
    date: "3.23.2023",
  },
];

const EventDescriptions = () => {
  return (
    <div className="w-full flex-col flex">
      <UpcomingEvents />
      <motion.div className="self-center w-9/12">
        {Events.map((event, index) => (
          <motion.div
            initial={{ x: 8, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={index}
          >
            <EventDescription event={event} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default EventDescriptions;
