"use client";

import { ApiTransfUrl } from "@/config/envs";
import { ITransformation } from "@/interfaces/ITransfomation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

import Link from "next/link";

const TransformationDetail: React.FC<{ params: { id: string } }> = ({
  params,
}) => {
  const [transf, setTransf] = useState<ITransformation>();

  useEffect(() => {
    const fetchDta = async () => {
      try {
        const res = await fetch(`${ApiTransfUrl}/${params.id}`, {
          method: "GET",
        });

        const data: ITransformation = await res.json();
        setTransf(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchDta();
  }, []);

  return (
    <div className="flex flex-col gap-6 container justify-evenly items-center">
      <article className="flex flex-col w-[50%] gap-6 justify-center items-center">
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
          <strong className="font-bold text-yellow-500">{transf?.name}</strong>
        </motion.h1>

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
          src={transf?.image}
          alt={`Imagen de ${transf?.name}`}
          className="h-[600px] "
        />
      </article>
      <article className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-bold dark:text-gray-200 text-gray-950">
            Personaje
          </h1>
          <div className="flex flex-wrap justify-evenly">
            <Link href={`/character/${transf?.character._id}`}>
              <Card
                shadow="sm"
                className="w-[150px] bg-transparent border-0 shadow-none"
              >
                <CardBody className="overflow-visible p-0 items-center">
                  <motion.img
                    alt={transf?.character.name}
                    className="h-[200px]  rounded-lg z-50"
                    src={transf?.character.image}
                    whileHover={{ scale: 1.2 }}
                  />
                </CardBody>
                <CardFooter className="text-small flex-col justify-between">
                  <b className="text-yellow-500 font-bold">
                    {transf?.character.name.toUpperCase()}
                  </b>
                  <p className="dark:text-gray-200 text-gray-950 font-semibold text-sm ">
                    {transf?.character.race}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TransformationDetail;
