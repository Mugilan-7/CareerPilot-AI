import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Shell } from "./components/Shell";
import { Admin } from "./pages/Admin";
import { Analyzer } from "./pages/Analyzer";
import { Builder } from "./pages/Builder";
import { Coach } from "./pages/Coach";
import { Dashboard } from "./pages/Dashboard";
import { GithubAnalyzer } from "./pages/GithubAnalyzer";
import { Interviews } from "./pages/Interviews";
import { JobMatcher } from "./pages/JobMatcher";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Shell />}>
          <Route index element={<Dashboard />} />
          <Route path="analyzer" element={<Analyzer />} />
          <Route path="builder" element={<Builder />} />
          <Route path="matcher" element={<JobMatcher />} />
          <Route path="coach" element={<Coach />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="github" element={<GithubAnalyzer />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
