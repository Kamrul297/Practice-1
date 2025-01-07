import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: "1",
      question: "When can I deposit/withdraw from my Investment account?",
      answer:
        "Deposit and withdrawal are available at any time. Be sure that your funds are not used in any ongoing trade before the withdrawal. The available amount is shown in your dashboard on the main page of the Investing platform.",
    },
    {
      id: "2",
      question: "How do I check my account balance?",
      answer:
        "Checking your account balance depends on the type of account you have (e.g., bank account, mobile wallet, credit card) and the service provider. Here's a general guide.",
    },
    {
      id: "3",
      question: "I forgot my password, what should I do?",
      answer:
        "If you've forgotten your password, here's a step-by-step guide to recover it.",
    },
    {
      id: "4",
      question: "How will I know that the withdrawal has been successful?",
      answer: "To confirm a successful withdrawal, you can check the following.",
    },
    {
      id: "5",
      question: "How much can I withdraw?",
      answer:
        "The amount you can withdraw depends on several factors, including your account type, withdrawal method, and provider's policies. Here's a breakdown.",
    },
  ];

  return (
    <div className="w-screen mb-14 bg-[#FAFAFA] p-[70px] border-red-950 border-2">
      <h1 className="text-[40px] poppins-bold text-[#0B0C0C] text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-xs poppins-regular text-center mt-3 mb-10">
        We answer some of your Frequently Asked Questions regarding our
        platform. If you have a <br /> query that is not answered here, Please
        contact us.
      </p>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="border-[#0B0C0C] border-[1px] w-[900px] rounded-md p-4 bg-[#FFFFFF]"
            >
              <button
                className="flex items-center justify-between w-full poppins-medium"
                onClick={() =>
                  setActiveQuestion(activeQuestion === q.id ? null : q.id)
                }
              >
                <div className="flex items-center gap-2 w-full poppins-medium">
                <span className="text-[#006D5B] text-[30px]"><FaRegCircleQuestion/></span>
                <span>{q.question}</span>
                </div>
                {activeQuestion === q.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeQuestion === q.id && (
                <div className="mt-2 text-sm text-gray-700">{q.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
