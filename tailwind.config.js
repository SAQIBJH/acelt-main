// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ['Poppins', 'sans-serif'], 
//       },
//       fontWeight: {
//         thin: 100, 
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//       animation: {
//         slideUp: "slideUp 1.5s ease-out",
//         scroll: 'scroll 15s linear infinite',
//         slideRibbon: 'slideRibbon 15s linear infinite',
//         slideIn: 'slideIn 0.3s ease-out',
//         slideOut: 'slideOut 0.3s ease-in',
//         countup: 'countup 5s ease-in-out',

//       },
//       keyframes: {
//         slideUp: {
//           "0%": { transform: "translateY(100px)", opacity: "0" },
//           "100%": { transform: "translateY(0)", opacity: "1" },
//         },
//         scroll: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-90%)' },
//         },
//         slideRibbon: {
//           '0%': { transform: 'translateX(100%)'},
//           '100%' :{transform: 'translateX(-100%)'},
//         },
//         slideIn: {
//           '0%': { transform: 'translateX(100%)' }, 
//           '100%': { transform: 'translateX(0)' }, 
//         },
//         slideOut: {
//           '0%': { transform: 'translateX(0)' },    
//           '100%': { transform: 'translateX(100%)' }, 
//         },
//         countup: {
//           '0%': { opacity: '0', transform: 'scale(0.9)' },
//           '100%': { opacity: '1', transform: 'scale(1)' },
//         },
//       },
//       transitionTimingFunction: {
//         'smooth-ease': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          red: {
            DEFAULT: "#dc2626",
            light: "#ef4444",
            dark: "#b91c1c",
          },
          gray: {
            DEFAULT: "#1f2937",
            light: "#374151",
            dark: "#111827",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        slideUp: "slideUp 1.5s ease-out",
        scroll: 'scroll 15s linear infinite',
        slideRibbon: 'slideRibbon 15s linear infinite',
        slideIn: 'slideIn 0.3s ease-out',
        slideOut: 'slideOut 0.3s ease-in',
        countup: 'countup 5s ease-in-out',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-90%)' },
        },
        slideRibbon: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        countup: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      transitionTimingFunction: {
        'smooth-ease': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
