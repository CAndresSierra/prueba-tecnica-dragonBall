import { IChracter } from "@/interfaces/ICharacter";
import { ITransformation } from "@/interfaces/ITransfomation";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

const TransfCard: React.FC<Partial<ITransformation>> = ({
  _id,
  name,
  image,
  ki,
  character,
}) => {
  return (
    <motion.div
      className="w-[300px] h-[600px] rounded-2xl flex flex-col gap-1 items-center bg-gradient-to-t from-[#0f172a] via-[#19233b] to-[#fb923c]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" w-full flex justify-center rounded-2xl">
        <Link href={`/transf/${_id}`}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={image}
            alt={`Dragon ball character: ${name}`}
            className="h-[400px] rounded-3xl"
          />
        </Link>
      </div>

      <span className="flex flex-col w-full justify-center items-center">
        <h1 className="text-xl text-yellow-100 font-bold">
          {name?.toUpperCase()}
        </h1>
      </span>

      <div className="flex flex-col w-full px-5">
        <span className="flex flex-col w-full  justify-center gap-0  items-start">
          <strong className="text-orange-400 text-xl">ki: </strong>
          <h1 className="text-lg text-gray-200">{ki}</h1>
        </span>
      </div>

      <Popover placement="bottom" offset={20}>
        <PopoverTrigger>
          <Button
            variant="faded"
            className="border-2 border-orange-500 text-orange-500 bg-gray-950"
          >
            Personaje
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-gray-800">
          <div className="flex flex-col gap-1 py-2 px-3">
            <Link href={`/character/${character?._id}`}>
              <motion.span
                whileHover={{ y: -3, scale: 1.1 }}
                className="flex items-center gap-4"
              >
                <h1 className="text-base font-bold text-amber-400">
                  {character?.name}
                </h1>
                <h1 className="text-base font-bold text-gray-200">
                  {character?.race}
                </h1>
              </motion.span>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  );
};

export default TransfCard;
