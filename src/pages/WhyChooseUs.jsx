import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Quality Assurance",
    description: "We deliver high-quality solutions that meet industry standards.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Customer First",
    description: "Our process is built around understanding customer needs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M3 12a9 9 0 0 1 18 0" />
        <path d="M21 12v4a2 2 0 0 1-2 2h-1" />
        <path d="M3 12v4a2 2 0 0 0 2 2h1" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = ({ onOpenForm }) => {
  return (
    <section className="bg-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine expertise, speed, and support to deliver real value.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-green-100 text-green-600 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <button onClick={onOpenForm} className="rounded-full bg-green-600 px-8 py-3 text-white font-medium hover:bg-green-700 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
