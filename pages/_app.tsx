import { ThemeProvider } from "styled-components";
import GlobalStyle from "../app/styled/GlobalStyle";
import { theme } from "../app/styled/theme";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
