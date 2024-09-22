import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { PlayerContext } from "../context/PlayerContext.jsx";

const Player = () => {
  const {
    seekBar,
    playerStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return track ? (
    <div>
      <div className="h-[10%] bg-black flex justify-between items-center text-white px-6 pt-4">
        <div className="hidden lg:flex gap-4 min-w-[18%]">
          <img className="w-12" src={track.image} alt="" />
          <div className="">
            <p>{track.name}</p>
            <p>{track.desc.slice(0, 25)}</p>
          </div>
        </div>

        <div className="gap-1 w-[60%] max-w-[800px] m-auto">
          <div className="w-[21%] m-auto flex gap-5 cursor-pointer">
            <img className="w-4" src={assets.shuffle_icon} alt="" />
            <img
              onClick={previous}
              className="w-4"
              src={assets.prev_icon}
              alt=""
            />

            {playerStatus ? (
              <img
                onClick={pause}
                className="w-4"
                src={assets.pause_icon}
                alt=""
              />
            ) : (
              <img
                onClick={play}
                className="w-4"
                src={assets.play_icon}
                alt=""
              />
            )}

            <img onClick={next} className="w-4" src={assets.next_icon} alt="" />
            <img className="w-4" src={assets.loop_icon} alt="" />
          </div>

          <div className="items-center flex flex-end gap-4">
            {time.currentTime.second < 10 ? (
              <p>
                {time.currentTime.minute}:0{time.currentTime.second}
              </p>
            ) : (
              <p>
                {time.currentTime.minute}:{time.currentTime.second}
              </p>
            )}

            <progress
              onClick={seekSong}
              ref={seekBar}
              className={"h-1 w-full cursor-pointer" + `${seekBar}`}
              id="playbar"
              value="`hello`"
              max="100"
            ></progress>
            {time.totalTime.second < 10 ? (
              <p>
                {time.totalTime.minute}:0{time.totalTime.second}
              </p>
            ) : (
              <p>
                {time.totalTime.minute}:{time.totalTime.second}
              </p>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 opacity-75 cursor-pointer">
          <img className="w-4" src={assets.play_icon} alt="" />
          <img className="w-4" src={assets.mic_icon} alt="" />
          <img className="w-4" src={assets.queue_icon} alt="" />
          <img className="w-4" src={assets.speaker_icon} alt="" />
          <img className="w-4" src={assets.volume_icon} alt="" />
          <div className="w-20 bg-slate-50 h-1 rounded"></div>
          <img className="w-4" src={assets.mini_player_icon} alt="" />
          <img className="w-4" src={assets.zoom_icon} alt="" />
        </div>
      </div>
    </div>
  ) : null;
};

export default Player;
