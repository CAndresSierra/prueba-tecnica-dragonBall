"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.webp";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-8 text-black ">
      <motion.div
        className="flex flex-col gap-2 items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo Dragon Ball"
            width={300}
            height={300}
            className="rounded-full"
          />
        </Link>

        <h1 className="text-xl font-bold">
          Hecho por CS<span className="text-yellow-400">.</span>
        </h1>
      </motion.div>
    </header>
  );
};

export default Header;
