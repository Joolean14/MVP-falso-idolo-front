import React, { useState, useEffect } from "react";
import { FilterBtns } from "./FilterBtns";
import Card from "./Card";
import axios from "axios";

export default function ListContainer() {
  //States.
  const [isLoading, setIsLoading] = useState(true);
  const [fonogramas, setFonogramas] = useState([]);

  const getFonogramas = async () => {
    try {
      const { data } = await axios.get(
        "https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas"
      );
      console.log(data);
      setFonogramas(data.fonos);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getFonogramas();
  }, []);

  //Event handlers.
  const goDetail = (e) => {
    const { target } = e;
    const cardId = target.parentElement.parentElement.parentElement.id;
    localStorage.setItem("id", cardId);
  };

  const filterByArtist = (artista) => {
    const filteredArtists = fonogramas.filter((fonograma) => {
      return fonograma.artista === artista;
    });
    setFonogramas(filteredArtists);
  };

  if (!isLoading) {
  }

  return (
    <>
      {!isLoading && (
        <FilterBtns fonogramas={fonogramas} filterByArtist={filterByArtist} />
      )}
      <div className="list-container">
        {fonogramas.map((fonograma) => {
          const { _id: id } = fonograma;
          return <Card key={id} {...fonograma} goDetail={goDetail} />;
        })}
      </div>
      {isLoading && <div className="loading"></div>};
    </>
  );
}
