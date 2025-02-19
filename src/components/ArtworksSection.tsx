import { ArtworkCard } from "./ArtworkCard";
import { SectionHeader } from "./SectionHeader";

export const ArtworksSection = () => {
  const arts = [
    {
      imgSrc: "/terracota.png",
      title: "Terracota vibes",
      description:
        "Sink into a world where time slows down, wrapped in the gentle embrace of tranquility and peace.",
      price: 100,
    },
    {
      imgSrc: "/gradient.png",
      title: "Blurred dreams",
      description:
        "A dreamy escape into the world of abstract art, where colors and shapes dance in harmony.",
      price: 200,
    },
    {
      imgSrc: "/inception.png",
      title: "Inception",
      description:
        "A surreal journey into the depths of the mind, where reality and imagination blend seamlessly.",
      price: 150,
    },
    {
      imgSrc: "/latenight.png",
      title: "Late night vibes II",
      description:
        "A reflection of the quiet moments when the world sleeps, and the mind wanders freely.",
      price: 180,
    },
    {
      imgSrc: "/latenight2.png",
      title: "Late night vibes",
      description:
        "A collection of thoughts and emotions captured in the stillness of the night, waiting to be explored.",
      price: 120,
    },
    {
      imgSrc: "/livingroom.png",
      title: "70s living room",
      description:
        "Step into a time capsule and experience the vibrant colors and patterns of the seventies in a modern setting.",
      price: 250,
    },
  ];

  const artists = [
    {
      artist: "Johanna Doe",
      login: "johannadoe",
      artistAvatar: "/avatar1.png",
    },
    {
      artist: "Alex Smith",
      login: "alexsmith",
      artistAvatar: "/avatar2.png",
    },
    {
      artist: "Emily Johnson",
      login: "emilyjohnson",
      artistAvatar: "/avatar3.png",
    },
    {
      artist: "John Doe",
      login: "johndoe",
      artistAvatar: "/avatar4.png",
    },
    {
      artist: "Jane Doe",
      login: "janedoe",
      artistAvatar: "/avatar5.png",
    },
    {
      artist: "Sam Smith",
      login: "samsmith",
      artistAvatar: "/avatar6.png",
    },
  ];

  const sortRandomArtworks = () => {
    const randomArts = arts
      .sort(() => Math.random() - Math.random())
      .slice(0, 5);
    const randomArtists = artists
      .sort(() => Math.random() - Math.random())
      .slice(0, 5);
    return randomArts.map((art, index) => ({
      ...art,
      artist: randomArtists[index].artist,
      artistAvatar: randomArtists[index].artistAvatar,
    }));
  };

  return (
    <section className="w-full -mr-4">
      <SectionHeader monoTitle="Explore" sansTitle="Arts" />
      <div className="w-full max-w-[100vw] mt-3">
        <div className="flex overflow-x-auto scrollbar-hide pr-4 rounded-l-3xl pb-4">
          <div className="flex gap-3">
            {sortRandomArtworks().map((art, index) => (
              <div key={index} className="flex-none w-fit">
                <ArtworkCard
                  imgSrc={art.imgSrc}
                  title={art.title}
                  description={art.description}
                  artist={art.artist}
                  artistAvatar={art.artistAvatar}
                  price={art.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
