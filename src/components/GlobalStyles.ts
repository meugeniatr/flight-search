import { COLORS } from '../constants';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

/*
  Typographic tweaks!
  Add accessible line-height
  Improve text rendering
*/

body {
  line-height: calc(1em + 0.5rem);
  -webkit-font-smoothing: antialiased;
  background-color: ${COLORS.lightBackground}
}

main, header, footer {
    margin: 0;
    padding: 0 60px;
}

main {
  position: relative;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  hyphens: auto;
}

/* 
  9. Inherit fonts for inputs and buttons 
*/
input,
button,
textarea,
select {
  font: inherit;
}

/* 
  10 Remove all animations, transitions and smooth scroll for people that prefer not to see them 
*/
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyles;
