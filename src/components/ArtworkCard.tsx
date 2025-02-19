import { DollarSign } from "lucide-react";
import { Typography } from "./Typography";
import { Button } from "./Button";

type ArtworkCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  artist: string;
  artistAvatar: string;
  price: number;
};

export const ArtworkCard = ({
  imgSrc,
  title,
  description,
  artist,
  artistAvatar,
  price,
}: ArtworkCardProps) => {
  function sliceText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }
  return (
    <div className="flex flex-col bg-white rounded-3xl border border-platinum w-fit overflow-hidden shadow-lg">
      <div className="w-80 p-3 flex flex-col">
        <img
          src={imgSrc}
          alt={title}
          className="aspect-square object-cover rounded-2xl"
        />
        <div className="flex flex-col w-auto px-2 mt-5">
          <div className="w-full flex justify-between items-center mb-2">
            <Typography
              size="xl"
              family="sans"
              weight="semibold"
              color="smokyBlack"
            >
              {title}
            </Typography>
            <div className="flex items-center">
              <DollarSign size={20} className="text-smokyBlack" />
              <Typography
                size="xl"
                family="sans"
                weight="semibold"
                color="smokyBlack"
              >
                {price} USD
              </Typography>
            </div>
          </div>
          <Typography
            size="sm"
            family="sans"
            weight="regular"
            color="smokyBlack"
            className="leading-4 mb-5"
          >
            {sliceText(description, 85)}
          </Typography>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={artistAvatar}
                alt={artist}
                className="w-8 h-8 rounded-full border border-platinum"
              />
              <Typography
                size="sm"
                family="sans"
                weight="semibold"
                color="smokyBlack"
              >
                {artist}
              </Typography>
            </div>
            <Typography size="sm" family="sans" weight="medium" color="dimGray">
              20x30 in + more sizes
            </Typography>
          </div>
        </div>
      </div>
      <div className="p-3 gap-3 flex justify-center items-center bg-platinum">
        <Button className="w-full">Add to bag</Button>
        <Button variant="secondary" className="w-full">
          Buy now
        </Button>
      </div>
    </div>
  );
};
