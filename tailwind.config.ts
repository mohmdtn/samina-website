import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        yekanBakhNumb: ["YekanBakhNumb"],
        yekanBakhNumbBold: ["YekanBakhNumbBold"],
        yekanBakhNumbExtraBold: ["YekanBakhNumbExtraBold"],
      },
      colors: {
        brand: {
          25: "#F5F8FF",
          50: "#EFF4FF",
          100: "#D1E0FF",
          200: "#B2CCFF",
          300: "#84ADFF",
          400: "#528BFF",
          500: "#2970FF",
          600: "#155EEF",
          700: "#004EEB",
          800: "#0040C1",
          900: "#00359E",
        },
        gray2: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        success: {
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#054F31",
        },
        accent: {
          600: "#CA8504",
        }
      },
    },
  },
  plugins: [],
}
export default config
