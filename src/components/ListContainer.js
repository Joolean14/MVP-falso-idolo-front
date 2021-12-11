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

  return (
    <div className="list-container">
      {fonogramas.map((fonograma) => {
        const { nombre, imagen, artista, _id: id } = fonograma;
        return (
            <a
                className="card-anchor"
            href="/detail"
          >
            <div key={id} className="card">
              <div className="img-container">
                <img className="card-img"src={imagen} alt={nombre}></img>
              </div>
              <div className="card-text-container">
                <h3 className="card-name-text">{nombre}</h3>
                <h2 className="card-artist-text">{artista}</h2>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
