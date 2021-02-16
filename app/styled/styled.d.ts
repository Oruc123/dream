import "styled-components";
import { Colors, Breakpoints } from "./theme";
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: Colors;
    breakpoints: Breakpoints;
    flexboxgrid: object;
  }
}
