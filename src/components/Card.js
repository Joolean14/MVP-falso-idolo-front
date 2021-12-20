import React, { useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Card({ id, nombre, artista, imagen, goDetail }) {
  const [audioStream, setPlay] = useState(false);
  return (
    <div className="card" id={id} onClick={goDetail}>
      <div className="img-container">
        <img className="card-img" src={imagen} alt={nombre}></img>
      </div>
      <div className="card-info-container">
        <div className="card-text-container">
          <small className="card-artist-text">{artista}</small>
          <h5 className="card-name-text">{nombre}</h5>
        </div>
        <div className="audio-details-container">
          {audioStream ? (
            <AiFillPauseCircle
              className="audio-player"
              onClick={(e) => {
                e.preventDefault();
                setPlay(!audioStream);
              }}
            />
          ) : (
            <AiFillPlayCircle
              className="audio-player"
              onClick={(e) => {
                e.preventDefault();
                setPlay(!audioStream);
              }}
            />
          )}
          <Link to="/detail">Ver detalles</Link>
          {audioStream && (
            <audio autoPlay>
              <source
                src="https://docs.google.com/uc?export=open&id=1-KwYEN79P2kzfDXmz72hDPYFrCro_5g8"
                type="audio/mp3"
              />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}
