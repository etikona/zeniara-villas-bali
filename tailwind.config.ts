// Merge this `theme.extend` into your existing tailwind.config.ts

const themeExtend = {
  colors: {
    zen: {
      sand: "var(--zen-sand)",
      cream: "var(--zen-cream)",
      clay: "var(--zen-clay)",
      charcoal: "var(--zen-charcoal)",
      terracotta: "var(--zen-terracotta)",
      ink: "var(--zen-ink)",
    },
  },
  fontFamily: {
    display: ["var(--font-display)", "serif"],
    body: ["var(--font-body)", "sans-serif"],
    mono: ["var(--font-mono)", "monospace"],
  },
  letterSpacing: {
    widest: ".22em",
  },
};

export default themeExtend;
