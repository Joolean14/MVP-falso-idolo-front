import React, { useEffect } from "react";
import axios from "axios";

export default function DetalleCancion() {
  const idFonograma = localStorage.getItem("id");

  const getFonograma = async (id) => {
    try {
      const { data } = await axios.get(
        `https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas/${id}`
      );
      return <p>jujjuju</p>;
    } catch (error) {
      console.log(error);
    }

    //  return getFonograma(idFonograma);
  };
  return (
    <div className="detail-container">
      {/* {getFonograma(idFonograma)} */}
      <div>
        <p>
          Artista <span className="detail-data">Lorem</span>
        </p>
        <p>
          Album <span className="detail-data">Lorem</span>
        </p>
        <p>
          Sayco <span className="detail-data">Lorem</span>
        </p>
        <p>
          Acinpro <span className="detail-data">Lorem</span>
        </p>

        <p>
          Categoria <span className="badge">Lorem</span>
        </p>
      </div>
      <img className="detail-image" src="https://picsum.photos/400?random=93"></img>
      {/* <p>{localStorage.getItem("id")}</p> */}
      {/* <p>{artista}</p>
          <p>{album}</p>
          <p>{nombre}</p>
          <p>{categoria}</p>
          <p>{sayco}</p>
          <p>{acinpro}</p>
          <img src={imagen}></img>             */}
    </div>
  );

  //   const assignFonograma = async () => {
  //     fonograma = await getFonograma(idFonograma);
  //   };
  //   assignFonograma();
  //   const { artista, album, nombre, categoria, sayco, acinpro, imagen } =
  //     fonograma.fono;
  //   console.log("Soy artista", artista);
}
