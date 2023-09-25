import React from "react";

const PlaylistText = ({ title, hours, minutes, seconds }) => {
  return (
    <div className="max-w-auto  mx-auto mt-10 p-4 rounded-lg  text-xl md:text-2xl font-semibold text-white mb-4">
      <span>{title}</span>
      <span>
        {hours > 0 ? `${hours} hours` : ""} {minutes} minutes{" "}
        {seconds > 0 ? `${seconds} seconds` : ""}
      </span>
    </div>
  );
};

export default PlaylistText;
