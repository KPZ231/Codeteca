import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  content: string;
  href: string;
  variant?: ButtonVariant;
  target?: "_self" | "_blank";
  className?: string;
}

export default function Button({
  content,
  href,
  variant = "primary",
  target = "_self",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "buttonBase",
        variant === "primary" ? "buttonPrimary" : "buttonSecondary",
        className
      )}
    >
      {content}
    </Link>
  );
}
