"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo.webp";

import { motion } from "framer-motion";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 text-black ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        className="flex justify-evenly container"
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
        <div className="flex  items-center">
          <Nav />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
