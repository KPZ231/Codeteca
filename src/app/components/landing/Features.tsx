"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

function FeatureBlock({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* TEXT */}
      <div
        className={`flex flex-col gap-10 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c67de0]/15 text-[#c67de0]">
          <FaCheck size={22} />
        </div>

        <h3 className="text-5xl font-bold text-white leading-tight">
          Share team inboxes
        </h3>

        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
          Whether you have a team of 2 or 200, our shared team inboxes keep
          everyone on the same page and in the loop.
        </p>

        <div className="flex flex-col gap-5">
          {[
            "Leverage automation to move fast",
            "Always give customers a human to chat to",
            "Automate customer support and close leads faster",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full flex items-center justify-center bg-linear-to-br from-[#c67de0] to-[#6945ce]">
                <FaCheck size={12} className="text-white" />
              </div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div
        className={`relative ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          className="relative rounded-3xl overflow-hidden
          bg-[#1a1c20] border border-white/10
          shadow-[0_20px_80px_-20px_rgba(198,125,224,0.25)]"
        >
          <Image
            src="/images/placeholder.png"
            alt="Dashboard preview"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="w-full bg-[#0d0f12] py-20">
      <div className="max-w-3/4 mx-auto px-6 flex flex-col gap-28">

        {/* HEADER */}
        <div className="flex flex-col gap-6 text-center items-center">
          <span className="text-sm tracking-widest uppercase font-semibold bg-linear-to-r from-[#c67de0] to-[#6945ce] bg-clip-text text-transparent">
            Features
          </span>

          <h2 className="text-6xl font-extrabold text-white leading-tight">
            Everything you need
            <br />
            to build faster
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl">
            Powerful, carefully crafted features designed to streamline your
            workflow and deliver real value.
          </p>
        </div>

        {/* FEATURE 1 */}
        <FeatureBlock />

        {/* FEATURE 2 – ODWRÓCONA */}
        <FeatureBlock reverse />

        {/* FEATURE 3 */}
        <FeatureBlock />
      </div>
    </section>
  );
}
