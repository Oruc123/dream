import { breakpoints } from "./variables";

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}) { ${style} }`;
};

export const flex = `
 display: inline-flex;
justify-content: center;
align-items: center;`;
export const ul = `
list-style: none;
margin: 0;
padding: 0;`;
