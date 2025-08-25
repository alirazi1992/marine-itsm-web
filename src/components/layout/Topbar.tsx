"use client";
import { useUserSettings } from "@/contexts/UserSettingsContext";

export default function Topbar() {
  const { lang, setLang, theme, setTheme } = useUserSettings();

  return (
    <header className="glass h-16 px-4 flex items-center justify-between">
      <div className="font-semibold">
        🌊 {lang === "fa" ? "پنل مدیریتی" : "Control Panel"}
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 transition"
          onClick={() => setLang(lang === "fa" ? "en" : "fa")}
          aria-label="Toggle Language"
        >
          {lang === "fa" ? "EN" : "FA"}
        </button>
        <button
          className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 transition"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? "☾" : "☀"}
        </button>
      </div>
    </header>
  );
}
