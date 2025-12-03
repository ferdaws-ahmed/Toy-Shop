import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ThemeContext } from "../../Components/ThemeContext/ThemeContext"; 
const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const { theme } = useContext(ThemeContext); 

  useEffect(() => {
    fetch("/faqs.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Error loading FAQ data:", err));
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`
        py-16 px-6 md:px-20 transition-colors duration-500 mt-10
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 to-gray-800"
            : "bg-[#fff7ed]"
        }
      `}
    >
      <h2
        className={`
          text-4xl md:text-5xl font-extrabold text-center mb-10 font-[Poppins]
          ${theme === "dark" ? "text-white" : "text-[#1e1e1e]"}
        `}
      >
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`
              border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300
              ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }
            `}
          >
            <button
              className={`
                w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-lg transition-all
                ${
                  theme === "dark"
                    ? "text-gray-200 hover:text-orange-400"
                    : "text-gray-800 hover:text-orange-600"
                }
              `}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}

              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown
                  size={22}
                  className={theme === "dark" ? "text-gray-300" : "text-black"}
                />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`
                    px-6 pb-4 text-base leading-relaxed
                    ${theme === "dark" ? "text-gray-300" : "text-gray-600"}
                  `}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
