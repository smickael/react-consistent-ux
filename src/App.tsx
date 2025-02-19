import "./App.css";
import {
  ArtistsSection,
  ArtworksSection,
  Footer,
  Header,
  HeroSection,
} from "./components";

function App() {
  return (
    <div className="relative w-full h-auto flex flex-col bg-antiFlashWhite overflow-hidden mx-auto">
      <div className="absolute inset-0 z-0 bg-rose-400 w-full -left-1/2 -top-1/2 aspect-square rounded-full blur-3xl bg-blend-color-burn mix-blend-hue opacity-50"></div>
      <div className="absolute inset-0 z-0 bg-pink-200 w-1/3 aspect-square rounded-full blur-3xl  bg-blend-color-burn opacity-50 left-2/4"></div>
      <div className="absolute inset-0 z-0 bg-blue-900 h-full aspect-video -rotate-45 mix-blend-color-burn opacity-30 blur-3xl"></div>
      <Header />
      <div className="flex max-w-5xl flex-col gap-8 px-4 py-8 mx-auto z-20">
        <HeroSection />
        <ArtworksSection />
        <ArtistsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
