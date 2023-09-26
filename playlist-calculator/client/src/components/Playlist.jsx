import React from "react";
import PlaylistText from "./PlaylistText";

const Playlist = () => {
  const title = "Playlist";
  const totalVideos = 100;
  return (
    <>
      <div className="max-w-auto  mx-auto mt-5 p-4 rounded-lg  text-xl md:text-2xl font-semibold text-white mb-2">
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
        hours={5}
        minutes={5}
        seconds={5}
      />
      <PlaylistText
        title={"At 1.25x speed"}
        hours={4}
        minutes={4}
        seconds={4}
      />
      <PlaylistText title={"At 1.5x speed"} hours={3} minutes={3} seconds={3} />
      <PlaylistText
        title={"At 1.75x speed"}
        hours={2}
        minutes={2}
        seconds={2}
      />
      <PlaylistText title={"At 2x speed"} hours={1} minutes={1} seconds={1} />
    </>
  );
};

export default Playlist;
