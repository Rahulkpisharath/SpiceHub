import { useEffect, useState } from "react";

const stats = [
  { value: 700, suffix: "+", label: "Monthly Bulk Orders" },
  { value: 150000, suffix: "+", label: "Clients" },
  { value: 5000, suffix: "+", label: "Happy Farmers" },
  { value: 20000, suffix: "+", label: "Happy Customers" },
];

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const HappyCustomers = () => {
  return (
    <section className="py-16 bg-green-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="border-divider">
              <h3 className="text-4xl font-bold text-white ">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-white font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
