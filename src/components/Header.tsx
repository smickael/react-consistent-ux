import { ArrowUpRight, GalleryHorizontal, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Index",
      link: "#",
    },
    {
      name: "Informations",
      link: "#",
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`p-3 flex h-fit w-full justify-between items-center z-60 transition-colors duration-30 
        ${isMenuOpen ? "bg-smokyBlack md:bg-antiFlashWhite" : "bg-none"}`}
      >
        <a href="/" className="flex items-center gap-2">
          <div
            className={`px-1 py-2 rounded-lg h-fit transition-colors duration-300 ${
              isMenuOpen ? "bg-white md:bg-smokyBlack" : "bg-smokyBlack"
            }`}
          >
            <GalleryHorizontal
              width="24"
              height="16"
              className={`transition-colors duration-300 ${
                isMenuOpen ? "text-smokyBlack md:text-white" : "text-white"
              }`}
            />
          </div>
          <h1
            className={`text-xl font-bold tracking-tight uppercase transition-colors duration-300 ${
              isMenuOpen ? "text-white md:text-smokyBlack" : "text-smokyBlack"
            }`}
          >
            Meraki
          </h1>
        </a>
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`font-sans font-bold text-xl transition-colors duration-300 text-smokyBlack hover:text-dimGray`}
            >
              <span className="font-mono text-xl font-semibold text-dimGray tracking-tight">
                {index + 1}.
              </span>{" "}
              {item.name}
            </a>
          ))}
        </div>
        {isMenuOpen ? (
          <button
            onClick={toggleMenu}
            className="self-end text-white flex md:hidden"
          >
            <X size={32} />
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            className={`flex md:hidden font-sans font-bold text-xl transition-colors duration-300 ${
              isMenuOpen
                ? "text-white hover:text-dimGray"
                : "text-smokyBlack hover:text-dimGray"
            }`}
          >
            Menu
          </button>
        )}
      </header>
      <div
        className={`fixed inset-0 p-4 rounded-t-4xl bg-smokyBlack z-50 md:hidden transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="relative flex flex-col h-full justify-center">
          <div className="flex flex-col gap-1">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={toggleMenu}
                className="group w-full flex justify-between border-b border-silverChalice hover:border-antiFlashWhite transition-colors duration-300 py-1"
              >
                <p className="font-sans font-bold text-5xl tracking-tight group-hover:text-antiFlashWhite text-silverChalice transition-colors duration-300">
                  {item.name}
                </p>
                <p className="font-mono text-5xl font-semibold group-hover:text-antiFlashWhite text-silverChalice tracking-tight">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
              </a>
            ))}
          </div>
          <div className="absolute w-full flex justify-between bottom-0">
            <a
              href="https://instagram.com/dxsignr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-antiFlashWhite font-sans font-bold text-xl tracking-tight"
            >
              Instagram
              <ArrowUpRight size={24} />
            </a>
            <a
              href="https://www.behance.net/dxsignr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-antiFlashWhite font-sans font-bold text-xl tracking-tight"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
