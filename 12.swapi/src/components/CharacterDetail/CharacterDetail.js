import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const { name, status, species, gender, location, image } = character;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => resp.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character.name) return <h1>Loading...</h1>;

  return (
    <div className="character-container">
      <div className="character">
        <div className="character__image">
          <img src={image} alt="" />
        </div>
        <div className="character__info">
          <h1 className="character__name">{name}</h1>
          <p className="character__status">
            Status: <span>{status}</span>
          </p>
          <p className="character__species">
            Species: <span>{species}</span>
          </p>
          <p className="character__gender">
            Gender: <span>{gender}</span>
          </p>
          <p className="character__location">
            Location: <span>{location.name}</span>
          </p>
        </div>
      </div>
      <Link to={-1} >
        Return
      </Link>
    </div>
  );
};
