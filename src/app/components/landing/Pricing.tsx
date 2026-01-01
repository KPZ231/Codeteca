"use client";
import { FaCheck } from "react-icons/fa6";
import Button from "../reusables/Button";

export default function Pricing() {
  return (
    <section className="w-full bg-(--bg-color) py-24">
      <div className="w-full max-w-3/4 mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <p
            className="text-sm tracking-widest uppercase font-semibold 
            bg-linear-to-r from-(--accent-color) to-(--secondary-accent-color) 
            bg-clip-text text-transparent"
          >
            Pricing
          </p>

          <h2 className="text-6xl font-extrabold text-(--text-color) leading-tight mt-2">
            Simple Pricing
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mt-4">
            Transparent plans that scale with your business needs.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card */}
          {[
            {
              title: "Basic plan",
              price: "$10",
              features: [
                "Access to all basic features",
                "Basic reporting and analytics",
                "Up to 10 individual users",
                "20 GB individual data",
                "Basic chat and email support",
              ],
            },
            {
              title: "Business plan",
              price: "$20",
              features: [
                "200+ integrations",
                "Advanced reporting and analytics",
                "Up to 20 individual users",
                "40 GB individual data",
                "Priority chat and email support",
              ],
              highlight: true,
            },
            {
              title: "Enterprise plan",
              price: "$40",
              features: [
                "Advanced custom fields",
                "Audit log and data history",
                "Unlimited individual users",
                "Unlimited individual data",
                "Personalized + priority service",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border p-10 flex flex-col justify-between
              bg-(--background-accent)
              border-white/10
              hover:border-(--accent-color)/50
              transition-all duration-300
              ${plan.highlight ? "scale-105 shadow-xl shadow-(--accent-color)/10" : ""}`}
            >
              
                <div>
                  <h3 className="text-lg font-semibold text-(--accent-color) mb-4">
                    {plan.title}
                  </h3>

                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-(--text-color)">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/mth</span>
                  </div>

                  <p className="text-gray-400 mb-8">Billed annually.</p>

                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span
                          className="flex items-center justify-center w-5 h-5 rounded-full 
                        bg-(--accent-color)/20 text-(--accent-color)"
                        >
                          <FaCheck size={12} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Button
                    href="/"
                    variant="primary"
                    content="Get started"
                  ></Button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
