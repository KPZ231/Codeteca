"use client";

import Button from "./Button";
import Image from "next/image";

interface CTAProps {
  mainText: string;
  description: string;
  ctaButtonContent: string;
  ctaButtonHref: string;
  imagePath: string;
  imageAlt: string;
}

export default function CTA({
  mainText,
  description,
  ctaButtonContent,
  ctaButtonHref,
  imagePath,
  imageAlt,
}: CTAProps) {
  return (
    <section
      className="
        w-full max-w-7xl mx-auto
        grid grid-cols-1 lg:grid-cols-2
        rounded-3xl overflow-hidden
        bg-(--background-accent) mt-4 mb-4
      "
    >
      {/* LEFT – content */}
      <div
        className="
          flex flex-col justify-center
          px-10 py-16 lg:px-16
          bg-linear-to-br
          from-(--bg-color)
          to-(--background-accent)
        "
      >
        <h2 className="text-5xl xl:text-6xl font-extrabold text-(--text-color) leading-tight">
          {mainText}
        </h2>

        <p className="text-xl text-gray-300 mt-6 max-w-xl">{description}</p>

        <div className="flex gap-4 mt-10">
          <Button href={ctaButtonHref} content={ctaButtonContent}></Button>

          <Button href="#" variant="secondary" content="Learn More"></Button>
        </div>
      </div>

      {/* RIGHT – image */}
      <div className="relative w-full h-105 lg:h-auto">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
