import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

type ThemeProps = {
    children: string | JSX.Element | JSX.Element[]
}

export default function Theme({children} : ThemeProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({ palette: { mode: prefersDarkMode ? "dark" : "light" } }),
    [prefersDarkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
