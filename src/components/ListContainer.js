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
              href={`https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas/${id}`}
            >
          <div key={id} className="card">
              <img src={imagen} alt={nombre}></img>
              <h2>{nombre}</h2>
              <h3>{artista}</h3>
          </div>
            </a>
        );
      })}
    </div>
  );
}
