"use client";

import { ApiPlanetsUrl } from "@/config/envs";
import { IOriginPlanet } from "@/interfaces/IOriginPlanet";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Character from "@/app/character/page";
import { IChracter } from "@/interfaces/ICharacter";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const PlanetDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [planet, setPlanet] = useState<IOriginPlanet>();

  useEffect(() => {
    const fetchDta = async () => {
      try {
        const res = await fetch(`${ApiPlanetsUrl}/${params.id}`, {
          method: "GET",
        });

        const data: IOriginPlanet = await res.json();
        setPlanet(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchDta();
  }, []);

  return (
    <div className="flex flex-col gap-6 container justify-evenly items-center">
      <article className="flex flex-col w-[50%] gap-6 justify-center items-center">
        <div className="flex flex-col items-center">
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
            className="text-5xl font-bold dark:text-gray-200 text-gray-950"
          >
            Nombre:{" "}
            <strong className="font-bold text-yellow-500">
              {planet?.name}
            </strong>
          </motion.h1>
          {planet?.isDestroyed ? (
            <p className="text-red-700 font-bold">Planeta Destruido</p>
          ) : (
            <p className="text-green-700 font-bold">Planeta activo</p>
          )}
        </div>
        <div className="w-full">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            src={planet?.image}
            alt={`Imagen de ${Character?.name}`}
            className="h-[400px] w-full rounded-3xl shadow-2xl"
          />
        </div>
      </article>
      <article className="flex flex-col gap-5">
        <div>
          <p className="text-base font-semibold dark:text-gray-200/80 text-gray-950/90 text-justify">
            {planet?.description}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold dark:text-gray-200 text-gray-950">
            Personajes Originarios
          </h1>
          <div className="flex flex-wrap justify-evenly">
            {planet?.characters.map((character: IChracter, index) => {
              return (
                <Link href={`/character/${character._id}`} key={index}>
                  <Card
                    shadow="sm"
                    key={index}
                    className="w-[150px] bg-transparent border-0 shadow-none"
                  >
                    <CardBody className="overflow-visible p-0 items-center">
                      <motion.img
                        alt={character.name}
                        className="h-[200px]  rounded-lg z-50"
                        src={character.image}
                        whileHover={{ scale: 1.2 }}
                      />
                    </CardBody>
                    <CardFooter className="text-small flex-col justify-between">
                      <b className="text-yellow-500 font-bold">
                        {character.name.toUpperCase()}
                      </b>
                      <p className="dark:text-gray-200 text-gray-950 font-semibold text-sm ">
                        {character.race}
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default PlanetDetail;
