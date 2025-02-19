import { Button } from "./Button";
import { Typography } from "./Typography";

type ArtistCardProps = {
  artist: string;
  login: string;
  artistAvatar: string;
  artistCover: string;
  arts: number;
  followers: number;
};

export const ArtistCard = ({
  artist,
  login,
  artistAvatar,
  artistCover,
  arts,
  followers,
}: ArtistCardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl border border-platinum w-fit overflow-hidden shadow-lg">
      <div className="w-72 p-3 flex flex-col">
        <img
          src={artistCover}
          alt={artist}
          className="h-56 w-full object-cover rounded-2xl"
        />
        <div className="px-5 bg-opacity-90 -mt-12">
          <img
            src={artistAvatar}
            alt={artist}
            className="w-[72px] aspect-square rounded-full border-2 border-platinum"
          />
          <Typography size="2xl" weight="semibold" className="mt-1">
            {artist}
          </Typography>
          <Typography size="sm" color="dimGray">
            @{login}
          </Typography>
        </div>
        <div className="w-full flex justify-evenly py-6">
          <div className="flex flex-col items-center">
            <Typography size="2xl" weight="semibold" family="mono">
              {arts}
            </Typography>
            <Typography size="sm" color="dimGray" family="mono">
              Artworks
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography size="2xl" weight="semibold" family="mono">
              {followers}
            </Typography>
            <Typography size="sm" color="dimGray" family="mono">
              Followers
            </Typography>
          </div>
        </div>
      </div>
      <div className="p-3 gap-3 flex justify-center items-center bg-platinum">
        <Button className="w-full">See profile</Button>
      </div>
    </div>
  );
};
