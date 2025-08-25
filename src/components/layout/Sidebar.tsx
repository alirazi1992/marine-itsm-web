"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserSettings } from "@/contexts/UserSettingsContext";

const nav = [
  { href: "/", labelFa: "داشبورد", labelEn: "Dashboard" },
  { href: "/tickets", labelFa: "تیکت‌ها", labelEn: "Tickets" },
  { href: "/tickets/new", labelFa: "تیکت جدید", labelEn: "New Ticket" },
  { href: "/vessels", labelFa: "شناورها", labelEn: "Vessels" },
  { href: "/assets", labelFa: "دارایی‌ها", labelEn: "Assets" },
  { href: "/settings", labelFa: "تنظیمات", labelEn: "Settings" },
];

export default function Sidebar() {
  const { lang, isRTL } = useUserSettings();
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 glass p-4 flex flex-col sticky top-0">
      <div className="pb-4 mb-4 border-b border-white/10">
        <div className="text-lg font-semibold">Marine ITSM</div>
        <div className="text-xs text-white/70">
          {lang === "fa" ? "سامانه مدیریت خدمات IT" : "IT Service Management"}
        </div>
      </div>
      <nav className="space-y-1 overflow-y-auto">
        {nav.map((item) => {
          const label = lang === "fa" ? item.labelFa : item.labelEn;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-xl transition ${
                active
                  ? "bg-ocean-800/60 text-white"
                  : "hover:bg-white/10 text-white/80"
              } ${isRTL ? "rtl:text-right" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto text-xs text-white/60">
        © {new Date().getFullYear()} MarineOps
      </div>
    </aside>
  );
}
