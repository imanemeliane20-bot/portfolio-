/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
       
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        select:"var(--select)",
        
        primary: "var(--primary)",
        tertiary:"var(--tertiary)",
        "tertiary-hover":"var(--tertiary-hover)",
        "background-sec":"var(--background-sec)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        border: "var(--border)",
        destructive: "var(--destructive)",
        ring: "var(--ring)",
        "accent-opacity":"var(--accent-opacity)",
        "banner":"var(--banner)",
        "accent-hover":"var(--accent-hover)"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        }
      },
    },
  },
  plugins: [],
}