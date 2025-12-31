import React from "react";
import { PiCheckCircleBold } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";

const TodaysTaskAnalytics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="hover:border-green-light/50 flex flex-col gap-2 rounded-xl border border-[#234836] bg-[#1a2c24] p-6 transition-colors">
        <div className="flex items-start justify-between">
          <div className="text-green-light rounded-lg bg-[#234836] p-2">
            <PiCheckCircleBold className="size-5" />
          </div>
          <span className="flex items-center rounded bg-[#0bda46]/10 px-2 py-0.5 text-xs font-bold text-[#0bda46]">
            +15%
          </span>
        </div>
        <div>
          <p className="text-text-secondary mt-2 text-sm font-medium">
            Tasks Completed
          </p>
          <p className="mt-1 text-3xl font-bold text-white">12</p>
        </div>
      </div>
      <div className="hover:border-green-light/50 flex flex-col gap-2 rounded-xl border border-[#234836] bg-[#1a2c24] p-6 transition-colors">
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-[#234836] p-2 text-blue-400">
            <FaArrowTrendUp className="size-5" />
          </div>
          <span className="flex items-center rounded bg-[#0bda46]/10 px-2 py-0.5 text-xs font-bold text-[#0bda46]">
            +2%
          </span>
        </div>
        <div>
          <p className="text-text-secondary mt-2 text-sm font-medium">
            Productivity Score
          </p>
          <p className="mt-1 text-3xl font-bold text-white">85%</p>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#11221a]">
          <div
            className="h-full rounded-full bg-blue-400"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>
      <div className="hover:border-green-light/50 flex flex-col gap-2 rounded-xl border border-[#234836] bg-[#1a2c24] p-6 transition-colors">
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-[#234836] p-2 text-orange-400">
            <MdOutlinePendingActions className="size-5" />
          </div>
          <span className="text-text-secondary flex items-center rounded bg-[#234836] px-2 py-0.5 text-xs font-bold">
            0%
          </span>
        </div>
        <div>
          <p className="text-text-secondary mt-2 text-sm font-medium">
            Pending Tasks
          </p>
          <p className="mt-1 text-3xl font-bold text-white">5</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysTaskAnalytics;
