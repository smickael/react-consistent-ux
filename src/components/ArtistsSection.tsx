import { ArtistCard } from "./ArtistCard";
import { SectionHeader } from "./SectionHeader";

export const ArtistsSection = () => {
  const artists = [
    {
      artist: "Johanna Doe",
      login: "johannadoe",
      artistAvatar: "/avatar1.png",
      artistCover: "/livingroom.png",
    },
    {
      artist: "Alex Smith",
      login: "alexsmith",
      artistAvatar: "/avatar2.png",
      artistCover: "/inception.png",
    },
    {
      artist: "Emily Johnson",
      login: "emilyjohnson",
      artistAvatar: "/avatar3.png",
      artistCover: "/latenight.png",
    },
    {
      artist: "John Doe",
      login: "johndoe",
      artistAvatar: "/avatar4.png",
      artistCover: "/latenight2.png",
    },
    {
      artist: "Jane Doe",
      login: "janedoe",
      artistAvatar: "/avatar5.png",
      artistCover: "/gradient.png",
    },
    {
      artist: "Sam Smith",
      login: "samsmith",
      artistAvatar: "/avatar6.png",
      artistCover: "/terracota.png",
    },
  ];

  const sortRandomArtists = () => {
    return artists.sort(() => Math.random() - Math.random()).slice(0, 5);
  };

  const randomArtsNumber = Math.floor(Math.random() * (34 - 12 + 1)) + 12;
  const randomFollowersNumber =
    Math.floor(Math.random() * (1110 - 301 + 1)) + 301;

  return (
    <section className="w-full -mr-4">
      <SectionHeader monoTitle="Featured" sansTitle="Creators" />
      <div className="w-full max-w-[100vw] mt-3">
        <div className="flex overflow-x-auto scrollbar-hide pr-4 rounded-l-3xl pb-4">
          <div className="flex gap-3">
            {sortRandomArtists().map((art, index) => (
              <div key={index} className="flex-none w-fit">
                <ArtistCard
                  artist={art.artist}
                  login={art.login}
                  artistAvatar={art.artistAvatar}
                  artistCover={art.artistCover}
                  arts={randomArtsNumber}
                  followers={randomFollowersNumber}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
