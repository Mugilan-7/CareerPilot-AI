# CareerPilot AI

CareerPilot AI is a premium AI-powered resume analyzer and career intelligence platform built as a full-stack portfolio project.

## Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, React Query, Axios, Recharts, Lucide, Hero Icons
- Backend: Spring Boot 3, Spring Security, JWT, OAuth2 client wiring, JPA/Hibernate, Validation, Swagger
- Database: PostgreSQL
- AI: Gemini service boundary
- Storage: Cloudinary service boundary
- Deployment: Vercel frontend, Railway/Render backend, Neon PostgreSQL, Cloudinary

## Features

- JWT login/register, Google OAuth integration point, forgot password, email verification, profile-ready user model
- Resume upload with ATS, grammar, keyword, formatting, skill gap, readability, attention, risk, and AI suggestion scoring
- Resume builder with ATS template preview, autosave-ready structure, export action
- Job matcher with match percentage, missing skills, salary prediction, and learning roadmap
- Career coach chatbot UI powered by backend AI service boundary
- Interview generator for HR, technical, coding, behavioral, and system design questions
- Recruiter vision simulator concepts through attention scoring and heatmap-ready API contract
- Resume evolution timeline with persisted score history
- Skill gap radar, growth simulator, risk detector, GitHub analyzer, project recommendations, LinkedIn optimization-ready screens
- Admin dashboard for user management, resume analytics, AI usage, logs, and API monitoring
- PWA manifest, responsive SaaS UI, dark/light mode, skeleton-ready components, error boundary, toast notifications

## Local Development

```bash
cd CareerPilotAI
docker compose up --build
```

Frontend: `http://localhost:5173`

Backend Swagger: `http://localhost:8080/api/swagger-ui.html`

Without Docker:

```bash
cd backend
mvn spring-boot:run
```

```bash
cd frontend
npm install
npm run dev
```

## Environment

Copy `.env.example` and configure:

- `DATABASE_URL`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`
- `JWT_SECRET`
- `GEMINI_API_KEY`
- `CLOUDINARY_URL`
- `VITE_API_URL`

## API Highlights

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `POST /api/auth/verify-email`
- `POST /api/resumes/analyze`
- `GET /api/resumes/timeline`
- `POST /api/resumes/match-job`
- `POST /api/resumes/career-roadmap`
- `POST /api/resumes/interviews`
- `GET /api/admin/metrics`

## Production Notes

- Replace deterministic AI fallback in `GeminiCareerAiService` with Gemini JSON-mode calls after adding `GEMINI_API_KEY`.
- Configure Google OAuth client registration in Spring properties for real Google login.
- Use Neon PostgreSQL for hosted database and Cloudinary for resume storage.
- Deploy frontend to Vercel with `VITE_API_URL` set to the backend URL.
- Deploy backend to Railway or Render with PostgreSQL and secrets configured.
