import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark" ? "light" : theme === "light" ? "system" : "dark"
        )
      }
      className="p-2 rounded-full bg-background-secondary hover:bg-background-accent transition-colors duration-200"
      title={`Current theme: ${theme}`}
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 text-text-secondary" />
      ) : theme === "light" ? (
        <Sun className="w-5 h-5 text-text-secondary" />
      ) : (
        <Monitor className="w-5 h-5 text-text-secondary" />
      )}
    </button>
  );
}
