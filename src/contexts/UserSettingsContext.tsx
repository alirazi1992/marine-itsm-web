"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "fa" | "en";
type Theme = "dark" | "light";

type Ctx = {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
  isRTL: boolean;
};

const UserSettingsContext = createContext<Ctx | null>(null);

const PREFIX = "marine-itsm:";

function safeGet<T>(storageKey: string, initial: T): T {
  if (typeof window === "undefined") return initial;

  // allow migration from legacy (unprefixed) keys
  const legacyKey = storageKey.replace(PREFIX, "");
  const raw =
    window.localStorage.getItem(storageKey) ??
    window.localStorage.getItem(legacyKey);

  if (raw == null) return initial;

  try {
    return JSON.parse(raw) as T;
  } catch {
    // accept legacy plain strings
    if (legacyKey === "lang" && (raw === "fa" || raw === "en")) {
      return raw as unknown as T;
    }
    if (legacyKey === "theme" && (raw === "dark" || raw === "light")) {
      return raw as unknown as T;
    }
    return initial;
  }
}

function useLocalStorage<T>(key: string, initial: T) {
  const storageKey = PREFIX + key;
  const [value, setValue] = useState<T>(() => safeGet<T>(storageKey, initial));

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
      // cleanup legacy key if present
      const legacyKey = key;
      if (window.localStorage.getItem(legacyKey) != null) {
        window.localStorage.removeItem(legacyKey);
      }
    } catch {
      // ignore write errors (private mode, quota, etc.)
    }
  }, [storageKey, key, value]);

  return [value, setValue] as const;
}

export function UserSettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useLocalStorage<Lang>("lang", "fa");
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");
  const isRTL = lang === "fa";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  useEffect(() => {
    const cls = document.documentElement.classList;
    if (theme === "dark") cls.add("dark");
    else cls.remove("dark");
  }, [theme]);

  const value = useMemo(
    () => ({ lang, theme, setLang, setTheme, isRTL }),
    [lang, theme, isRTL, setLang, setTheme]
  );

  return (
    <UserSettingsContext.Provider value={value}>
      {children}
    </UserSettingsContext.Provider>
  );
}

export function useUserSettings() {
  const ctx = useContext(UserSettingsContext);
  if (!ctx)
    throw new Error("useUserSettings must be used within UserSettingsProvider");
  return ctx;
}
