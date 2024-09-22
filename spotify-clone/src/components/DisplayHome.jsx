import React, { useContext } from "react";
import NavBar from "./NavBar.jsx";
import Album from "./Album.jsx";
// import { songsData } from '../assets/assets.js'
// import { albumsData } from '../assets/assets.js'
import Song from "./Song.jsx";
import { PlayerContext } from "../context/PlayerContext.jsx";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);

  // note .id --> ._id for mongoDB
  return (
    <div className="w-[100%]">
      <NavBar />
      {/* Featured */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Album
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item._id}
            />
          ))}
        </div>
      </div>

      {/* Biggest Hits */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">_</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <Song
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
