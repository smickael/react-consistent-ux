import React, { JSX } from "react";

type FontSize = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "5xl" | "6xl";
type FontFamily = "sans" | "mono";
type FontWeight = "regular" | "medium" | "semibold" | "bold";
type Color =
  | "smokyBlack"
  | "dimGray"
  | "silverChalice"
  | "platinum"
  | "antiFlashWhite"
  | "white";

const fontSizeClasses: Record<FontSize, string> = {
  sm: "text-sm", // 14px
  base: "text-base", // 16px
  lg: "text-lg", // 18px
  xl: "text-xl", // 20px
  "2xl": "text-2xl", // 24px
  "3xl": "text-3xl", // 30px
  "5xl": "text-5xl", // 48px
  "6xl": "text-6xl", // 60px
};

const fontFamilyClasses: Record<FontFamily, string> = {
  sans: "font-sans text-pretty", // Geist
  mono: "font-mono text-pretty", // Geist Mono
};

const fontWeightClasses: Record<FontWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses: Record<Color, string> = {
  smokyBlack: "text-smokyBlack",
  dimGray: "text-dimGray",
  silverChalice: "text-silverChalice",
  platinum: "text-platinum",
  antiFlashWhite: "text-antiFlashWhite",
  white: "text-white",
};

type TypographyProps = {
  size?: FontSize;
  family?: FontFamily;
  weight?: FontWeight;
  color?: Color;
  tracking?: boolean;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

export const Typography = ({
  size = "base",
  family = "sans",
  weight = "medium",
  color = "smokyBlack",
  tracking = true,
  component: Component = "p",
  className = "",
  children,
}: TypographyProps) => {
  const classes = [
    fontSizeClasses[size],
    fontFamilyClasses[family],
    fontWeightClasses[weight],
    colorClasses[color],
    tracking && "tracking-tight",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
};
