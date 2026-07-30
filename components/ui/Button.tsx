import Link from "next/link";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-[#A27B5C] text-white hover:bg-[#8f6a4e] hover:-translate-y-1"
          : "border border-white text-white hover:bg-white hover:text-black",
        className
      )}
    >
      {children}
    </Link>
  );
}