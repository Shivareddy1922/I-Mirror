module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "new-fill-000000": "var(--new-fill-000000)",
        "new-fill-74a4ee": "var(--new-fill-74a4ee)",
        "new-fill-bfbfbf": "var(--new-fill-bfbfbf)",
        "new-fill-ffffff": "var(--new-fill-ffffff)",
        "new-stroke-style": "var(--new-stroke-style)",
        "new-fill-3a3cb9": "var(--new-fill-3a3cb9)",
        "new-fill-4d1bf1": "var(--new-fill-4d1bf1)",
        defaultsystemgreenlight: "var(--defaultsystemgreenlight)",
        inkdarkest: "var(--inkdarkest)",
        inklight: "var(--inklight)",
        inklighter: "var(--inklighter)",
        "label-colorlightprimary": "var(--label-colorlightprimary)",
        primarybase: "var(--primarybase)",
        skylight: "var(--skylight)",
        skywhite: "var(--skywhite)",
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
      },
      fontFamily: {
        "body-base": "var(--body-base-font-family)",
        "default-bold-body": "var(--default-bold-body-font-family)",
        heading: "var(--heading-font-family)",
        "inter-regular": "var(--inter-regular-font-family)",
        "regular-none-medium": "var(--regular-none-medium-font-family)",
        "regular-none-regular": "var(--regular-none-regular-font-family)",
        "regular-normal-regular": "var(--regular-normal-regular-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
        "tiny-normal-regular": "var(--tiny-normal-regular-font-family)",
        "title-2": "var(--title-2-font-family)",
        "title-3": "var(--title-3-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "background-blur-radius-4": "var(--background-blur-radius-4)",
        "background-blur-radius-40": "var(--background-blur-radius-40)",
        "drop-shadow-radius-24": "var(--drop-shadow-radius-24)",
        "material-blur": "var(--material-blur)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeIn": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
