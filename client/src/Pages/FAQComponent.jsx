import React, { useState } from "react";

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question:
        "What's the difference between digital and traditional signage?",
      answer:
        "Digital signage uses screens (LED, LCD) to display multimedia content, while traditional signage uses physical materials like vinyl, wood, acrylic, or metal for static messages.",
    },
    {
      question: "Can you help with permits and compliance?",
      answer:
        "Absolutely. We handle all required signage permits, zoning rules, and ADA compliance to make sure everything is up to code.",
    },
    {
      question: "How long does it take to create a sign?",
      answer: (
        <>
          Timelines vary by project, but generally:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Design: 2–5 business days</li>
            <li>Production: 5–10 business days</li>
            <li>Installation: 1–3 days</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do you offer maintenance or support?",
      answer:
        "Yes. We offer scheduled maintenance, cleaning, digital content updates, and repair services to ensure your signage looks great and performs well.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
            SUPPORT
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="flex flex-col">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="bg-white my-2 shadow-lg rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex flex-row justify-between items-center font-semibold p-4 cursor-pointer w-full text-left"
                >
                  <span className="text-gray-800">{faq.question}</span>
                  <svg
                    className={`fill-current text-blue-600 h-5 w-5 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </button>
                <div
                  className={`border-l-2 border-blue-600 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 text-gray-600">{faq.answer}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
