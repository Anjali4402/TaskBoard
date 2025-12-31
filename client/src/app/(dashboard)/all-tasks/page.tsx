import AllTasks from "@/components/all-task/AllTasks";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";
import { Plus, Search } from "lucide-react";

const AllTaskPage = () => {
  return (
    <div className="relative flex h-full flex-1 flex-col overflow-hidden">
      <header className="sticky top-0 z-10 flex-shrink-0 border-b border-white/5 py-6 backdrop-blur">
        <div className="flex flex-col gap-6">
          {/* <!-- Title & Main Action --> */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                All Tasks
              </h2>
              <p className="text-sm text-[#92c9ad]">
                Manage and track your team's productivity across all projects.
              </p>
            </div>
            <button className="bg-green-light text-background-dark flex h-10 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold shadow-[0_0_15px_rgba(19,236,128,0.25)] transition-all hover:bg-[#0fd673] hover:shadow-[0_0_20px_rgba(19,236,128,0.4)]">
              <Plus className="size-5" />
              <span>New Task</span>
            </button>
          </div>
          {/* <!-- Toolbar: Search, Filters, View Toggle --> */}
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            {/* <!-- Search & Filters --> */}
            <div className="flex flex-1 flex-col gap-4 md:flex-row">
              {/* <!-- Search --> */}
              <div className="relative w-full md:max-w-xs">
                <span className="material-symbols-outlined absolute top-1/2 left-3 -translate-y-1/2 text-[20px] text-gray-400">
                  <Search className="size-4 text-gray-400" />
                </span>
                <input
                  className="bg-surface-dark focus:border-primary/50 focus:ring-primary/50 hover:bg-surface-dark-highlight w-full rounded-lg border border-white/10 py-2.5 pr-4 pl-10 text-sm text-white placeholder-gray-500 transition-all focus:ring-1 focus:outline-none"
                  placeholder="Search tasks..."
                  type="text"
                />
              </div>
              {/* <!-- Filter Chips --> */}
              <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <button className="bg-surface-dark hover:bg-surface-dark-highlight flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm whitespace-nowrap text-white transition-colors">
                  <span>Status</span>
                  <IoIosArrowDown className="size-4 text-gray-400" />
                </button>
                <button className="bg-surface-dark hover:bg-surface-dark-highlight flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm whitespace-nowrap text-white transition-colors">
                  <span>Target</span>
                  <IoIosArrowDown className="size-4 text-gray-400" />
                </button>
                <button className="bg-surface-dark hover:bg-surface-dark-highlight flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm whitespace-nowrap text-white transition-colors">
                  <span>Priority</span>
                  <IoIosArrowDown className="size-4 text-gray-400" />
                </button>
                <button className="bg-surface-dark hover:bg-surface-dark-highlight flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm whitespace-nowrap text-white transition-colors">
                  <span>Date</span>
                  <IoIosArrowDown className="size-4 text-gray-400" />
                </button>
                <button className="text-primary ml-auto flex items-center gap-1 rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors hover:text-white md:ml-0">
                  <IoFilter className="size-4 text-gray-400" />
                  <span className="hidden text-gray-400 sm:inline">
                    More Filters
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- View Toggle --> */}
            <div className="bg-surface-dark flex flex-shrink-0 self-start rounded-lg border border-white/5 p-1 md:self-auto">
              <button className="bg-surface-dark-highlight flex items-center gap-2 rounded px-3 py-1.5 text-xs font-medium text-white shadow transition-all">
                <FaListUl className="size-4 text-gray-400" />
                List
              </button>
              <button className="flex items-center gap-2 rounded px-3 py-1.5 text-xs font-medium text-gray-400 transition-all hover:text-white">
                <MdOutlineGridView className="size-4 text-gray-400" />
                Grid
              </button>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="mb-2 grid grid-cols-12 gap-4 border-b border-white/10 px-4 py-3 text-xs font-medium tracking-wider text-gray-400 uppercase">
          <div className="col-span-5 pl-8 md:col-span-4">Task Name</div>
          <div className="col-span-2 hidden md:block">Target Type</div>
          <div className="col-span-3 md:col-span-2">Status</div>
          <div className="col-span-2 hidden lg:block">Due Date</div>
          <div className="col-span-4 pr-4 text-right md:col-span-3 lg:col-span-2">
            Assignee
          </div>
        </div>
      </div>

      <AllTasks />
    </div>
  );
};

export default AllTaskPage;
