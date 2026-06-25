import { GripVertical, Save, Download } from "lucide-react";

const sections = ["Profile", "Experience", "Projects", "Skills", "Education", "Certifications"];

export function Builder() {
  return (
    <div className="grid gap-6 xl:grid-cols-[.8fr_1.2fr]">
      <section className="glass rounded-lg p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">AI Resume Builder</h1>
          <button className="btn-secondary"><Save className="size-4" /> Auto saved</button>
        </div>
        <div className="mt-5 space-y-3">
          {sections.map((section) => (
            <div key={section} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/70 p-3 dark:border-white/10 dark:bg-white/10">
              <GripVertical className="size-4 text-slate-400" />
              <span className="font-medium">{section}</span>
            </div>
          ))}
        </div>
        <button className="btn-primary mt-5 w-full"><Download className="size-4" /> Export ATS PDF</button>
      </section>
      <section className="glass rounded-lg p-6">
        <div className="mx-auto max-w-2xl rounded-sm bg-white p-8 text-slate-950 shadow-2xl">
          <h2 className="text-3xl font-bold">Mugilan D</h2>
          <p className="mt-1 text-sm text-slate-600">Full Stack Developer | Spring Boot | React | PostgreSQL</p>
          <div className="mt-6 border-t pt-4">
            <h3 className="font-bold uppercase tracking-wide">Professional Summary</h3>
            <p className="mt-2 text-sm leading-6">Engineer building scalable APIs, AI product workflows, and production dashboards with measurable delivery impact.</p>
          </div>
          <div className="mt-5">
            <h3 className="font-bold uppercase tracking-wide">Projects</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
              <li>Built CareerPilot AI to automate ATS scoring, skill gap detection, and interview preparation.</li>
              <li>Designed modular REST APIs with JWT security, PostgreSQL persistence, and Cloudinary storage.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
