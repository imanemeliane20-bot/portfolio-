/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Data/**/*.json",
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
      keyframes: {
        drawLine: {
          '0%': { strokeDashoffset: '1200', opacity: '0.2' },
          '30%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        },
        fadeTrail: {
          '0%': { strokeDashoffset: '1200' },
          '35%': { strokeDashoffset: '1200' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'draw-line': 'drawLine 2s cubic-bezier(0.4,0,0.2,1) infinite',
        'fade-trail': 'fadeTrail 2s cubic-bezier(0.4,0,0.2,1) infinite',
        'fade-up': 'fadeUp 0.7s ease both',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}