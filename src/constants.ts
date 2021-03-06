const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

const COLORS = {
  primary: 'hsl(240deg 100% 60%)',
  primaryLight: 'hsl(235deg 100% 62%)',
  white: 'hsl(0deg 0% 100%)',
  lightBackground: 'hsla(0, 0%, 96%, 0.8)',
  gray: 'hsl(240deg 10% 50%)',
  transparentGray15: 'hsl(240deg 10% 50% / 0.15)',
  transparentGray75: 'hsl(240deg 10% 50% / 0.75)',
  transparentPrimary: 'hsl(240deg 100% 60% / 0.15)',
  black: 'hsl(0deg 0% 0%)',
};

const FONTSIZE = {
  small: `${12 / 16}rem`,
  normal: `${16 / 16}rem`,
  title2: `${18 / 16}rem`,
};

export { BREAKPOINTS, QUERIES, COLORS, FONTSIZE };
