"use client";

import clsx from "clsx";

interface TestimonialProps {
  title: string;
  description?: string;
  isDescriptionVisible: boolean;
}

export default function Testimonial({
  title,
  description = "",
  isDescriptionVisible,
}: TestimonialProps) {
  return (
    <section
      className="
        w-full max-w-5xl
        mx-auto
        px-6
        py-24
        flex flex-col
        items-center
        text-center
        gap-6
      "
    >
      {/* Accent */}
      <span
        className="
          block
          w-16 h-1.5
          rounded-full
          bg-linear-to-r
          from-(--accent-color)
          to-(--secondary-accent-color)
        "
      />

      {/* Title */}
      <h2
        className="
          text-5xl sm:text-6xl lg:text-7xl
          font-extrabold
          tracking-tight
          text-(--text-color)
          leading-tight
        "
      >
        {title}
      </h2>

      {/* Description */}
      <p
        className={clsx(
          `
          max-w-3xl
          text-lg sm:text-xl lg:text-2xl
          text-gray-300
          leading-relaxed
          transition-all duration-500
        `,
          isDescriptionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        )}
      >
        {description}
      </p>
    </section>
  );
}
