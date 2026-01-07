"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export const customInputClasses =
  // "dark:border-border-dark dark:placeholder:text-text-secondary h-12 w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none dark:bg-[#193326] dark:text-white focus-within:ring-green-light focus-within:border-green-light flex w-full items-stretch rounded-lg transition-all focus-within:ring-2";
  "focus:ring-0 focus:ring-[#0661FF] focus:border-transparent focus-visible:ring-[#13ec80] focus-visible:border-none focus-within:ring-green-light focus-within:border-green-light focus-within:ring-2 focus:outline-none ";
// "border-[#D4D4D4] rounded-[6px] outline-none bg-white border-[1px] text-[#242731] placeholder:text-[#1C1C1C66] text-base focus:ring-2 focus:ring-[#0661FF] focus:border-transparent focus-visible:ring-[#0661FF] focus-visible:border-none";

export const customLabelClasses =
  "pb-2 text-sm leading-normal font-medium text-gray-900 dark:text-white";

const Login = () => {
  const schema = z.object({
    email: z
      .string()
      .email({ message: "Enter valid email" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleLogin = async (data) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = `${baseUrl}/api/auth/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resdata = await response.json();
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  return (
    <div className="font-display flex min-h-screen items-center justify-center">
      {/* <!-- Main Container Card --> */}
      <div className="dark:bg-surface-dark dark:border-border-dark flex h-auto w-full max-w-[1200px] flex-col overflow-hidden rounded-xl border bg-white shadow-2xl lg:h-[630px] lg:max-h-[90vh] lg:flex-row">
        {/* <!-- Left Side: Visual / Branding --> */}
        <div className="bg-background-dark relative flex w-full flex-col justify-between overflow-hidden p-10 lg:w-5/12 lg:p-16 dark:bg-[#0b1611]">
          {/* <!-- Decorative Background Element --> */}
          <div
            className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 30%, #13ec80 0%, transparent 60%);",
            }}
          ></div>
          {/* <!-- Logo --> */}
          <div className="relative z-10 mb-10 flex items-center gap-3 text-white lg:mb-0">
            <div className="text-primarys size-8 text-white">
              <Image src={"/logo.svg"} height={48} width={48} alt="logo" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">TaskMaster</h2>
          </div>
          {/* <!-- Hero Content --> */}
          <div className="relative z-10 mx-auto my-auto max-w-[480px]">
            <h1 className="mb-6 text-4xl leading-tight font-black tracking-tight text-white lg:text-5xl">
              Stay productive, stay focused.
            </h1>
            <p className="text-text-secondary max-w-[380px] text-lg leading-relaxed font-normal">
              Log in to access your dashboard, manage tasks, timelines, and
              notes, and keep your work moving forward.
            </p>
          </div>
        </div>
        {/* <!-- Right Side: Form --> */}
        <div className="dark:bg-surface-dark flex w-full items-center overflow-y-auto bg-white p-8 lg:w-7/12 lg:p-8">
          <div className="mx-auto flex w-full max-w-[480px] flex-col gap-6">
            {/* <!-- Header --> */}
            <div className="mb-2">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back
              </h2>
              <p className="dark:text-text-secondary text-gray-500">
                Log in to your account to manage your tasks.
              </p>
            </div>

            {/* <!-- Full Name -->*/}
            <form
              onSubmit={handleSubmit((data) => {
                // submit login
                handleLogin(data);
              })}
              className="flex flex-col gap-5"
            >
              {/* Email */}
              <div>
                <Label htmlFor="email" className={customLabelClasses}>
                  Email
                </Label>
                <Input
                  {...register("email")}
                  className="focus-within:ring-green-light focus-within:border-green-light dark:border-border-dark dark:placeholder:text-text-secondary dark:text-text-secondary w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus:border-transparent focus:ring-0 focus:ring-[#0661FF] focus:outline-none focus-visible:border-none focus-visible:ring-[1.5px] focus-visible:ring-[#13ec80]"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
                {errors.email?.message && (
                  <p className="mt-1 pl-2 text-sm font-medium text-rose-600">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className={customLabelClasses}>
                  Password
                </Label>
                <Input
                  {...register("password")}
                  className="focus-within:ring-green-light focus-within:border-green-light dark:border-border-dark dark:placeholder:text-text-secondary w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus:border-transparent focus:ring-0 focus:ring-[#0661FF] focus:outline-none focus-visible:border-none focus-visible:ring-[1.5px] focus-visible:ring-[#13ec80]"
                  placeholder="Enter your password"
                  type="text"
                  id="password"
                />
                {errors.password?.message && (
                  <p className="mt-1 pl-2 text-sm font-medium text-rose-600">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              {/* <!-- Submit Button --> */}
              <button
                className="bg-green-light mt-4 flex h-12 w-full transform cursor-pointer items-center justify-center rounded-lg px-4 text-base leading-normal font-bold tracking-[0.015em] text-[#11221a] shadow-[0_0_20px_rgba(19,236,128,0.2)] transition-all hover:bg-[#0fd672] hover:shadow-[0_0_25px_rgba(19,236,128,0.4)] active:scale-[0.99]"
                type="submit"
              >
                Log in
              </button>
            </form>
            {/* <!-- Footer Link --> */}
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account ?{" "}
                <a
                  className="dark:text-green-light font-bold text-gray-800 hover:underline"
                  href="/signup"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
