import { DefaultTheme } from "styled-components";
import { colors, breakpoints } from "./variables";

export const theme: DefaultTheme = {
  borderRadius: " 0.4em",
  palette: colors,
  breakpoints: breakpoints,
  flexboxgrid: {
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 86, // rem
    },
  },
};
export const Colors = typeof colors;
export const Breakpoints = typeof breakpoints;

//     --color--overlay-text: #fff;
//     --color--overlay-icon: #fff;
//     --color--userimage-border: #fff;
//     --color--button-primary: #fff;
//     --color--button-primary-bordered: #f14472;
//     --color--button-secondary: #fff;
//     --color--button-secondary-bordered: #1991eb;
//     --color--input-color: #0f1f2f;
//     --color--navbar-mobile: #fff;
//     --color--bg-button-default: #f9fafb;
//     --color--border-button-default: #94a6b8;
//     --color--header-text-color: #fff;
//     --color--flametoken: #ed3591;
//     --color--online: #70b23f;
