import { useState, useEffect } from "react";

export const FilterBtns = ({ fonogramas, filterByArtist }) => {
  const [artists] = useState([
    "Todos",
    ...new Set(fonogramas.map((item) => item.artista)),
  ]);

  return (
    <div className="filter-container">
      <h3 className="artists-title">Artistas</h3>
      {artists.map((artista, index) => {
        return (
          <button
            key={index}
            className="btn filter-artists-btn"
            onClick={() => {
              filterByArtist(artista);
            }}
          >
            {artista}
          </button>
        );
      })}
    </div>
  );
};
