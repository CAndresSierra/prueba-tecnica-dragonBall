"use client";

import { IChracter } from "@/interfaces/ICharacter";
import CharacterCard from "./CharacterCard";

const CharactersComponent: React.FC<{
  characters: IChracter[] | undefined;
}> = ({ characters }) => {
  return (
    <div className="flex justify-evenly  flex-wrap gap-5">
      {characters?.map((character: IChracter, index) => {
        return (
          <CharacterCard
            key={index}
            _id={character?._id}
            name={character?.name}
            ki={character?.ki}
            maxKi={character?.maxKi}
            race={character?.race}
            gender={character?.gender}
            image={character?.image}
          />
        );
      })}
    </div>
  );
};

export default CharactersComponent;
