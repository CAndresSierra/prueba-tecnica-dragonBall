import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="container bg-transparent mt-10 mb-10">
      <span className="text-sm font-semibold text-gray-950 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <Link href="/" className="hover:underline">
          Camilo Sierra™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
