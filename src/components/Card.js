import React from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Card({
  _id: id,
  nombre,
  artista,
  imagen,
  currentTrackID,
  goDetail,
  handlePlay,
  handlePause,
}) {
  function handleTimeUpdate(e) {
    const { duration, currentTime } = e.target;

    const progressLine = e.currentTarget
      .closest(".card")
      .querySelector(".progress-line");

    const progressPercent = (currentTime / duration) * 100;
    progressLine.style.width = `${progressPercent}%`;
  }

  const setTimeOnClick = (e) => {
    const audioElement = e.currentTarget
      .closest(".card")
      .querySelector("audio");

    if (audioElement.readyState !== 4) {
      return;
    }

    const clickX = e.nativeEvent.offsetX;
    audioElement.currentTime =
      (clickX / e.currentTarget.clientWidth) * audioElement.duration;
  };



  return (
    <div className="card" id={id}>
      <div className="img-container">
        <img className="card-img" src={imagen} alt={nombre}></img>
      </div>
      <div className="card-info-container">
        <div className="card-text-container">
          <small className="card-artist-text">{artista}</small>
          <h5 className="card-name-text">{nombre}</h5>
        </div>
        <div className="audio-details-container">
          {`audio-${id}` === currentTrackID ? (
            <AiFillPauseCircle
              className="audio-player"
              onClick={(e) => {
                handlePause(e);
              }}
            />
          ) : (
            <AiFillPlayCircle
              className="audio-player"
              onClick={(e) => {
                handlePlay(e);
              }}
            />
          )}
          <Link to="/detail" target="_blank" onClick={goDetail}>
            Ver detalles
          </Link>

          <audio
            preload="none"
            id={`audio-${id}`}
            onTimeUpdate={handleTimeUpdate}
          >
            <source
              src="https://docs.google.com/uc?export=open&id=1-KwYEN79P2kzfDXmz72hDPYFrCro_5g8"
              type="audio/mp3"
            />
          </audio>


        </div>
      </div>
      <div
        className="progress-container"
        onClick={setTimeOnClick}
        id={`progress-container-${id}`}
      >
        <div className="progress-line" id={`progress-line-${id}`}></div>
      </div>
    </div>
  );
}
