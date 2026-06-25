import { Activity, Database, Users } from "lucide-react";
import { MetricCard } from "../components/MetricCard";

export function Admin() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Users" value="12,480" delta="+18%" />
        <MetricCard label="AI Calls" value="89k" delta="+31%" />
        <MetricCard label="Uploads" value="24k" delta="+12%" />
      </div>
      <section className="grid gap-6 lg:grid-cols-3">
        {[
          [Users, "User Management", "Roles, verification, OAuth identities, account status."],
          [Database, "Job Database", "Descriptions, salary ranges, skill taxonomies, market data."],
          [Activity, "API Monitoring", "Latency, Gemini usage, Cloudinary uploads, error traces."]
        ].map(([Icon, title, text]) => (
          <div key={String(title)} className="glass rounded-lg p-5">
            <Icon className="size-5 text-sky-500" />
            <h3 className="mt-4 font-semibold">{String(title)}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{String(text)}</p>
          </div>
        ))}
      </section>
      <section className="glass rounded-lg p-5">
        <h2 className="font-semibold">System Logs</h2>
        <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-white/10">
          {["resume.analyzed latency=812ms status=200", "gemini.prompt tokens=1842 status=200", "cloudinary.upload type=pdf status=201"].map((log) => (
            <div key={log} className="border-b border-slate-200 bg-white/60 px-4 py-3 font-mono text-xs last:border-b-0 dark:border-white/10 dark:bg-white/5">{log}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
