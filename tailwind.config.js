module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: ['group-hover'],
      rotate: ['group-hover'],
      screens: {
        "custom-1173": "1173px", // Custom breakpoint for 1173px
        "custom-944": "944px",
      },
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
};
