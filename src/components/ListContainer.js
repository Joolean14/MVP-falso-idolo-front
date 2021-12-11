import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListContainer() {
  const [fonogramas, setFonogramas] = useState([]);

  const getFonogramas = async () => {
    try {
      const { data } = await axios.get(
        "https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas"
      );
      console.log(data);
      setFonogramas(data.fonos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFonogramas();
  }, []);

  const goDetail = ({ currentTarget }) => {
    console.log(currentTarget.id);
    localStorage.setItem("id", currentTarget.id);
  };

  const artistsArray = [];

  for (let x of fonogramas) {
    if (!artistsArray.includes(x.artista)) {
      artistsArray.push(x.artista.toUpperCase());
    }

  }

  const filterArtist = async (artista) => {
    try {
      const { data } = await axios.get(
        `https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas/artistas/${artista}`
      );
      // setFonogramas(data.fonos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="filter-container">
        {artistsArray.map((artista) => {
          return <button onClick={ filterArtist }key={artista}>{artista}</button>;
        })}
        <button>All</button>
      </div>
      <div className="list-container">
        {fonogramas.map((fonograma) => {
          const { nombre, imagen, artista, _id: id } = fonograma;
          return (
            <div key={id} id={id} onClick={goDetail}>
              <a className="card-anchor" href="/detail" target="_blank">
                <div className="card">
                  <div className="img-container">
                    <img className="card-img" src={imagen} alt={nombre}></img>
                  </div>
                  <div className="card-text-container">
                    <h3 className="card-name-text">{nombre}</h3>
                    <h2 className="card-artist-text">{artista}</h2>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
