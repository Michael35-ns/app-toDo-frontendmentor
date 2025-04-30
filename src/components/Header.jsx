import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const initialStateDarkMode = localStorage.getItem("theme") === 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme','light')
    }
  }, [darkMode]);

  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-cover bg-top h-80 dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-700">
      <div className="container mx-auto px-4 pt-28 max-w-2xl">
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl uppercase tracking-[0.4em] text-white">
            Todo
          </h2>
          <button
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
