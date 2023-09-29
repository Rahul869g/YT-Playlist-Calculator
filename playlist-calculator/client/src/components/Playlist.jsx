import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import PlaylistText from "./PlaylistText";
import useContent from "../hooks/useContent";

const Playlist = () => {
  const { data } = useContent();
  console.log("Playlist", data);
  const { title, numberOfVideos, hours, minutes, seconds } = data;

  // Function to calculate duration at a given speed factor
  const calculateDuration = (hours, minutes, seconds, speedFactor) => {
    // Calculate the total duration in seconds
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Calculate the new duration in seconds at the specified speed factor
    const newDuration = totalSeconds / speedFactor;

    // Convert the new duration back to hours, minutes, and seconds
    const newHours = Math.floor(newDuration / 3600);
    const newMinutes = Math.floor((newDuration % 3600) / 60);
    const newSeconds = Math.floor(newDuration % 60);

    return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
  };

  // Calculate durations at different speeds
  const normalSpeed = { hours, minutes, seconds };
  const speed125x = calculateDuration(hours, minutes, seconds, 1.25);
  const speed15x = calculateDuration(hours, minutes, seconds, 1.5);
  const speed175x = calculateDuration(hours, minutes, seconds, 1.75);
  const speed2x = calculateDuration(hours, minutes, seconds, 2);

  return (
    <>
      <motion.div
        className="max-w-auto mx-auto lg:mt-10 mt-5  rounded-lg text-xl md:text-2xl font-semibold text-white mb-2"
        initial={{ opacity: 0, y: -50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties when component enters
        transition={{ duration: 1 }} // Animation duration
      >
        <div>
          <span>Title : </span>
          <span>{title}</span>
        </div>
        <div className="mb-5">
          <span>No. of videos : </span>
          <span>{numberOfVideos}</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties when component enters
        transition={{ duration: 1 }} // Animation duration
      >
        <PlaylistText
          title={"Total length of playlist"}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <PlaylistText title={"At 1.25x speed"} {...speed125x} />
        <PlaylistText title={"At 1.5x speed"} {...speed15x} />
        <PlaylistText title={"At 1.75x speed"} {...speed175x} />
        <PlaylistText title={"At 2x speed"} {...speed2x} />
      </motion.div>
    </>
  );
};

export default Playlist;
