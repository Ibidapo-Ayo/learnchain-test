/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#E3EEFF',
			textColor: "#1F1F1F",
  			foreground: 'hsl(var(--foreground))',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
