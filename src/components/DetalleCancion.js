import React, { useState, useEffect } from "react";
import axios from "axios";

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
      return <p>jujjuju</p>;
    } catch (error) {
      console.log(error);
    }

    //  return getFonograma(idFonograma);
  };

  useEffect(() => {
    getFonograma(idFonograma);
  }, []);

  const { artista, album, imagen, nombre, categoria } = fonograma;

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
          Categoria <span className="badge">{categoria}</span>
        </p>
      <button><a href="/">Back</a></button>
      </div>
      <img className="detail-image" src={imagen}></img>
    </div>
  );
}
