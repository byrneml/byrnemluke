import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Command, Sun, Moon } from "react-feather";
import clsx from "clsx";

const ColorSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme(localStorage.getItem("theme"));
  }, []);

  function changeTheme(theme: string) {
    setTheme(theme);
  }

  if (!mounted) return null;

  return (
    <div
      className={clsx(
        "relative flex row-auto dark:bg-gray-600 p-1 rounded-md",
        "bg-gray-200 text-black",
        "dark:bg-gray-800"
      )}
    >
      <button
        onClick={() => changeTheme("light")}
        value={1}
        className={clsx(
          "flex items-center   p-2 rounded-md text-sm w-auto",
          `${theme === "light" ? "bg-gray-100 text-black" : ""}`,
          "dark:text-white"
        )}
      >
        <Sun width="1rem" className="mr-2" />
        <span>Light</span>
      </button>

      <button
        onClick={() => changeTheme("dark")}
        value={2}
        className={clsx(
          "flex items-center  text-black p-2 rounded-md text-sm w-auto",
          `${theme === "dark" ? "bg-gray-700 text-white" : ""}`,
          "dark:text-white"
        )}
      >
        <Moon width="1rem" className="mr-2" />
        <span>Dark</span>
      </button>

      <button
        onClick={() => changeTheme("system")}
        value={3}
        className={clsx(
          "flex items-center   p-2 rounded-md text-sm w-auto",
          `${
            theme === "system"
              ? "bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
              : ""
          }`,
          "dark:text-white"
        )}
      >
        <Command width="1rem" className="mr-2" />
        <span>Auto</span>
      </button>
    </div>
  );
};

export default ColorSwitcher;
