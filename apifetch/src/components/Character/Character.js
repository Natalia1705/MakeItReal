import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => resp.json())
      .then((data) => setCharacter(data));
  }, [id]);

  return (
    <div>
      <img src={character.image} alt="character" />
      <p>
        <strong>{character.name}</strong>
      </p>
      <p>
        Status: <span>{character.status}</span>
      </p>
      <p>
        Species: <span>{character.species}</span>
      </p>
      <p>
        Gender: <span>{character.gender}</span>
      </p>
    </div>
  );
};

export default Character;
