import { Link } from "react-router-dom";

export const Character = ({
  id,
  name,
  status,
  species,
  gender,
  location,
  image,
}) => {
  return (
    <Link to={`/character/${id}`} className="character">
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
    </Link>
  );
};
