interface ButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  className,
  variant = "primary",
  children,
  onClick,
}: ButtonProps) => {
  const baseStyle =
    "p-4 rounded-2xl leading-none uppercase font-mono tracking-tight cursor-pointer relative overflow-hidden transition-all before:absolute before:top-0 before:bottom-0 before:left-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full";

  const variantStyle =
    variant === "secondary"
      ? "bg-white text-smokyBlack border border-smokyBlack before:bg-smokyBlack before:bg-smokyBlack hover:text-white"
      : variant === "tertiary"
      ? "bg-antiFlashWhite text-smokyBlack border border-dimGray before:bg-dimGray hover:text-white"
      : "bg-smokyBlack text-white border border-smokyBlack before:bg-white hover:text-smokyBlack";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
