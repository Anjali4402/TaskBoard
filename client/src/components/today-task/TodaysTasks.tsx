import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa6";
import { FaRegCalendarXmark } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa6";

const TodaysTasks = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2 md:pb-0">
          <button className="bg-green-light shadow-green-light/20 flex h-9 shrink-0 items-center justify-center rounded-lg px-4 text-sm font-bold text-[#11221a] shadow-md">
            All
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-lg border border-transparent bg-[#234836] px-4 text-sm font-medium text-white transition-colors hover:border-gray-600 hover:bg-[#2f5e46]">
            Pending
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-lg border border-transparent bg-[#234836] px-4 text-sm font-medium text-white transition-colors hover:border-gray-600 hover:bg-[#2f5e46]">
            Completed
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-lg border border-transparent bg-[#234836] px-4 text-sm font-medium text-white transition-colors hover:border-gray-600 hover:bg-[#2f5e46]">
            Deferred
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-text-secondary text-sm">Filter by:</span>
          <button className="hover:text-green-light flex items-center gap-1 text-sm font-medium text-white transition-colors">
            Date Range
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* <!-- Task 1 --> */}
        <div className="group hover:border-green-light/30 relative grid cursor-pointer grid-cols-12 items-center gap-4 rounded-xl border border-white/5 bg-[#152b21] px-4 py-4 transition-all duration-200 hover:bg-[#1e3a2d] hover:shadow-lg">
          <div className="absolute top-1/2 left-4 flex -translate-y-1/2 items-center justify-center">
            <input
              className="bg-background-dark text-green-light focus:ring-offset-background-dark focus:ring-green-light/50 h-4 w-4 cursor-pointer rounded border-gray-600"
              type="checkbox"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center pl-8 md:col-span-4">
            <p className="group-hover:text-green-light mb-1 text-sm leading-none font-medium text-white transition-colors">
              Q3 Financial Report
            </p>
            <p className="text-xs text-gray-500">
              Review draft with finance team
            </p>
          </div>
          <div className="col-span-2 hidden items-center md:flex">
            <span className="inline-flex items-center rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400">
              Finance
            </span>
          </div>
          <div className="col-span-3 flex items-center md:col-span-2">
            <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-500"></div>
              <span className="text-xs font-medium text-yellow-500">
                In Progress
              </span>
            </div>
          </div>
          <div className="col-span-2 hidden items-center gap-2 text-sm text-gray-400 lg:flex">
            <FaRegCalendar className="size-4" />
            Oct 24
          </div>
          <div className="col-span-4 flex items-center justify-end gap-3 pr-2 md:col-span-3 lg:col-span-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="ring-background-dark inline-block h-8 w-8 rounded-full object-cover ring-2"
                data-alt="Female team member portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlOc-Lt_0ibEPg11u-cATneNxt1muctQerauCH51ofJMWcRl9Oa-lpn6r9DtaGsxazNYX8CUa1gm1bjbBECa717hbCTE-4sntZlMcEJj7XE9Toree2vtCkC3tf9nb9HPPloQ8PIUx1cGDCUMQU9CbLWwsNLvkLABp1qPN0LCgUJCGMmRDclT-L_OekCo6XetavBLWND8HJDH6fyhL2QW7tg4bcPQatti_VWkvplU5QRVbJiI7Tr3HPiYPnXYhhMI3-KoXbVix_lq9p"
              />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 opacity-0 transition-colors group-hover:opacity-100 hover:bg-white/10 hover:text-white">
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
        {/* <!-- Task 2 --> */}
        <div className="group hover:border-green-light/30 relative grid cursor-pointer grid-cols-12 items-center gap-4 rounded-xl border border-white/5 bg-[#152b21] px-4 py-4 transition-all duration-200 hover:bg-[#1e3a2d] hover:shadow-lg">
          <div className="absolute top-1/2 left-4 flex -translate-y-1/2 items-center justify-center">
            <input
              className="bg-background-dark text-green-light focus:ring-offset-background-dark focus:ring-green-light/50 h-4 w-4 cursor-pointer rounded border-gray-600"
              type="checkbox"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center pl-8 md:col-span-4">
            <p className="group-hover:text-green-light mb-1 text-sm leading-none font-medium text-white transition-colors">
              Homepage Hero Redesign
            </p>
            <p className="text-xs text-gray-500">
              Update graphics for holiday season
            </p>
          </div>
          <div className="col-span-2 hidden items-center md:flex">
            <span className="inline-flex items-center rounded border border-purple-500/20 bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400">
              Design
            </span>
          </div>
          <div className="col-span-3 flex items-center md:col-span-2">
            <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
              <span className="text-xs font-medium text-red-500">Urgent</span>
            </div>
          </div>
          <div className="col-span-2 hidden items-center gap-2 text-sm font-medium text-red-400 lg:flex">
            <FaRegCalendarXmark className="size-4" />
            Tomorrow
          </div>
          <div className="col-span-4 flex items-center justify-end gap-3 pr-2 md:col-span-3 lg:col-span-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="ring-background-dark inline-block h-8 w-8 rounded-full object-cover ring-2"
                data-alt="Male team member portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMvlbX2l5DJShKl_GAZiuQ-b1uu7gvl92e7SOMrCR9dp4IvSD93Ixeuzsyjh8MYVBnVL4u2ggTXpp9Sh_w5c1JU3tila33UN4lfvxFchDdYo3rmxP6bBM6rIfP8tCv56EpL2UUcmgGwpJqnzUxrKZxKDzjKW6isIW9ov9lw4Ev0P7LiBPgiypvtrMUQujaUvduq2gJDqW8jjDmwWszaYn3EDJtQx_23WGqzKOFZo0CHSsG0Odv5V3bZahH9UcicE_vvf2AjgcI0Wvg"
              />
              <img
                className="ring-background-dark inline-block h-8 w-8 rounded-full object-cover ring-2"
                data-alt="Male team member portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCwQ8jBgbvOpLbwVyT-R1T9xJ5ynTkHCi1U_WSptI9-Atmz9LWSjMgxkewaIsg17B_Y89ikuT_vDPgCThbQDjcFLxn7PlzQTb34UEeFZz4QsTB7UX5RmslBa8FNjpk67uSwTX9t1O6Y1iBHbkJvBl8nA4hYpkX8utxWbvH-YNJ_L1EpBJ_PTBBO34dbtjqqpL_asB3qCvW4r8E8Ip2k1BveaB7SXH6GX7WsfIpGIkmN0nF14RmkbbeiykB_sC4fBWfpegwo5AJt1tO"
              />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 opacity-0 transition-colors group-hover:opacity-100 hover:bg-white/10 hover:text-white">
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
        {/* <!-- Task 3 --> */}
        <div className="group hover:border-green-light/30 relative grid cursor-pointer grid-cols-12 items-center gap-4 rounded-xl border border-white/5 bg-[#152b21] px-4 py-4 transition-all duration-200 hover:bg-[#1e3a2d] hover:shadow-lg">
          <div className="absolute top-1/2 left-4 flex -translate-y-1/2 items-center justify-center">
            <input
              // checked=""
              className="bg-background-dark text-green-light focus:ring-offset-background-dark focus:ring-green-light/50 h-4 w-4 cursor-pointer rounded border-gray-600"
              type="checkbox"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center pl-8 opacity-60 md:col-span-4">
            <p className="group-hover:text-green-light mb-1 text-sm leading-none font-medium text-white line-through transition-colors">
              Server Maintenance
            </p>
            <p className="text-xs text-gray-500">Monthly routine check</p>
          </div>
          <div className="col-span-2 hidden items-center opacity-60 md:flex">
            <span className="inline-flex items-center rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-400">
              DevOps
            </span>
          </div>
          <div className="col-span-3 flex items-center md:col-span-2">
            <div className="bg-green-light/10 border-green-light/20 flex items-center gap-2 rounded-full border px-2.5 py-1">
              <span className="material-symbols-outlined text-green-light text-[14px]">
                check
              </span>
              <span className="text-green-light text-xs font-medium">Done</span>
            </div>
          </div>
          <div className="col-span-2 hidden items-center gap-2 text-sm text-gray-500 opacity-60 lg:flex">
            <FaRegCalendarCheck className="size-4" />
            Oct 20
          </div>
          <div className="col-span-4 flex items-center justify-end gap-3 pr-2 md:col-span-3 lg:col-span-2">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="ring-background-dark flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2">
                AM
              </div>
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 opacity-0 transition-colors group-hover:opacity-100 hover:bg-white/10 hover:text-white">
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
        {/* <!-- Task 4 --> */}
        <div className="group hover:border-green-light/30 relative grid cursor-pointer grid-cols-12 items-center gap-4 rounded-xl border border-white/5 bg-[#152b21] px-4 py-4 transition-all duration-200 hover:bg-[#1e3a2d] hover:shadow-lg">
          <div className="absolute top-1/2 left-4 flex -translate-y-1/2 items-center justify-center">
            <input
              className="bg-background-dark text-green-light focus:ring-offset-background-dark focus:ring-green-light/50 h-4 w-4 cursor-pointer rounded border-gray-600"
              type="checkbox"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center pl-8 md:col-span-4">
            <p className="group-hover:text-green-light mb-1 text-sm leading-none font-medium text-white transition-colors">
              Update Privacy Policy
            </p>
            <p className="text-xs text-gray-500">
              Legal requirement compliance
            </p>
          </div>
          <div className="col-span-2 hidden items-center md:flex">
            <span className="inline-flex items-center rounded border border-orange-500/20 bg-orange-500/10 px-2 py-1 text-xs font-medium text-orange-400">
              Legal
            </span>
          </div>
          <div className="col-span-3 flex items-center md:col-span-2">
            <div className="flex items-center gap-2 rounded-full border border-gray-600/30 bg-gray-700/30 px-2.5 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
              <span className="text-xs font-medium text-gray-400">To Do</span>
            </div>
          </div>
          <div className="col-span-2 hidden items-center gap-2 text-sm text-gray-400 lg:flex">
            <FaRegCalendar className="size-4" />
            Oct 30
          </div>
          <div className="col-span-4 flex items-center justify-end gap-3 pr-2 md:col-span-3 lg:col-span-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="ring-background-dark inline-block h-8 w-8 rounded-full object-cover ring-2"
                data-alt="Portrait of a female legal advisor"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcUUR7krtiQiB5VhpK2i1r1Cl9fwlZ1WQGS06yo3y3ddxZdBXBJf4qvP8xY5kBLrYepTtfl2MO_Wi5P8hDmqikWpc1jvZe2vLCr3_DduTwP9xksfA94CE7ciiKyCilWP08Q7ot8Zb5M1DMmqRp5cw2ZgwjgCsgnIACy6NqfilwoRNN9Kfw4AFBpl6laMJFJZf2X1YEpEqXa-9xnPQ7y6ajZ4CWJFs4NPW3iqT0cZFTz8c8GSQgHobc84umn9YkranX8BV6oXZBh-qt"
              />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 opacity-0 transition-colors group-hover:opacity-100 hover:bg-white/10 hover:text-white">
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
        {/* <!-- Task 5 --> */}
        <div className="group hover:border-green-light/30 relative grid cursor-pointer grid-cols-12 items-center gap-4 rounded-xl border border-white/5 bg-[#152b21] px-4 py-4 transition-all duration-200 hover:bg-[#1e3a2d] hover:shadow-lg">
          <div className="absolute top-1/2 left-4 flex -translate-y-1/2 items-center justify-center">
            <input
              className="bg-background-dark text-green-light focus:ring-offset-background-dark focus:ring-green-light/50 h-4 w-4 cursor-pointer rounded border-gray-600"
              type="checkbox"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center pl-8 md:col-span-4">
            <p className="group-hover:text-green-light mb-1 text-sm leading-none font-medium text-white transition-colors">
              Client Onboarding - Beta Co.
            </p>
            <p className="text-xs text-gray-500">
              Setup accounts and permissions
            </p>
          </div>
          <div className="col-span-2 hidden items-center md:flex">
            <span className="inline-flex items-center rounded border border-green-500/20 bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
              Customer
            </span>
          </div>
          <div className="col-span-3 flex items-center md:col-span-2">
            <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-500"></div>
              <span className="text-xs font-medium text-yellow-500">
                In Progress
              </span>
            </div>
          </div>
          <div className="col-span-2 hidden items-center gap-2 text-sm text-gray-400 lg:flex">
            <FaRegCalendar className="size-4" />
            Oct 26
          </div>
          <div className="col-span-4 flex items-center justify-end gap-3 pr-2 md:col-span-3 lg:col-span-2">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="ring-background-dark inline-block h-8 w-8 rounded-full object-cover ring-2"
                data-alt="Male account manager portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkSiTmfxqGCVKF_P30Q7HIqF9rQ9Jp3lv6Xi5UJmiwFzVALE_mMdtrNcaERPoDS5r9IyvzXNsjDkYiyJvdMmyJIAshYzy4tUa8OPKdA8YutDywDYevtIeS74z-ZCTm5reovR4pDb3bZ9bKL45iyd91ab3dGjUDm5aFehYFqjcpAu86dT5Qs5yADtnfx-6GuNLesoZeIjMKkIbt6iW3Gcm5Y2Vo9q_q4J925Wq2WhoB4hB1OklyXnWjIXwYv3EL0X9_jCdEZ9j28RQT"
              />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 opacity-0 transition-colors group-hover:opacity-100 hover:bg-white/10 hover:text-white">
              <HiOutlineDotsVertical />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysTasks;
