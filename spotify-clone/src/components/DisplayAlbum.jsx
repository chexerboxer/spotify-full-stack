import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar.jsx";
import { useParams } from "react-router-dom";
// import { albumsData, assets, songsData } from '../assets/assets.js';
import { assets } from "../assets/assets.js";
import { PlayerContext } from "../context/PlayerContext.jsx";

const DisplayAlbum = ({ album }) => {
  const { id } = useParams();
  // const albumData = albumsData[id];
  const [albumData, setAlbumData] = useState(null);
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    albumsData.map((item) => {
      if (item._id == id) {
        setAlbumData(item);
      }
    });
  }, []);

  return albumData ? (
    <div>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 m:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="flex mt-1">
            <div className="pr-2">
              <img
                className="inline-block w-5"
                src={assets.spotify_logo}
                alt=""
              />
            </div>
            <b> Spotify </b>• 1,000,000 beers • <b>50 songs,</b>• about 2 hr 30
            min
          </p>
        </div>
      </div>

      <div className="flex items-left sm:grid-col-3 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <div className="w-[90%] grid grid-cols-3">
          <p>
            <b className="mr-4">#</b>Title
          </p>
          <p>Album</p>
          <p className="hidden sm:block">Date Added</p>
        </div>
        <img className="grid m-auto w-4 " src={assets.clock_icon} alt="" />
      </div>

      <hr />
      {songsData
        .filter((item) => item.album == album.name)
        .map((item, index) => (
          <div
            onClick={() => playWithId(item._id)}
            key={index}
            className="flex gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          >
            <div className="w-[91%] grid grid-cols-3 sm:grid-cols-3">
              <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img className="inline w-10 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              <p className="text-[15px]">{albumData.name}</p>
              <p className="text-[15px] hidden sm:block">5 days ago</p>
            </div>
            <p className="grid w-7 text-[15px] m-auto">{item.duration}</p>
          </div>
        ))}
    </div>
  ) : null;
};

export default DisplayAlbum;
