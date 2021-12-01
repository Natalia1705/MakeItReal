import React from "react";
import { Character } from "../Character/Character";

export const CharacterList = ({ characters }) => {
  return (
    <div className="characters">
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  );
};
