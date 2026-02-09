import { useState } from "react";

const faqs = [
  {
    question: "Why I should choose your company?",
    answer:
      "Why I should choose your company?With almost 10 years of experience as natural extracts & essential oil manufacturers, we can ensure that you get the best quality oils at affordable prices.",
  },
  {
    question: "How do you keep your extraction process clean?",
    answer: "All the natural products are manufactured and extracted by us hygienically and by using natural techniques. The natural and organic oils are obtained, distilled, manufactured, stored, and packed without any adulteration or without the use of chemical components in the well-maintained warehouses by implementing international techniques and standards as well so that they can match the needs of the end-users who want to use natural and organic substitutes.",
  },
  {
    question: "What kind of products you supply?",
    answer: "Nobody knows.Natural Essential Oils, Floral Absolute Oils, Natural Cosmetic Butters, Hydrosols, Oleoresins,  Natural Flower Oils, Spice Oils & Exotic Oil Dilutions.",
  },
  {
    question: "Till when can I use my spices?",
    answer: "The best use by date will be on the label of the spices. As we delivers the freshest spices, they last for a longer time and retain their flavor. They have to be stored in a cool, dry place.",
  }

];

const Faq = () => {
  // ✅ HOOK GOES INSIDE COMPONENT
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Frequently asked questions
      </h2>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl font-light text-gray-700">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
