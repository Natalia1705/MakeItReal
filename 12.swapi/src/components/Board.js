import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CharacterList } from "./CharacterList/CharacterList";

export const Board = () => {
  const { pagination } = useParams();
  const navigate = useNavigate();

  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(Number(pagination) || 1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then(({ info, results }) => {
        setInfo(info);
        setCharacters(results);
      });
    navigate(`/characters/${page}`);
  }, [page, navigate]);

  const handlePrevious = () => {
    if (info.prev) {
      fetch(info.prev)
        .then((response) => response.json())
        .then(({ info, results }) => {
          setInfo(info);
          setCharacters(results);
        });
    }

    setPage(page - 1);
    navigate(`/characters/${page}`);
  };

  const handleNext = () => {
    if (info.next) {
      fetch(info.next)
        .then((response) => response.json())
        .then(({ info, results }) => {
          setInfo(info);
          setCharacters(results);
        });
    }

    setPage(page + 1);
    navigate(`/characters/${page}`);
  };

  return (
    <div className="App">
      {characters && <CharacterList characters={characters} />}
      <div className="button-container">
        <button
          className="button"
          onClick={handlePrevious}
          disabled={info.prev ? false : true}
        >
          Anterior
        </button>
        <button
          className="button"
          onClick={handleNext}
          disabled={info.next ? false : true}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
