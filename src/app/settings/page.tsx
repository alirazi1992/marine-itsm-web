"use client";
import Shell from "@/components/layout/Shell";
import { useUserSettings } from "@/contexts/UserSettingsContext";

export default function Settings() {
  const { lang, setLang, theme, setTheme } = useUserSettings();

  return (
    <Shell>
      <h1 className="text-xl font-semibold mb-4">Settings</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass p-4 rounded-2xl">
          <div className="text-sm opacity-80 mb-2">Language</div>
          <div className="flex gap-2">
            <button
              className={`px-3 py-2 rounded-xl ${
                lang === "fa" ? "bg-ocean-700" : "bg-white/10 hover:bg-white/20"
              }`}
              onClick={() => setLang("fa")}
            >
              فارسی
            </button>
            <button
              className={`px-3 py-2 rounded-xl ${
                lang === "en" ? "bg-ocean-700" : "bg-white/10 hover:bg-white/20"
              }`}
              onClick={() => setLang("en")}
            >
              English
            </button>
          </div>
        </div>
        <div className="glass p-4 rounded-2xl">
          <div className="text-sm opacity-80 mb-2">Theme</div>
          <div className="flex gap-2">
            <button
              className={`px-3 py-2 rounded-xl ${
                theme === "dark"
                  ? "bg-ocean-700"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
            <button
              className={`px-3 py-2 rounded-xl ${
                theme === "light"
                  ? "bg-ocean-700"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
