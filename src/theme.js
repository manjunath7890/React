import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export 
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        palette: {
          50: "http://localhost:4000",
          100: "#fff",
          110: '#000',
          150: "#ccc",
          200: "0 5px 10px 1px #111",
          300: "#282828",
          400: "#111111",
          500: "#00d49b",
          510: "#00d49b",
          600: "#af3f3b",
          700: "#ccc",
          800: "#222222",
          900: "#3a3a3a",
          1000: "#00d38b",
          1100: "#008ffb",
          1200: "#00e396",
          1300: "#feb019",
          1400: "#ff4560",
          1500: "#775dd0",
          1600: "#d44cec",
          1700: "#0dcaf0",
        },
      }
    : {
        palette: {
          50: "http://localhost:4000",
          100: "#000",
          110: '#fff',
          150: "#333",
          200: "0 1px 1px 1px #888",
          300: "linear-gradient(150deg, rgb(250 250 250) 10%, rgb(240 240 240) 50%, rgb(225 230 230) 92.98%) rgb(0 0 0)",
          400: "#eee",
          500: "#0cc68f",
          510: "#0cc68f",
          600: "#af3f3b",
          700: "linear-gradient(150deg, rgb(30 30 30) 10%, rgb(35 35 35) 50%, rgb(30 30 30) 92.98%)",
          800: "#e6e6e6",
          900: "#ccc",
          1000: "#00d38b",
          1100: "#008ffb",
          1200: "#00e396",
          1300: "#feb019",
          1400: "#ff4560",
          1500: "#775dd0",
          1600: "#d44cec",
          1700: "#0dcaf0",

        },
      }),
});

  export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.palette[500],
              },
              secondary: {
                main: colors.palette[500],
              },
              neutral: {
                dark: colors.palette[700],
                main: colors.palette[500],
                light: colors.palette[100],
              },
              background: {
                default: colors.palette[400], // Set the background for dark mode
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.palette[100],
              },
              secondary: {
                main: colors.palette[500],
              },
              neutral: {
                dark: colors.palette[700],
                main: colors.palette[500],
                light: colors.palette[100],
              },
              background: {
                default: colors.palette[400], // Set the background for light mode
              },
            }),
      },
    typography: {
      fontFamily: ["'Kanit', sans-serif",].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["'Kanit', sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["'Kanit', sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["'Kanit', sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
