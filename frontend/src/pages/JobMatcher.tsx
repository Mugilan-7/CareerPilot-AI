import { Wand2 } from "lucide-react";

export function JobMatcher() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="glass rounded-lg p-6">
        <h1 className="text-2xl font-bold">AI Job Matcher</h1>
        <textarea className="input mt-5 min-h-72" placeholder="Paste job description..." />
        <button className="btn-primary mt-4"><Wand2 className="size-4" /> Generate match</button>
      </section>
      <section className="glass rounded-lg p-6">
        <p className="text-sm text-slate-500">Match percentage</p>
        <p className="mt-2 text-6xl font-bold">84%</p>
        <div className="mt-6 grid gap-4">
          {["Missing: Kafka streams, Kubernetes probes", "Salary prediction: INR 12-18 LPA", "Roadmap: DSA revision, system design, cloud deployment"].map((item) => (
            <div key={item} className="rounded-lg bg-white/70 p-4 text-sm dark:bg-white/10">{item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
