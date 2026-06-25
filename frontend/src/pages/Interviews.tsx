const categories = ["HR", "Technical", "Coding", "Behavioral", "System Design"];

export function Interviews() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-lg p-6">
        <h1 className="text-2xl font-bold">AI Interview Generator</h1>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <input className="input" placeholder="Company name" />
          <input className="input" placeholder="Job role" />
          <button className="btn-primary">Generate questions</button>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {categories.map((category) => (
          <div key={category} className="glass rounded-lg p-4">
            <h3 className="font-semibold">{category}</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-slate-600 dark:text-slate-300">
              <li>Walk me through a relevant project.</li>
              <li>What tradeoff did you make and why?</li>
              <li>How would you improve it now?</li>
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
}
