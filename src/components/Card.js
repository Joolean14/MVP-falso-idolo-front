import React, { useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Card({ id, nombre, artista, imagen, goDetail }) {
  const [audioStream, setPlay] = useState(false);
  return (
    <div id={id} onClick={goDetail}>
      <Link className="card-anchor" to="/detail">
        <div className="card">
          <div className="img-container">
            <img className="card-img" src={imagen} alt={nombre}></img>
          </div>
          <div className="card-text-container">
            <h3 className="card-name-text">{nombre}</h3>
            <h2 className="card-artist-text">{artista}</h2>
            <div>
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
              {audioStream && (
                <audio
                  src="https://docs.google.com/uc?export=download&id=0B98CDBxxfk-vUzMzamV6cmswY0RUT011b29RaFJUZkVSUzdB"
                  autoPlay
                ></audio>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}


