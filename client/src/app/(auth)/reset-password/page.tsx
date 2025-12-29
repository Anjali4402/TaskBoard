"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdOutlineLockReset } from "react-icons/md";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

export const customLabelClasses =
  "pb-2 text-sm leading-normal font-medium text-gray-900 dark:text-white";

const ResetPassword = () => {
  const router = useRouter();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = z
    .object({
      password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" }),
      confirmPassword: z
        .string()
        .min(1, { message: "Password is required" })
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
    <div className="flex min-h-screen flex-col text-slate-900 antialiased transition-colors duration-200 dark:text-white">
      {/* <--- Header ---> */}
      <header className="dark:border-border-dark dark:bg-background-dark/50 fixed top-0 z-50 flex w-full items-center justify-between border-b border-slate-200 bg-white/50 px-6 py-4 backdrop-blur-md lg:px-10">
        <div className="flex items-center gap-3">
          <div className="size-8">
            <Image src={"/logo.svg"} height={48} width={48} alt="logo" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            TaskMaster
          </h2>
        </div>
      </header>

      {/* <--- Main content ---> */}
      <main className="flex flex-1 items-center justify-center overflow-hidden p-4 pt-24">
        <Card className="dark:bg-card-dark dark:border-border-dark relative mx-auto w-full max-w-md gap-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
          <div className="bg-background-dark dark:bg-green-light absolute top-0 h-1.5 w-full" />
          <CardHeader className="space-y-2">
            <div className="bg-green-light/10 text-green-light ring-green-light/20 mx-auto flex size-16 items-center justify-center rounded-full shadow-[0_0_15px_rgba(19,236,128,0.15)] ring-1">
              <MdOutlineLockReset className="size-7" />
            </div>

            <CardTitle className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Reset Password?
            </CardTitle>

            <CardDescription className="dark:text-text-secondary mx-auto mb-8 max-w-xs text-center text-sm leading-relaxed text-slate-500">
              Your new password must be different from previousely used
              passwords.
            </CardDescription>
          </CardHeader>

          <CardContent className="sm:px-10">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
              className="space-y-6"
            >
              <div>
                <Label htmlFor="password" className={customLabelClasses}>
                  New Password
                </Label>

                <div className="relative">
                  <Input
                    {...register("password")}
                    className="focus-within:ring-green-light focus-within:border-green-light dark:border-border-dark dark:placeholder:text-text-secondary dark:text-text-secondary focus-visible:ring-green-light w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus:border-transparent focus:ring-0 focus:ring-[#0661FF] focus:outline-none focus-visible:border-none focus-visible:ring-[1.5px]"
                    placeholder="Enter new password"
                    type={showNewPassword ? "text" : "password"}
                    id="password"
                  />
                  <span
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="dark:text-text-secondary absolute top-2.5 right-2.5 cursor-pointer text-gray-400"
                  >
                    {showNewPassword ? (
                      <IoEyeOff className="size-4" />
                    ) : (
                      <IoEye className="size-4" />
                    )}
                  </span>
                </div>
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
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    {...register("confirmPassword")}
                    className="focus-within:ring-green-light focus-within:border-green-light dark:border-border-dark dark:placeholder:text-text-secondary dark:text-text-secondary focus-visible:ring-green-light w-full min-w-0 flex-1 rounded-l-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus-within:ring-0 focus:border-transparent focus:ring-0 focus:ring-[#0661FF] focus:outline-none focus-visible:border-none focus-visible:ring-[1.5px]"
                    placeholder="Re-enter new password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-passwor"
                  />

                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="dark:text-text-secondary absolute top-2.5 right-2.5 cursor-pointer text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <IoEyeOff className="size-4" />
                    ) : (
                      <IoEye className="size-4" />
                    )}
                  </span>
                </div>
                {errors.confirmPassword?.message && (
                  <p className="mt-1 pl-2 text-sm font-medium text-rose-600">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <Button className="bg-green-light flex h-12 w-full transform items-center justify-center gap-2 rounded-xl text-base font-bold text-[#11221a] shadow-[0_4px_14px_0_rgba(19,236,128,0.39)] transition-all hover:scale-[1.02] hover:bg-[#0fd470] active:scale-[0.98]">
                Reset Password
              </Button>
            </form>
            <Separator className="mt-6 h-0.5! bg-gray-200 dark:bg-[#102219]" />
          </CardContent>

          <CardFooter className="mt-2">
            <Button
              variant="ghost"
              onClick={() => router.push("/login")}
              className="dark:text-text-secondary mx-auto flex cursor-pointer items-center gap-1 text-slate-500 transition-colors hover:text-slate-800 dark:hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to login
            </Button>
          </CardFooter>

          <div className="bg-background-dark dark:bg-green-light absolute bottom-0 h-1.5 w-full" />
        </Card>
      </main>
    </div>
  );
};

export default ResetPassword;
