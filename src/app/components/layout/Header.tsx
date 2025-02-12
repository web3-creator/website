"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="w-full flex flex-row items-center justify-end">
      <span className="cursor-pointer" onClick={toggleTheme}>
        {theme === "light" ? (
          <MdDarkMode className="size-8" />
        ) : (
          <MdLightMode className="size-8" />
        )}
      </span>
    </header>
  );
};
