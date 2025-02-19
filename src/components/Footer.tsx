import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full flex justify-between bg-antiFlashWhite py-8 p-8">
      <a
        href="https://instagram.com/dxsignr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 items-center text-dimGray font-sans font-bold text-xl tracking-tight"
      >
        Instagram
        <ArrowUpRight size={24} />
      </a>
      <a
        href="https://www.behance.net/dxsignr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dimGray font-sans font-bold text-xl tracking-tight"
      >
        Behance
      </a>
    </footer>
  );
};
