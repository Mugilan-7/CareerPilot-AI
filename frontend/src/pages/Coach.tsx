import { Send } from "lucide-react";

const messages = [
  ["AI Coach", "Your resume is strong for backend roles. Add production metrics and system design depth before applying to senior-track openings."],
  ["You", "How do I prepare for HR rounds?"],
  ["AI Coach", "Prepare crisp stories for ownership, conflict, failure, salary expectations, and why this company. Keep each answer under two minutes."]
];

export function Coach() {
  return (
    <section className="glass mx-auto max-w-4xl rounded-lg p-6">
      <h1 className="text-2xl font-bold">AI Career Coach</h1>
      <div className="mt-6 space-y-4">
        {messages.map(([sender, text]) => (
          <div key={text} className={`max-w-[85%] rounded-lg p-4 ${sender === "You" ? "ml-auto bg-slate-950 text-white dark:bg-sky-400 dark:text-slate-950" : "bg-white/80 dark:bg-white/10"}`}>
            <p className="text-xs font-semibold opacity-70">{sender}</p>
            <p className="mt-1 text-sm leading-6">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        <input className="input" placeholder="Ask about resumes, placements, interviews, salary negotiation..." />
        <button className="btn-primary px-3" aria-label="Send"><Send className="size-4" /></button>
      </div>
    </section>
  );
}
