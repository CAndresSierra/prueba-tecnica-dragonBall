"use client";

import { useEffect, useState } from "react";

import { ApiCharacterUrl } from "@/config/envs";
import { IChracter } from "@/interfaces/ICharacter";
import { motion } from "framer-motion";

const CharacterDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [character, setCharacter] = useState<IChracter | undefined>();

  useEffect(() => {
    const fetchDta = async () => {
      try {
        const res = await fetch(`${ApiCharacterUrl}/${params.id}`, {
          method: "GET",
        });

        const data: IChracter = await res.json();

        setCharacter(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchDta();
  }, []);

  return (
    <div className="flex  container justify-evenly py-10 ">
      <article className="flex flex-col w-[50%]">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className="text-6xl font-bold text-yellow-500"
        >
          {character?.name.toUpperCase()}
        </motion.h1>
        <div className="w-full">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            src={character?.image}
            alt={`Imagen de ${character?.name}`}
            className="h-[600px]"
          />
        </div>
      </article>

      <motion.article
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.2,
            ease: "easeInOut",
            type: "spring",
            bounce: 0.25,
            damping: 7,
          },
        }}
        className="flex flex-col gap-8 w-[60%]"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl font-semibold text-gray-950">
            Datos del personaje
          </h1>
          <ul>
            <li className="text-xl font-semibold">
              <strong className="font-bold text-yellow-500 text-xl">
                Ki:{" "}
              </strong>{" "}
              {character?.ki}
            </li>
            <li className="text-xl font-semibold">
              <strong className="font-bold text-yellow-500 text-xl">
                Max Ki:{" "}
              </strong>
              {character?.maxKi}
            </li>
            <li className="text-xl font-semibold">
              <strong className="font-bold text-yellow-500 text-xl">
                Raza:{" "}
              </strong>
              {character?.race}
            </li>
            <li className="text-xl font-semibold">
              <strong className="font-bold text-yellow-500 text-xl">
                Genero:{" "}
              </strong>{" "}
              {character?.gender}
            </li>
            <li className="text-xl font-semibold">
              <strong className="font-bold text-yellow-500 text-xl">
                Afiliacion:{" "}
              </strong>{" "}
              {character?.affiliation}
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <h1 className="text-5xl font-semibold text-gray-950">
              Info del personaje
            </h1>
            <p className="text-base font-semibold text-gray-950/90 text-justify">
              {character?.description}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default CharacterDetail;
