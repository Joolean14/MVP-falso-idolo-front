import React, { useState, useEffect, useRef } from "react";
import { FilterBtns } from "./FilterBtns";
import Card from "./Card";
import axios from "axios";

export default function ListContainer() {
  //States.
  const [isLoading, setIsLoading] = useState(true);
  const [fonogramas, setFonogramas] = useState([]);
  const [artistas, setArtistas] = useState([]);
  const initialFonogramas = useRef([]);

  const [currentTrackID, setCurrentTrackID] = useState("");
  const previousTrackID = useRef("");

  const getFonogramas = async () => {
    try {
      const { data } = await axios.get(
        "https://mvp-falso-idolo-api.herokuapp.com/api/v1/fonogramas"
      );
      console.log(data);
      setFonogramas(data.fonos);
      setArtistas([
        "Todos",
        ...new Set(data.fonos.map((item) => item.artista)),
      ]);
      initialFonogramas.current = data.fonos;
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getFonogramas();
  }, []);

  useEffect(() => {
    previousTrackID.current = currentTrackID;
  }, [currentTrackID]);

  //Event handlers.
  const goDetail = (e) => {
    const { target } = e;
    const cardId = target.parentElement.parentElement.parentElement.id;
    localStorage.setItem("id", cardId);
  };

  const filterByArtist = (artista) => {
    if (artista === "Todos") {
      setFonogramas(initialFonogramas.current);
      return;
    }

    const filteredArtists = initialFonogramas.current.filter((fonograma) => {
      return fonograma.artista === artista;
    });
    setFonogramas(filteredArtists);
  };

  const handlePlay = (e) => {
    const audioElement = e.currentTarget
      .closest(".card")
      .querySelector("audio");

    if (
      audioElement.id !== previousTrackID.current &&
      previousTrackID.current !== ""
    ) {
      const currentAudio = document.getElementById(previousTrackID.current);
      if (currentAudio) currentAudio.pause();
    }

    if (audioElement.readyState !== 4) {
      audioElement.load();
    }

    setCurrentTrackID(audioElement.id);
    audioElement.play();
  };

  const handlePause = (e) => {
    const audioElement = e.currentTarget
      .closest(".card")
      .querySelector("audio");
    audioElement.pause();
    setCurrentTrackID("");
  };

  return (
    <>
      {!isLoading && (
        <FilterBtns artistas={artistas} filterByArtist={filterByArtist} />
      )}
      <div className="list-container">
        {fonogramas.map((fonograma) => {
          const { _id: id } = fonograma;
          return (
            <Card
              key={id}
              {...fonograma}
              currentTrackID={currentTrackID}
              goDetail={goDetail}
              handlePlay={handlePlay}
              handlePause={handlePause}
            />
          );
        })}
      </div>
      {isLoading && <div className="loading"></div>};
    </>
  );
}
