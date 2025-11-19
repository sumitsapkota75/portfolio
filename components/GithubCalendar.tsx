"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

const GITHUB_USERNAME = "sumitsapkota75";

export default function GithubCalendarSection() {
  const year = 2023; // 👈 change this or make it a prop

  const selectYear = useMemo(
    () => (contributions: unknown[]) =>
      contributions.filter((day) => {
        const date = new Date(day.date);
        return date.getFullYear() === year;
      }),
    [year]
  );

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
      <p className="mb-3 text-xs text-neutral-400">
        GitHub contributions in {year}.
      </p>
      <div className="w-full overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-4">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          transformData={selectYear}
          hideTotalCount={false}
          showWeekdayLabels
        />
      </div>
    </div>
  );
}
