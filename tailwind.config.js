module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
       
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        'pixel-dark': 'var(--pixel-dark)',
        'pixel-darker': 'var(--pixel-darker)',
        'pixel-green': 'var(--pixel-green)',
        'pixel-cyan': 'var(--pixel-cyan)',
        'pixel-pink': 'var(--pixel-pink)',
        'pixel-yellow': 'var(--pixel-yellow)',
        'pixel-blue': 'var(--pixel-blue)',
        'pixel-purple': 'var(--pixel-purple)',
        'pixel-orange': 'var(--pixel-orange)',
        'pixel-white': 'var(--pixel-white)',
      },
    },
  },
  plugins: [],
};
