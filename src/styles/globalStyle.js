import { createGlobalStyle } from 'styled-components';

const reset = `
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    padding: 0;
    margin: 0;

    border: 0;
    border-radius: 0;

    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button,
  input,
  textarea,
  select {
    border: 0;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;

    appearance: none;

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`;

const base = theme => `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;

    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    font-family: ${theme.font.family.default};
    line-height: 1.5;
    text-size-adjust: 100%;
  }

  img {
    display: block;

    max-width: 100%;
    height: auto;
  }
`;

const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    ${reset}
    ${base(theme)}
  `
);

export default GlobalStyle;
