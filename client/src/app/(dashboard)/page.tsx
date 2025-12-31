import TodaysTaskAnalytics from "@/components/today-task/TodaysTaskAnalytics";
import TodaysTasks from "@/components/today-task/TodaysTasks";
import { Calendar } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Today&apos;s Tasks
            </h2>
            <span className="text-text-secondary rounded bg-[#234836] px-2 py-1 text-xs font-semibold tracking-wider uppercase">
              Tuesday
            </span>
          </div>
          <p className="text-text-secondary text-sm font-normal">
            Good Morning, Alex. You have 5 pending tasks for today.
          </p>
        </div>
        <div className="text-text-secondary flex items-center gap-2 rounded-lg border border-[#234836] bg-[#1a2c24] px-3 py-1.5 text-sm">
          <Calendar className="text-primary text-[18px]" />
          <span>Oct 24, 2023</span>
        </div>
      </div>

      <TodaysTaskAnalytics />

      <TodaysTasks />
    </div>
  );
};

export default Home;
