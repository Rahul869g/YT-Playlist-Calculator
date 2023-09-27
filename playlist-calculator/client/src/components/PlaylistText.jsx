import React from "react";

const PlaylistText = ({ title, hours, minutes, seconds }) => {
  return (
    <div className="max-w-auto  mx-auto rounded-lg  text-base md:text-xl font-semibold text-white ">
      <span>{title} : </span>
      <span>
        {hours > 0 ? `${hours} hours` : ""} {", "}
        {minutes} minutes {seconds > 0 ? `, ${seconds} seconds` : ""}
      </span>
    </div>
  );
};

export default PlaylistText;
