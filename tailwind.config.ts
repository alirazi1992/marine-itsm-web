import type { Config } from "tailwindcss";

const config: Config = {
 darkMode: ["class", "dark"],
content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50:"#e6fbff",100:"#c8f6ff",200:"#95eaff",300:"#5ed9ff",400:"#28c1ff",
          500:"#10a5f0",600:"#0c83c4",700:"#0a6aa0",800:"#084f78",900:"#073d5c",
        },
        glass: "rgba(255,255,255,0.08)",
      },
      boxShadow: { glass: "0 8px 30px rgba(0,0,0,0.25)" },
      borderRadius: { "2xl": "1.25rem" },
    },
  },
  plugins: [],
};
export default config;
