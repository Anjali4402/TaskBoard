import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { MdLockPerson } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";

const otpBoxUI =
  "dark:border-border-dark focus:ring-primary/50 focus:border-primary caret-primary h-12 w-10 rounded-lg border border-slate-200 bg-slate-50 text-center text-lg font-bold transition-all focus:ring-2 focus:outline-none sm:h-14 sm:w-12 sm:text-xl dark:bg-[#11221a]";

const VerifyOtp = () => {
  return (
    <body className="flex min-h-screen flex-col text-slate-900 antialiased transition-colors duration-200 dark:text-white">
      {/* <!-- Top Navigation (Minimal for Auth) --> */}
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
      {/* <!-- Main Content --> */}
      <main className="relative flex flex-1 items-center justify-center overflow-hidden p-4 pt-24">
        {/* <!-- Verification Card --> */}
        <div className="relative z-10 mx-auto w-full max-w-md">
          <div className="dark:bg-card-dark dark:border-border-dark overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
            <div className="bg-background-dark dark:bg-green-light h-1.5 w-full" />
            <div className="flex flex-col items-center p-8 text-center sm:p-10">
              {/* <!-- Icon --> */}
              <div className="bg-green-light/10 text-green-light ring-green-light/20 mb-6 flex size-16 items-center justify-center rounded-full shadow-[0_0_15px_rgba(19,236,128,0.15)] ring-1">
                <MdLockPerson className="size-6" />
              </div>
              {/* <!-- Page Heading --> */}
              <h1 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Two-Step Verification
              </h1>
              <p className="dark:text-text-secondary mx-auto mb-8 max-w-xs text-sm leading-relaxed text-slate-500">
                Enter the 6-digit code sent to your registered email{" "}
                <span className="font-medium text-slate-700 dark:text-white">
                  ale•••@taskmaster.com
                </span>
              </p>
              {/* <!-- OTP Inputs --> */}
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className={otpBoxUI} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={1} className={otpBoxUI} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={2} className={otpBoxUI} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} className={otpBoxUI} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={4} className={otpBoxUI} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={5} className={otpBoxUI} />
                </InputOTPGroup>
              </InputOTP>

              {/* <!-- Timer --> */}
              <div className="mt-4 mb-8 flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-4 py-2 dark:border-[#234836] dark:bg-[#11221a]">
                <FaStopwatch className="size-3" />
                <span className="dark:text-text-secondary text-xs font-medium text-slate-500">
                  Code expires in{" "}
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    02:59
                  </span>
                </span>
              </div>
              {/* <!-- Verify Button --> */}
              <button className="bg-green-light flex h-12 w-full transform items-center justify-center gap-2 rounded-xl text-base font-bold text-[#11221a] shadow-[0_4px_14px_0_rgba(19,236,128,0.39)] transition-all hover:scale-[1.02] hover:bg-[#0fd470] active:scale-[0.98]">
                <span>Verify &amp; Proceed</span>
                <ArrowRight className="size-4" />
              </button>
              {/* <!-- Footer Options --> */}
              <div className="mt-6 flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between px-2 text-sm">
                  <button className="dark:text-text-secondary flex cursor-pointer items-center gap-1 text-slate-500 transition-colors hover:text-slate-800 dark:hover:text-white">
                    <ArrowLeft className="size-4" />
                    Back to login
                  </button>
                  <button className="dark:text-text-secondary dark:hover:text-green-light hover:text-green-light cursor-pointer font-medium text-slate-500 transition-colors">
                    Resend Code
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Bottom Decorative Bar --> */}
            <div className="bg-background-dark dark:bg-green-light h-1.5 w-full" />
          </div>
        </div>
      </main>
    </body>
  );
};

export default VerifyOtp;
