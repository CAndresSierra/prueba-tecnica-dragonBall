"use client";

import { useEffect, useState } from "react";

import { ApiCharacterUrl } from "@/config/envs";
import { IChracter } from "@/interfaces/ICharacter";
import { motion } from "framer-motion";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import { ITransformation } from "@/interfaces/ITransfomation";
import { div } from "framer-motion/client";

const CharacterDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [character, setCharacter] = useState<IChracter | undefined>();
  console.log(character);

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
      <article className="flex flex-col  items-center">
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
          <h1 className="text-5xl font-semibold dark:text-gray-200 text-gray-950">
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
            <h1 className="text-5xl font-semibold dark:text-gray-200 text-gray-950">
              Info del personaje
            </h1>
            <p className="text-base font-semibold dark:text-gray-200/80 text-gray-950/90 text-justify">
              {character?.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-5">
          <h1 className="text-5xl font-semibold dark:text-gray-200 text-gray-950">
            Planeta de origen
          </h1>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col justify-between items-center">
              {character?.originPlanet.image ? (
                <div className="w-[300px] h-[200px]">
                  <Image
                    src={character?.originPlanet.image!}
                    alt="Imagen del planeta"
                    width={300}
                    height={200}
                    className="rounded-3xl shadow-xl w-full h-full"
                  />
                </div>
              ) : (
                <h1>No se encontro la imagen</h1>
              )}
              <Link href={`/planets/${character?.originPlanet._id}`}>
                <Button
                  variant="faded"
                  className="w-[150px] bg-gray-950 text-yellow-500 font-bold border-2 border-yellow-500"
                >
                  Ver Detalle
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <h1 className="text-3xl font-bold text-yellow-500">
                <strong className="dark:text-gray-200 text-gray-950">
                  Nombre:
                </strong>{" "}
                {character?.originPlanet.name}
              </h1>
              {character?.originPlanet.isDestroyed ? (
                <span className="border-2 border-red-800 flex items-center justify-center py-1 rounded-full">
                  <h1 className="text-base font-bold text-red-800">
                    Planera Destruido
                  </h1>
                </span>
              ) : (
                <span className="border-2 border-green-700 flex items-center justify-center py-1 rounded-full">
                  <h1 className="text-base font-bold text-green-700">
                    Planera Activo
                  </h1>
                </span>
              )}

              <p className="text-justify font-semibold dark:text-gray-200/80 text-gray-950/90">
                {character?.originPlanet.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-5">
          <h1 className="text-5xl font-semibold dark:text-gray-200 text-gray-950">
            Transformaciones
          </h1>
          <div className="flex flex-wrap gap-5 justify-evenly">
            {character?.transformations.length! > 0 ? (
              character?.transformations.map(
                (transformation: ITransformation, index) => {
                  return (
                    <Link href={`/transf/${transformation._id}`} key={index}>
                      <Card shadow="sm" key={index} className="w-[150px]">
                        <CardBody className="overflow-visible p-0 items-center">
                          <div>
                            <motion.img
                              alt={transformation.name}
                              className="h-[200px]  rounded-lg"
                              src={transformation.image}
                              whileHover={{ scale: 1.2 }}
                            />
                          </div>
                        </CardBody>
                        <CardFooter className="text-small flex-col justify-between">
                          <b className="text-yellow-500 font-bold">
                            {transformation.name.toUpperCase()}
                          </b>
                          <p className="dark:text-gray-200 text-gray-950 font-semibold text-sm ">
                            {transformation.ki}
                          </p>
                        </CardFooter>
                      </Card>
                    </Link>
                  );
                }
              )
            ) : (
              <h1 className="text-2xl font-bold text-yellow-500">
                Este personaje no tiene transformaciones
              </h1>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default CharacterDetail;
