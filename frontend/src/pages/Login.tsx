import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-[linear-gradient(135deg,#f8fafc,#e0f2fe,#eef2ff)] px-4 dark:bg-[linear-gradient(135deg,#020617,#0f172a,#111827)]">
      <section className="glass w-full max-w-md rounded-lg p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-lg bg-slate-950 text-white dark:bg-sky-400 dark:text-slate-950"><Sparkles className="size-5" /></div>
          <div>
            <h1 className="font-bold">CareerPilot AI</h1>
            <p className="text-sm text-slate-500">Sign in to your workspace</p>
          </div>
        </div>
        <div className="space-y-3">
          <input className="input" placeholder="Email" type="email" />
          <input className="input" placeholder="Password" type="password" />
          <button className="btn-primary w-full">Login</button>
          <button className="btn-secondary w-full">Continue with Google</button>
        </div>
        <div className="mt-5 flex justify-between text-sm text-slate-500">
          <Link to="/">Create account</Link>
          <Link to="/">Forgot password?</Link>
        </div>
      </section>
    </main>
  );
}
