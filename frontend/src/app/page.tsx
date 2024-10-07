"use client";

import CharactersComponent from "@/components/CharactersComponent";
import { IChracter } from "@/interfaces/ICharacter";
import { useEffect, useState } from "react";

import { ApiCharacterUrl } from "@/config/envs";

export default function Home() {
  const [characters, setCharacters] = useState<IChracter[] | undefined>();

  useEffect(() => {
    const fetchDta = async (): Promise<void> => {
      try {
        const res = await fetch(ApiCharacterUrl, { method: "GET" });
        const data: IChracter[] = await res.json();

        if (Array.isArray(data)) {
          setCharacters(data);
        } else {
          console.log("Se espera un array de personajes pero se envio", data);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchDta();
  }, []);

  return (
    <div className="flex flex-col container">
      <CharactersComponent characters={characters} />
    </div>
  );
}
