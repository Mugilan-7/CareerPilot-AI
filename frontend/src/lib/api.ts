import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "/api",
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("careerpilot_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export type ResumeInsight = {
  atsScore: number;
  readabilityScore: number;
  attentionScore: number;
  riskScore: number;
  missingSkills: string[];
  strengths: string[];
  suggestions: string[];
};

export async function analyzeResume(file: File): Promise<ResumeInsight> {
  const form = new FormData();
  form.append("file", file);
  const { data } = await api.post<ResumeInsight>("/resumes/analyze", form);
  return data;
}
