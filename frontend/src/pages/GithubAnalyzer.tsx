import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { projects } from "../lib/mockData";

const repoData = [
  { name: "README", score: 76 },
  { name: "Commits", score: 68 },
  { name: "Testing", score: 61 },
  { name: "Docs", score: 73 },
  { name: "Diversity", score: 84 }
];

export function GithubAnalyzer() {
  return (
    <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
      <section className="glass rounded-lg p-6">
        <h1 className="text-2xl font-bold">GitHub Portfolio Analyzer</h1>
        <div className="mt-5 flex gap-2">
          <input className="input" placeholder="GitHub username" />
          <button className="btn-primary">Connect</button>
        </div>
        <p className="mt-8 text-sm text-slate-500">GitHub Score</p>
        <p className="mt-1 text-6xl font-bold">81</p>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={repoData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#0284c7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="glass rounded-lg p-6">
        <h2 className="font-semibold">AI Project Recommendations</h2>
        <div className="mt-5 space-y-3">
          {projects.map((project) => (
            <div key={project.name} className="rounded-lg bg-white/75 p-4 dark:bg-white/10">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{project.name}</h3>
                <span className="text-sm font-bold text-sky-600 dark:text-sky-300">{project.value}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.difficulty} · {project.stack}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
