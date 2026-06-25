import { motion } from "framer-motion";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AlertTriangle, ArrowRight, CheckCircle2, FileText, Target } from "lucide-react";
import { MetricCard } from "../components/MetricCard";
import { kpis, radar, roadmap, scoreTrend } from "../lib/mockData";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-lg p-6 md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">CareerPilot AI</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-6xl">AI career intelligence for placement-ready resumes.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Analyze resumes, simulate recruiter attention, map skill gaps against top companies, generate interviews, and track readiness from one command center.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn-primary" href="/analyzer">Analyze resume <ArrowRight className="size-4" /></a>
              <a className="btn-secondary" href="/coach">Ask AI coach</a>
            </div>
          </div>
        </motion.div>
        <div className="glass rounded-lg p-6">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-semibold">Placement Readiness</h3>
            <Target className="size-5 text-sky-500" />
          </div>
          <div className="relative mx-auto grid size-56 place-items-center rounded-full bg-conic-gradient">
            <div className="grid size-40 place-items-center rounded-full bg-white text-center dark:bg-slate-950">
              <div>
                <p className="text-5xl font-bold">72%</p>
                <p className="text-sm text-slate-500">probability</p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm">
            {["Resume strong", "GitHub needs consistency", "LinkedIn keywords missing"].map((item, index) => (
              <div key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                {index === 1 ? <AlertTriangle className="size-4 text-amber-500" /> : <CheckCircle2 className="size-4 text-emerald-500" />}
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => <MetricCard key={kpi.label} {...kpi} />)}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="glass rounded-lg p-5">
          <h3 className="mb-4 font-semibold">Resume Evolution Timeline</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={scoreTrend}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="ats" stroke="#0284c7" fill="#7dd3fc" fillOpacity={0.35} />
                <Area type="monotone" dataKey="skills" stroke="#059669" fill="#86efac" fillOpacity={0.25} />
                <Area type="monotone" dataKey="quality" stroke="#7c3aed" fill="#c4b5fd" fillOpacity={0.22} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass rounded-lg p-5">
          <h3 className="mb-4 font-semibold">AI Skill Gap Radar</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <Radar name="You" dataKey="user" stroke="#0284c7" fill="#0284c7" fillOpacity={0.25} />
                <Radar name="Google" dataKey="google" stroke="#16a34a" fill="#16a34a" fillOpacity={0.12} />
                <Radar name="Amazon" dataKey="amazon" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.12} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {roadmap.map((item) => (
          <div key={item.title} className="glass rounded-lg p-5">
            <FileText className="mb-4 size-5 text-sky-500" />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
