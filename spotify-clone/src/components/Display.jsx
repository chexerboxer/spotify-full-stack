import React, { useContext, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome.jsx";
import DisplayAlbum from "./DisplayAlbum.jsx";
// import { albumsData } from '../assets/assets.js'
import { PlayerContext } from "../context/PlayerContext.jsx";

const Display = () => {
  const { albumsData } = useContext(PlayerContext);

  // change bg colour depending on album
  const displayRef = useRef(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  console.log(isAlbum);
  // const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  // const bgColor = albumsData[Number(albumId)].bgColor;
  const bgColor =
    isAlbum && albumsData.length > 0
      ? albumsData.find((x) => x._id == albumId).bgColor
      : "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212)`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      {albumsData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />}></Route>
          {/* <Route path="/album/:id" element={<DisplayAlbum/>}></Route> */}
          <Route
            path="/album/:id"
            element={
              <DisplayAlbum album={albumsData.find((x) => x._id == albumId)} />
            }
          ></Route>
        </Routes>
      ) : null}
    </div>
  );
};

export default Display;
