"use client";
import React from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "Looking to partner with creaters who truely match your brand's voice?",
    answer: " Understand their intent and need for authentic, value-aligned collaborators.",

  },
  {
    question: "Ready to skip the middlemen and work directly with top brands?",
    answer:"Highlight the value of direct access and faster deals.",
    
  },
  {
    question: "What’s the biggest friction point in your current collaboration process?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "If you could change one thing about brand-collaborator partnerships, what would it be?",
    answer:" Get honest insight into what our platform can disrupt or improve.",
    
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/30 py-4">
      <div
        className="flex items-center justify-between py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-2 text-white/70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#A46EDB,#4F21A1_34%,#200D42_65%,#000_82%)] text-white py-[72px]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter mx-auto max-w-[648px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[468px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
