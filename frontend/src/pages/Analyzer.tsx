import { useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { Download, FileUp, ShieldAlert, Sparkles } from "lucide-react";
import { analyzeResume, ResumeInsight } from "../lib/api";

const fallback: ResumeInsight = {
  atsScore: 86,
  readabilityScore: 82,
  attentionScore: 78,
  riskScore: 18,
  missingSkills: ["Kafka", "Redis", "System design case studies", "CI/CD metrics"],
  strengths: ["Strong Spring Boot experience", "Clear project ownership", "Good backend keyword density"],
  suggestions: ["Add quantified impact to each project", "Move core skills above education", "Reduce repeated action verbs", "Add deployment links and test coverage metrics"]
};

export function Analyzer() {
  const [result, setResult] = useState<ResumeInsight>(fallback);
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
    },
    maxFiles: 1,
    onDrop: async ([file]) => {
      if (!file) return;
      setLoading(true);
      try {
        setResult(await analyzeResume(file));
        toast.success("Resume analyzed");
      } catch {
        setResult(fallback);
        toast("Using demo AI report until backend keys are configured");
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <div className="grid gap-6 xl:grid-cols-[.85fr_1.15fr]">
      <section className="glass rounded-lg p-6">
        <h1 className="text-2xl font-bold">AI Resume Analyzer</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Upload PDF or DOCX to score ATS fit, grammar, formatting, keywords, risks, and recruiter attention.</p>
        <div {...getRootProps()} className={`mt-6 grid min-h-72 cursor-pointer place-items-center rounded-lg border-2 border-dashed p-6 text-center transition ${isDragActive ? "border-sky-400 bg-sky-50 dark:bg-sky-400/10" : "border-slate-300 dark:border-white/15"}`}>
          <input {...getInputProps()} />
          <div>
            <FileUp className="mx-auto size-12 text-sky-500" />
            <p className="mt-4 font-semibold">{loading ? "Analyzing..." : "Drop resume or browse"}</p>
            <p className="mt-2 text-sm text-slate-500">PDF/DOCX, stored with Cloudinary when backend credentials are set.</p>
          </div>
        </div>
        <button className="btn-primary mt-5 w-full"><Download className="size-4" /> Download AI report PDF</button>
      </section>
      <section className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            ["ATS", result.atsScore],
            ["Readability", result.readabilityScore],
            ["Attention", result.attentionScore],
            ["Risk", result.riskScore]
          ].map(([label, value]) => (
            <div key={label} className="glass rounded-lg p-4 text-center">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>
        <div className="glass rounded-lg p-5">
          <h3 className="flex items-center gap-2 font-semibold"><Sparkles className="size-5 text-sky-500" /> AI Suggestions</h3>
          <div className="mt-4 grid gap-3">
            {result.suggestions.map((item) => <div key={item} className="rounded-lg bg-white/70 p-3 text-sm dark:bg-white/10">{item}</div>)}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-lg p-5">
            <h3 className="font-semibold">Missing Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">{result.missingSkills.map((skill) => <span key={skill} className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800 dark:bg-amber-400/15 dark:text-amber-200">{skill}</span>)}</div>
          </div>
          <div className="glass rounded-lg p-5">
            <h3 className="flex items-center gap-2 font-semibold"><ShieldAlert className="size-5 text-rose-500" /> Resume Risk Detector</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Low risk. Watch for weak achievements, long gaps, repeated keywords, and unverifiable claims.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
