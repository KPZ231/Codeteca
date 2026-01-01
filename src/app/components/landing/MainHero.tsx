'use client'
import Button from "../reusables/Button";

export default function MainHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-1/2 flex flex-col text-center gap-8 items-center">
        <h1 className="text-(--text-color) text-7xl font-bold leading-tight">
          Welcome to{" "}
          <span className="bg-linear-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">
            Codeteca
          </span>
          <br />
          a new platform for programmers
        </h1>

        <h2 className="w-3/4 text-2xl text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit unde,
          obcaecati saepe ex illo, quo officiis iure.
        </h2>

        <div className="w-3/4 flex flex-row gap-4 items-center justify-center">
            <Button content="Lorem Ipsum" href="/" variant="primary" target="_self"></Button>
            <Button content="Lorem Ipsum" href="/" variant="secondary" target="_self"></Button>
        </div>
      </div>

    </section>
  );
}
