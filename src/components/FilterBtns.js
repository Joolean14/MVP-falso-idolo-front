import { useState, useEffect } from "react";

export const FilterBtns = ({ artistas, filterByArtist }) => {
  return (
    <div className="filter-container">
      <h3 className="artists-title">Artistas</h3>
      {artistas.map((artista, index) => {
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
