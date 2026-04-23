import React, { useMemo, useState } from 'react';
import { TaskSummary, QuickActions } from '@group/feature-x';
import { ActivityTimeline, StatusInsights } from '@group/feature-y';

const INITIAL_TASKS = [
  { id: 1, title: 'Setup workspace', done: true },
  { id: 2, title: 'Create shared packages', done: false },
  { id: 3, title: 'Integrate features', done: false }
];

const INITIAL_EVENTS = [
  { id: 'e1', message: 'Repository created', date: '2026-04-10' },
  { id: 'e2', message: 'Feature planning complete', date: '2026-04-12' },
  { id: 'e3', message: 'System assembly started', date: '2026-04-20' }
];

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const events = useMemo(() => INITIAL_EVENTS, []);

  function handleAdd() {
    setTasks((prev) => {
      const nextId = prev.length + 1;
      return [...prev, { id: nextId, title: `New Task ${nextId}`, done: false }];
    });
  }

  function handleCompleteAll() {
    setTasks((prev) => prev.map((task) => ({ ...task, done: true })));
  }

  function handleReset() {
    setTasks(INITIAL_TASKS);
  }

  const done = tasks.filter((task) => task.done).length;
  const risk = done === tasks.length ? 'Low' : 'Medium';

  return (
    <main className="system-shell">
      <header className="system-header">
        <span className="system-kicker">Monorepo System / Shadcn-inspired UI</span>
        <h1>Monorepo System Assembly</h1>
        <p>
          Individual layer composing group packages only. The interface now uses a
          cleaner, card-based visual style inspired by shadcn/ui.
        </p>
      </header>

      <section className="system-grid">
        <TaskSummary tasks={tasks} />
        <QuickActions
          onAdd={handleAdd}
          onCompleteAll={handleCompleteAll}
          onReset={handleReset}
        />
        <ActivityTimeline events={events} />
        <StatusInsights health="Stable" risk={risk} />
      </section>
    </main>
  );
}
