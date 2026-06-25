import { motion } from "framer-motion";

type Props = {
  label: string;
  value: string;
  delta?: string;
};

export function MetricCard({ label, value, delta }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-lg p-5"
    >
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-3xl font-bold text-slate-950 dark:text-white">{value}</p>
        {delta ? <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">{delta}</span> : null}
      </div>
    </motion.div>
  );
}
