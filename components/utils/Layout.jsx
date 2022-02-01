import { useMemo } from "react";
import { THEME } from "constants/Colors";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";

function Layout({ children }) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: true ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
