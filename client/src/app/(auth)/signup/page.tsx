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

const Signup = () => {
  const schema = z
    .object({
      fullName: z.string().min(1, { message: "Full name is required" }),
      email: z
        .string()
        .email({ message: "Enter valid email" })
        .min(1, { message: "Email is required" }),
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
      confirmPassword: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password don't match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

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
              Boost your productivity today.
            </h1>
            <p className="text-text-secondary max-w-[380px] text-lg leading-relaxed font-normal">
              Create an account to manage tasks, timelines, and notes
              efficiently. Join thousands of teams shipping faster.
            </p>
          </div>
        </div>
        {/* <!-- Right Side: Form --> */}
        <div className="dark:bg-surface-dark flex w-full items-center overflow-y-auto bg-white p-8 lg:w-7/12 lg:p-8">
          <div className="mx-auto flex w-full max-w-[480px] flex-col gap-6">
            {/* <!-- Header --> */}
            <div className="mb-2">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Create an Account
              </h2>
              <p className="dark:text-text-secondary text-gray-500">
                Start your journey with us.
              </p>
            </div>
            {/* <!-- Social Auth --> */}
            {/* <div className="grid grid-cols-2 gap-4">
              <button className="dark:border-border-dark dark:hover:bg-border-dark flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
                Google
              </button>
              <button className="dark:border-border-dark dark:hover:bg-border-dark flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:text-white">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-900 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                GitHub
              </button>
            </div>
            <div className="relative flex items-center py-2">
              <div className="dark:border-border-dark flex-grow border-t border-gray-200"></div>
              <span className="mx-4 flex-shrink-0 text-sm text-gray-400 dark:text-gray-500">
                Or continue with
              </span>
              <div className="dark:border-border-dark flex-grow border-t border-gray-200"></div>
            </div> */}
            {/* <!-- Full Name -->*/}
            <form
              onSubmit={handleSubmit((data) => {
                // handle inputs
                console.log(data);
              })}
              className="flex flex-col gap-5"
            >
              <div>
                <Label htmlFor="fullName" className={customLabelClasses}>
                  Full Name
                </Label>
                <Input
                  {...register("fullName")}
                  className="focus-within:ring-green-light focus-within:border-green-light dark:border-border-dark dark:placeholder:text-text-secondary w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus:border-transparent focus:ring-0 focus:ring-[#0661FF] focus:outline-none focus-visible:border-none focus-visible:ring-[1.5px] focus-visible:ring-[#13ec80]"
                  placeholder="Enter your full name"
                  type="text"
                  id="fullName"
                />
                {errors.fullName?.message && (
                  <p className="mt-1 pl-2 text-sm font-medium text-rose-600">
                    {errors.fullName?.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className={customLabelClasses}>
                  Email
                </Label>
                <Input
                  {...register("email")}
                  className="focus-within:ring-green-light focus-within:border-green-light dark:border-border-dark dark:placeholder:text-text-secondary w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus:border-transparent focus:ring-0 focus:ring-[#0661FF] focus:outline-none focus-visible:border-none focus-visible:ring-[1.5px] focus-visible:ring-[#13ec80]"
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
                  placeholder="Create a password"
                  type="text"
                  id="password"
                />
                {errors.password?.message && (
                  <p className="mt-1 pl-2 text-sm font-medium text-rose-600">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              {/* <!-- Confirm Password --> */}
              <div>
                <Label
                  htmlFor="confirm-password"
                  className={customLabelClasses}
                >
                  Confirm Password
                </Label>
                <Input
                  {...register("confirmPassword")}
                  className="focus-within:ring-green-light focus-within:border-green-light dark:border-border-dark dark:placeholder:text-text-secondary w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus:border-transparent focus:ring-0 focus:ring-[#0661FF] focus:outline-none focus-visible:border-none focus-visible:ring-[1.5px] focus-visible:ring-[#13ec80]"
                  placeholder="Confirm your password"
                  type="text"
                  id="confirm-passwor"
                />
                {errors.confirmPassword?.message && (
                  <p className="mt-1 pl-2 text-sm font-medium text-rose-600">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>

              {/* <!-- Submit Button --> */}
              <button
                className="bg-green-light mt-4 flex h-12 w-full transform cursor-pointer items-center justify-center rounded-lg px-4 text-base leading-normal font-bold tracking-[0.015em] text-[#11221a] shadow-[0_0_20px_rgba(19,236,128,0.2)] transition-all hover:bg-[#0fd672] hover:shadow-[0_0_25px_rgba(19,236,128,0.4)] active:scale-[0.99]"
                type="submit"
              >
                Create Account
              </button>
            </form>
            {/* <!-- Footer Link --> */}
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account ?{" "}
                <a
                  className="dark:text-green-light font-bold text-gray-800 hover:underline"
                  href="/login"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
