"use client";
// import { Button } from "@/components/ui/button";
import { Button } from "../components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-100 min-h-screen flex-col items-center space-y-6 bg-black font-sans md:h-60 dark:bg-green-800">
      <h1 className="text-3xl text-white">Project Setup</h1>
      <h2 className="bg-gradient-to-b from-green-500 to-red-700 bg-clip-text text-4xl font-bold text-transparent">
        Unless the power of the ui
      </h2>
      <h2 className="bg-linear-to-b from-green-500 via-yellow-500 to-red-600 bg-clip-text text-4xl font-bold text-transparent">
        Unleash the power of the UI
      </h2>

      <button className="group relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white">
        <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent group-hover:h-[2px]"></div>
        Join Waitlist
      </button>

      <Button>Shadcn Btn </Button>

      <Button onClick={handleThemeChange}>Switch btn</Button>
    </div>
  );
}
