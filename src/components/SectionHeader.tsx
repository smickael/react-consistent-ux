import { ChevronRight } from "lucide-react";
import { Typography } from "./Typography";

type SectionHeaderProps = {
  monoTitle: string;
  sansTitle: string;
  description?: string;
};

export const SectionHeader = ({
  monoTitle,
  sansTitle,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <Typography
            size="2xl"
            family="mono"
            weight="semibold"
            color="dimGray"
            className="text-3xl md:text-2xl"
          >
            {monoTitle}//
          </Typography>
          <Typography
            size="2xl"
            family="sans"
            weight="semibold"
            color="smokyBlack"
            className="text-3xl md:text-2xl uppercase"
          >
            {sansTitle}
          </Typography>
        </div>
        {description && (
          <Typography
            size="xl"
            family="sans"
            weight="medium"
            color="dimGray"
            className="mb-8"
          >
            {description}
          </Typography>
        )}
      </div>
      <ChevronRight size={40} className="text-smokyBlack" />
    </div>
  );
};
