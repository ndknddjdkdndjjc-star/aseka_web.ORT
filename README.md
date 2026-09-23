# ORTLY — Personal ORT Preparation Planner

A complete React + Vite + TypeScript app for organizing ORT (Kyrgyzstan) exam prep:
daily tasks, math topic tracking, interactive tests, a mistakes notebook, a study
calendar, progress analytics (Recharts), goals, and a Pomodoro study timer — all
persisted in `localStorage`.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Tech

- React 18 + TypeScript + Vite
- React Router for navigation (sidebar on desktop, bottom nav on mobile)
- Tailwind CSS for styling
- Lucide React for icons
- Recharts for the weekly study-activity chart
- `localStorage` (via `useLocalStorage`) for all persistence — no backend needed

## Project structure

```
src/
  components/   reusable UI: Sidebar, BottomNav, TaskCard, ProgressCard,
                SubjectCard, Countdown, Mascot, Timer, Calendar, StatCard, Notification
  pages/        Dashboard, Subjects, Mathematics, Tests, Mistakes,
                CalendarPage, Progress, Goals, StudyTimer, Settings
  context/      AppContext.tsx — all shared state + actions
  data/         subjects.ts, topics.ts, questions.ts, tests.ts, dailyTasks.ts
  hooks/        useLocalStorage.ts, useTimer.ts
  types/        index.ts — full data model
```

All demo content (math topics, test questions, today's tasks) is seeded on first
run and can be freely edited from within the app — everything you change is
saved to `localStorage` and survives a refresh.
