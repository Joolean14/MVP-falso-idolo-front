import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

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

  return (
    <div>
      <div className="filter-container"></div>
      <div className="list-container">
        {fonogramas.map((fonograma) => {
          const { nombre, imagen, artista, _id: id } = fonograma;
          return (
            <Card key={id} {...fonograma} goDetail={goDetail} />
          );
        })}
      </div>
    </div>
  );
}
