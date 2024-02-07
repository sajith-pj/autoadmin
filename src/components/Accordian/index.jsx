import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border border-gray-300 rounded-md shadow">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-medium">{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
            />
          </svg>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3 }}
              className="p-4 overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
