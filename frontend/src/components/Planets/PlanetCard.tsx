import { IOriginPlanet } from "@/interfaces/IOriginPlanet";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { IChracter } from "@/interfaces/ICharacter";

const PlanetCard: React.FC<Partial<IOriginPlanet>> = ({
  _id,
  name,
  description,
  image,
  characters,
  isDestroyed,
}) => {
  const descriptionRecort = description?.slice(0, 80);

  return (
    <motion.div
      className="w-[300px] h-[600px] rounded-2xl flex flex-col gap-1 items-center bg-gradient-to-t from-[#0f172a] via-[#19233b] to-[#fb923c]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" w-full flex justify-center rounded-2xl">
        <div className="w-full px-4 py-4">
          <Link href={`/planets/${_id}`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={image}
              alt={`Dragon ball planet: ${name}`}
              className="h-[300px] rounded-2xl w-[300px]"
            />
          </Link>
        </div>
      </div>

      <span className="flex flex-col w-full justify-center items-center">
        <h1 className="text-xl text-yellow-100 font-bold">
          {name?.toUpperCase()}
        </h1>
      </span>

      <div className="flex flex-col w-full px-5">
        <span className="flex flex-col w-full  justify-center gap-0  items-start">
          <strong className="text-orange-400 text-xl">Descripcion: </strong>
          <h1 className="text-lg text-gray-200">{descriptionRecort}...</h1>
        </span>

        <span className="flex flex-col w-full  justify-center gap-0  items-start">
          {isDestroyed ? (
            <h1 className="text-base text-red-700 font-semibold">
              Planeta Destruido
            </h1>
          ) : (
            <h1 className="text-base text-green-500 font-semibold">
              Planeta activo
            </h1>
          )}
        </span>
      </div>

      <Popover placement="bottom" offset={20}>
        <PopoverTrigger>
          <Button
            variant="faded"
            className="border-2 border-orange-500 text-orange-500 bg-gray-950"
          >
            Personajes
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-gray-800">
          <div className="flex flex-col gap-1 py-2 px-3">
            {characters?.map((character: IChracter, index) => {
              return (
                <Link href={`/character/${character._id}`} key={index}>
                  <motion.span
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="flex items-center gap-4"
                    key={index}
                  >
                    <h1 className="text-base font-bold text-amber-400">
                      {character.name}
                    </h1>
                    <h1 className="text-base font-bold text-gray-200">
                      {character.race}
                    </h1>
                  </motion.span>
                </Link>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  );
};

export default PlanetCard;
