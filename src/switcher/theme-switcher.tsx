import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/theme-context";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
     useEffect(() => {
    setMounted(true);
  }, []);
 if (!mounted) return null; 
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="justify-items-center w-8 h-8 shrink-0 text-white hover:bg-ring bg-background-sec rounded-lg cursor-pointer"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}