import { Button } from "./Button";

export const HeroSection = () => (
  <div className="relative flex flex-col md:flex-row w-full">
    <div className="absolute -inset-1 rounded-md blur bg-antiFlashWhite/50 z-10 backdrop-blur-sm md:hidden"></div>
    <div className="relative z-20 flex flex-col justify-center items-center md:items-start w-full md:w-1/2 p-4 aspect-square md:aspect-auto">
      <h1 className="text-5xl font-bold text-smokyBlack md:text-dimGray tracking-tight text-center md:text-left">
        Transform Pixels into{" "}
        <span className="text-smokyBlack font-mono text-5xl">Presence</span>
      </h1>
      <p className="text-lg md:text-xl text-smokyBlack mt-4 text-center md:text-left font-medium tracking-tight">
        Discover, Buy, and Frame Digital Art that <br /> Speaks to You
      </p>
      <div className="w-full max-w-md flex gap-4 mt-8">
        <Button className="w-full">Discover</Button>
        <Button variant="secondary" className="w-full">
          Create
        </Button>
      </div>
    </div>
    <img
      src="/blob.png"
      alt="Blob"
      className="absolute md:static object-contain md:w-1/2 aspect-square md:block"
    />
  </div>
);
