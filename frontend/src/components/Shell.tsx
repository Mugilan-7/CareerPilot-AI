import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, Bot, BriefcaseBusiness, FileScan, Gauge, Github, LayoutDashboard, LogOut, Moon, Shield, Sparkles, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/analyzer", label: "Analyzer", icon: FileScan },
  { to: "/builder", label: "Builder", icon: Sparkles },
  { to: "/matcher", label: "Matcher", icon: BriefcaseBusiness },
  { to: "/coach", label: "Coach", icon: Bot },
  { to: "/interviews", label: "Interview", icon: Gauge },
  { to: "/github", label: "GitHub", icon: Github },
  { to: "/admin", label: "Admin", icon: Shield }
];

export function Shell() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_34%),linear-gradient(135deg,#f8fafc,#eef2ff_55%,#ecfeff)] text-slate-900 dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,.22),transparent_32%),linear-gradient(135deg,#020617,#111827_55%,#0f172a)] dark:text-slate-100">
      <aside className="fixed inset-y-4 left-4 z-30 hidden w-64 rounded-lg glass p-4 lg:block">
        <div className="mb-8 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-lg bg-slate-950 text-white dark:bg-sky-400 dark:text-slate-950">
            <Sparkles className="size-5" />
          </div>
          <div>
            <h1 className="font-bold tracking-tight">CareerPilot AI</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">Career intelligence</p>
          </div>
        </div>
        <nav className="space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive ? "bg-slate-950 text-white dark:bg-sky-400 dark:text-slate-950" : "text-slate-600 hover:bg-white/80 dark:text-slate-300 dark:hover:bg-white/10"
                }`
              }
            >
              <Icon className="size-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-white/50 bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">Premium AI SaaS</p>
              <h2 className="text-lg font-semibold">Resume and career command center</h2>
            </div>
            <div className="flex items-center gap-2">
              <button aria-label="Toggle theme" onClick={() => setDark((value) => !value)} className="btn-secondary px-3">
                {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
              <NavLink to="/login" className="btn-secondary">
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Login</span>
              </NavLink>
            </div>
          </div>
        </header>
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-7xl px-4 py-6">
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
