"use client";

import CharactersComponent from "@/components/Characters/CharactersComponent";
import { IChracter } from "@/interfaces/ICharacter";
import { useEffect, useState } from "react";

import { ApiCharacterUrl } from "@/config/envs";
import Loading from "./loading";

export default function Home() {
  const [characters, setCharacters] = useState<IChracter[] | undefined>();
  const [skeleton, setSkeleton] = useState<boolean>(false);

  useEffect(() => {
    const fetchDta = async (): Promise<void> => {
      setSkeleton(true);
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
      } finally {
        setSkeleton(false);
      }
    };
    fetchDta();
  }, []);

  if (skeleton) {
    return (
      <div className="flex  container items-start justify-center h-screen w-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col container">
      <CharactersComponent characters={characters} />
    </div>
  );
}
