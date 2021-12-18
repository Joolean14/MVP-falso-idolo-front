import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DetalleCancion() {
  const [fonograma, setFonograma] = useState({});

  const idFonograma = localStorage.getItem("id");

  const getFonograma = async (id) => {
    try {
      const { data } = await axios.get(
        `https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas/single/${id}`
      );
      console.log(data);
      setFonograma(data.fono);
      return;
    } catch (error) {
      console.log(error);
    }

    //  return getFonograma(idFonograma);
  };

  useEffect(() => {
    getFonograma(idFonograma);
  }, []);

  const { artista, album, imagen, nombre, categoria, moods } = fonograma;


  return (
    <div className="detail-container">
      <div>
        <p>
          Nombre <span className="detail-data">{nombre}</span>
        </p>
        <p>
          Artista <span className="detail-data">{artista}</span>
        </p>
        <p>
          Album <span className="detail-data">{album}</span>
        </p>
        <p>
          Categoria <span className="detail-data">{categoria}</span>
        </p>
        <p>
          Categoria <span className={`badge ${moods}-badge`}>{moods}</span>
        </p>
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
      <img className="detail-image" src={imagen} alt={artista}></img>
    </div>
  );
}
