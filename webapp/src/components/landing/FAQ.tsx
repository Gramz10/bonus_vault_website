import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are bank bonuses?",
    answer:
      "Bank bonuses are cash rewards banks offer when you open a new account and complete simple requirements — like setting up direct deposit or maintaining a balance. Many offers range from $100 to $500+ per account.",
  },
  {
    question: "How does Bonus Vault help me earn these bonuses?",
    answer:
      "Bonus Vault brings all the best bank bonuses into one place and shows you exactly what to do step-by-step. You can track your progress, stay on top of deadlines, and never miss a payout.",
  },
  {
    question: "Do I need to connect my bank account?",
    answer:
      "No — and that's intentional. Bonus Vault does not require any bank connections or sensitive information. You apply directly with each bank using secure links.",
  },
  {
    question: "How do I actually get paid?",
    answer:
      "Once you complete a bank's requirements (like deposits or transactions), the bank sends the bonus directly to your account. Bonus Vault helps you stay organized so you don't miss any steps.",
  },
  {
    question: "How much money can I realistically make?",
    answer:
      "Most users earn a few hundred to over $1,000 per year, depending on how many bonuses they complete. Some high-value offers can pay $300–$500+ each.",
  },
  {
    question: "Are these offers legit?",
    answer:
      "Yes — these are real promotions offered directly by banks. Bonus Vault simply helps you find, understand, and complete them more easily.",
  },
  {
    question: "Does opening multiple bank accounts hurt my credit?",
    answer:
      "Most bank accounts do not impact your credit score because they don't require a hard credit pull. However, it's always best to check the terms of each offer.",
  },
  {
    question: "How often are new bonuses added?",
    answer:
      "New offers are added regularly, and Bonus Vault keeps everything up to date so you always see the best available opportunities.",
  },
  {
    question: "What do I get with Premium?",
    answer:
      "Premium unlocks step-by-step instructions for every bonus, direct application links, progress tracking tools, and alerts for deadlines and new high-value offers.",
  },
  {
    question: "Is Bonus Vault worth it?",
    answer:
      "Most users earn back the cost of the app with just one bonus — and everything after that is pure upside.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-border/40 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display font-semibold text-foreground text-base group-hover:text-primary transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 group-hover:text-primary"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="pb-5 text-muted-foreground font-sans text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 px-4 relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-primary text-xs font-semibold uppercase tracking-wider font-sans text-center">
          FAQ
        </p>

        {/* Headline */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold font-display text-foreground text-center leading-tight">
          Common Questions
        </h2>

        {/* FAQ list */}
        <div className="mt-14 max-w-3xl mx-auto bg-card border border-border/50 rounded-xl px-6 md:px-8 divide-y-0">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-muted-foreground/60 font-sans max-w-xl mx-auto">
          Bonus amounts and requirements vary by bank. Always verify details on the bank's official website.
        </p>
      </div>
    </section>
  );
}
