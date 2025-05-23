"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does Elevate's AI interviewing work?",
      answer:
        "Elevate uses advanced AI to simulate realistic interview experiences. Our system adapts questions based on your responses, provides real-time feedback, and generates comprehensive performance reports that highlight your strengths and areas for improvement. The AI interviewer is trained on thousands of real interview scenarios to ensure a realistic experience.",
    },
    {
      question: "Do I need special equipment to use Elevate?",
      answer:
        "No special equipment is needed! Elevate works on any modern browser on your computer, tablet, or smartphone. For the best experience, we recommend using a device with a working microphone and camera, but our text-based interview mode is also available if you prefer typing responses.",
    },
    {
      question: "Are the interview questions specific to my industry?",
      answer:
        "Yes! Elevate offers industry-specific interview templates for over 20 different fields, including technology, finance, healthcare, marketing, and more. Each template contains questions tailored to different experience levels and job roles within that industry.",
    },
    {
      question: "How accurate is the AI feedback?",
      answer:
        "Our AI feedback is highly accurate and has been calibrated through extensive testing with professional interviewers and hiring managers. While no AI system is perfect, users report that our feedback closely matches the input they receive from human interviewers, with the added benefit of more detailed, objective analysis.",
    },
    {
      question: "Can I practice for different types of interviews?",
      answer:
        "Absolutely! Elevate supports various interview formats, including behavioral, technical, case study, and situational interviews. You can also practice specific interview stages, such as initial screenings, technical assessments, or final rounds.",
    },
    {
      question: "Is my interview data private and secure?",
      answer:
        "Yes, your privacy is extremely important to us. All interview data is encrypted, and we never share your personal information or interview recordings with third parties. You can delete your interview data at any time from your account settings.",
    },
    {
      question: "Can I use Elevate for team training?",
      answer:
        "Yes! Our Team plan is perfect for career coaches, HR departments, and educational institutions. You can manage multiple user accounts, track progress, and share interview insights to improve your team's interviewing skills collectively.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, all paid plans include a 7-day free trial with full access to all features. No credit card is required for the Free plan, which gives you access to basic features indefinitely.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20" id="faq">
      <div className="container max-w-6xl mx-auto px-2 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
            Everything you need to know about Elevate and how it can help you
            ace your next interview.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <Button
                  variant="ghost"
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </Button>
                <div
                  className={`px-6 overflow-hidden transition-all ${
                    openIndex === index
                      ? "max-h-[500px] pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Still have questions? We&apos;re here to help.
          </p>
          <Button className="mt-4">Contact Support</Button>
        </div>
      </div>
    </section>
  );
}
