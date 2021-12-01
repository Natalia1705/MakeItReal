import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Principal() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setPages(1);
        return data.results;
      })
      .then((rta) => setCharacters(rta));
  }, []);

  const nextHandler = () => {
    setPages(pages + 1);
    fetch(`https://rickandmortyapi.com/api/character/?page=${pages + 1}`)
      .then((res) => res.json())
      .then((data) => data.results)
      .then((rta) => setCharacters(rta));
  };

  const prevHandler = () => {
    setPages(pages - 1);
    fetch(`https://rickandmortyapi.com/api/character/?page=${pages - 1}`)
      .then((res) => res.json())
      .then((data) => data.results)
      .then((rta) => setCharacters(rta));
  };

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <div className="card">
        <ul>
          {characters.map((e) => (
            <li>
              <Link to={`/${e.id}`}>
                <p>{e.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p clasName="pagina">Página {pages}</p>
      <footer>
        {pages > 1 && <button onClick={prevHandler}>Atras</button>}
        {pages !== 42 && <button onClick={nextHandler}>Adelante</button>}
      </footer>
    </>
  );
}
export default Principal;
