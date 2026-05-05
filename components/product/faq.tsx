"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes the SilkDream Comforter different from other comforters?",
    answer:
      "Unlike bulky comforters, the SilkDream Comforter is filled with natural mulberry silk that gently drapes around your body. It's lightweight, breathable, and naturally temperature-regulating for a more balanced, comfortable sleep.",
  },
  {
    question: "Will it keep me too hot while I sleep?",
    answer:
      "No. Silk naturally adapts to your body temperature, keeping you cool in summer and warm in winter.",
  },
  {
    question: "Do I need a duvet cover?",
    answer:
      "You can use one if you prefer, but it's not required. The fabric is soft and gentle on the skin.",
  },
  {
    question: "Will the filling shift or clump over time?",
    answer:
      "No. Silk fibers are naturally long and continuous, helping maintain an even distribution over time.",
  },
  {
    question: "What's inside the comforter?",
    answer:
      "It's filled with 100% natural mulberry silk, known for its breathability and softness.",
  },
  {
    question: "Is it good for sensitive skin?",
    answer:
      "Yes. It's naturally hypoallergenic, breathable, and gentle on sensitive skin.",
  },
  {
    question: "How thick or heavy is it?",
    answer:
      "It's lightweight and breathable, yet provides a soft, cozy warmth without feeling bulky.",
  },
  {
    question: "Can I use it all year round?",
    answer:
      "Yes, it's designed for year-round comfort thanks to its natural temperature-regulating properties.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-semibold text-center text-foreground mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
