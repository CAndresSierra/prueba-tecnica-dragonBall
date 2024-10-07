import { IChracter } from "@/interfaces/ICharacter";
import { motion } from "framer-motion";
import Link from "next/link";

const CharacterCard: React.FC<Partial<IChracter>> = ({
  _id,
  name,
  ki,
  maxKi,
  race,
  gender,
  image,
}) => {
  return (
    <motion.div
      className="w-[300px] h-[600px] rounded-2xl flex flex-col gap-1 items-center bg-gradient-to-t from-[#0f172a] via-[#19233b] to-[#fb923c]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" w-full flex justify-center rounded-2xl">
        <Link href={`/character/${_id}`}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={image}
            alt={`Dragon ball character: ${name}`}
            className="h-[400px]"
          />
        </Link>
      </div>

      <span className="flex flex-col w-full justify-center items-center">
        <h1 className="text-2xl text-yellow-100 font-bold">
          {name?.toUpperCase()}
        </h1>
        <h1 className="text-lg text-orange-400/80 font-bold">
          {race} - {gender}
        </h1>
      </span>

      <div className="flex flex-col w-full px-5">
        <span className="flex flex-col w-full  justify-center gap-0  items-start">
          <strong className="text-orange-400 text-xl">ki: </strong>
          <h1 className="text-lg text-gray-200">{ki}</h1>
        </span>
        <span className="flex flex-col w-full justify-center  items-start">
          <strong className="text-orange-400 text-xl">MaxKi: </strong>
          <h1 className="text-lg text-gray-200">{maxKi}</h1>
        </span>
      </div>
    </motion.div>
  );
};

export default CharacterCard;
