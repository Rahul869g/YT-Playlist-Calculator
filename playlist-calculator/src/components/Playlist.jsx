import React from "react";
import PlaylistText from "./PlaylistText";

const Playlist = () => {
  const title = "Playlist";
  const totalVideos = 100;
  return (
    <>
      <div className="max-w-auto  mx-auto mt-10 p-4 rounded-lg  text-xl md:text-2xl font-semibold text-white mb-4">
        <div>
          <span>Title : </span>
          <span>{title}</span>
        </div>
        <div>
          <span>No. of videos : </span>
          <span>{totalVideos}</span>
        </div>
      </div>
      <PlaylistText
        title={"Total length of playlist"}
        hours={2}
        minutes={2}
        seconds={2}
      />
    </>
  );
};

export default Playlist;
