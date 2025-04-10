"use client";

import Image from "next/image";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const EcosystemIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-14 w-14"
  >
    <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0 18a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm-1-13h2v6h-2zm1 8.5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 15.5z" />
  </svg>
);

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Just One Click And Its Done
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy the flexibility to both the collaborators and brands to choose on their own.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-6">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="relative border border-white/30 px-6 py-12 text-center rounded-xl sm:flex-1 
                         group transition-all duration-500 hover:border-white 
                         hover:shadow-[0px_0px_20px_rgba(255,255,255,0.6)]"
            >
              
              <div className="relative z-10 inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
                <EcosystemIcon />
              </div>

              
              <h3 className="mt-6 font-bold text-xl relative z-10">{title}</h3>
              <p className="mt-2 text-white/70 relative z-10">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
