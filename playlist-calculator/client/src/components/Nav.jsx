import React from "react";
import Logo from "../assets/playlistlogo.svg";
import github from "../assets/github-mark.png";

const Nav = () => {
  return (
    <div className="bg-black p-10 px-32 flex justify-between items-center">
      <img className="h-[4.5%] w-[4.5%] " src={Logo} alt="" srcset="" />
      <a
        href="https://github.com/Rahul869g/YT-Playlist-Calculator"
        target="_blank"
        rel="noopener noreferrer"
        className="h-[3%] w-[3%] "
      >
        <img src={github} alt="" />
      </a>
    </div>
  );
};

export default Nav;
