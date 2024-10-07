import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Personajes",
    path: "/",
  },
  {
    name: "Planetas",
    path: "/planets",
  },
  {
    name: "Transformaciones",
    path: "/transf",
  },
  {
    name: "Crear Personaje",
    path: "/createCharacter",
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();

  const [lightMode, setLightMode] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (lightMode) {
      document.querySelector("html")?.classList.add("light");
    } else {
      document.querySelector("html")?.classList.remove("light");
    }
  }, [lightMode]);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLightMode = () => {
    setLightMode(true);
    setDarkMode(false);
  };

  const handleDarkMode = () => {
    setDarkMode(true);
    setLightMode(false);
  };

  return (
    <nav className="flex gap-5 items-center">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-950 hover:text-orange-500 dark:text-gray-100 dark:hover:text-orange-500"
            } text-lg  font-semibold transition-all duration-200`}
          >
            {link.name}
          </Link>
        );
      })}

      <Dropdown className=" dark:bg-gray-950">
        <DropdownTrigger>
          <Button
            variant="faded"
            className="bg-gray-950 text-lg text-orange-500 font-semibold px-7 rounded-full border-2 border-orange-500"
          >
            Tema
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="claro"
            onClick={handleLightMode}
            className="hover:bg-black transition-all"
          >
            <h1 className="text-base font-semibold dark:text-gray-200 text-gray-950">
              Claro
            </h1>
          </DropdownItem>
          <DropdownItem key="oscuro" onClick={handleDarkMode}>
            <h1 className="text-base font-semibold dark:text-gray-200 text-gray-950">
              Oscuro
            </h1>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  );
};

export default Nav;
