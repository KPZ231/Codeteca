"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <p
            className="text-sm tracking-widest uppercase font-semibold 
            bg-linear-to-r from-(--accent-color) to-(--secondary-accent-color) 
            bg-clip-text text-transparent"
          >
            FAQ
          </p>
        <h2 className="text-5xl font-bold text-white leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">Lorem Ipsum</p>
      </div>

      <div className="w-3/4 mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-(--background-accent) text-white p-6 rounded-xl shadow-lg break-inside-avoid"
          >
            <h3 className=" text-xl font-bold mb-2">{item.question}</h3>
            <p className=" text-gray-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
