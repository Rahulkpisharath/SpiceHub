

const features = [
  {
    title: "Research",
    text: "We identify herbs & variants with potent compounds and determine active ingredients.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M10 2v2H5v18h14V4h-5V2h-4zm0 6h4v2h-4V8zm0 4h4v2h-4v-2z" />
      </svg>
    ),
  },
  {
    title: "Clinical Tests",
    text: "We conduct in-house studies & tests to ensure superior quality.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M6 2h12v2h-1v5l4 7a4 4 0 01-3.5 6H6.5A4 4 0 013 16l4-7V4H6V2z" />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    text: "High-quality extraction using advanced equipment.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 3h18v4H3V3zm2 6h14v12H5V9z" />
      </svg>
    ),
  },
  {
    title: "Quality Control",
    text: "In-house quality & safety checks for all products.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l8 4v6c0 5-3.4 9.7-8 10-4.6-.3-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    title: "Package & Shipping",
    text: "Safe packaging and international delivery.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 8v13H3V8l9-5 9 5zm-9 3l9-5-9 5-9-5 9 5z" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    text: "Ethical sourcing and sustainable practices.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2C7 6 5 9 5 13a7 7 0 0014 0c0-4-2-7-7-11z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className=" features-section bg-green-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-bold mb-6">What makes our products so different?
</h2>
      <div className="features-box">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
