import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export 
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          // 100: "#ffa000",
          100: "#fff",
          300: "#ddd",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d", 
          800: "#ffffff", 
          900: 1,
        },
        primary: {
          100: "#6870fa",
          200: "#333",
          300: "#1e1e1e",
          // 400: "#101010",
          // 500: "#150633",
          500: "#0d0d0d",
          // 400: "#0c0025",
          // 500: "#141517",
          600: "#101624",
          700: "#232323",
          800: "#080b12",
          900: "#040509",
      },      
        greenAccent: {
          100: "#444",
          200: "0 2px 4px 2px #000",
          // 200: "0 5px 7px 2px #000",
          // 300: 'linear-gradient(150deg,#100031 10%, #4117b7 50%,#1c0152 92.98%)',
          300: 'linear-gradient(150deg, rgb(17 17 17) 10%, rgb(33 33 33) 50%, rgb(39 39 39) 92.98%)',
          // 400: "linear-gradient(150deg, rgb(10 10 10) 10%, rgb(50 50 50) 50%, rgb(16 16 16) 92.98%) rgb(0 0 0)",
          400: "#111111",
          500: "#00d8dd",
          600: "#00b6bb",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#00ffff",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        // aqua: {
        //   100: "#00aaaa",
        //   200: "0 5px 7px 2px #0cc",
        //   300: "#linear-gradient(150deg,rgb(0 30 30) 10%,rgb(0 255 255 / 20%) 50%,rgb(0 30 30) 92.98%)",
        //   400: "#3da58a",
        //   500: "#55ffff",
        //   600: "#34ffca",
        //   700: "#94e2cd",
        //   800: "#b7ebde",
        //   900: "#dbf5ee",
        // },
      }
    : {
        grey: {
          100: "#000",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#000000",
          900: 0,
        },
        primary: {
          100: "#040509",
          200: "#ddd",
          300: "#fff",
          400: "#ffffff", 
          500: "linear-gradient(150deg, rgb(10 10 10) 10%, rgb(31 31 31) 50%, rgb(16 16 16) 92.98%) rgb(0 0 0)",
          600: "#1F2A40",
          700: "#ffffff",
          800: "#a1a4ab",
          900: "linear-gradient(90deg, rgb(10 10 10) 10%, rgb(31 31 31) 50%, rgb(16 16 16) 92.98%)",
        },

        greenAccent: {
          100: "#ccc",
          200: "rgb(200 200 200) 0px 2px 3px 0px",
          300: "linear-gradient(150deg, rgb(250 250 250) 10%, rgb(240 240 240) 50%, rgb(225 230 230) 92.98%) rgb(0 0 0)",
          400: "#ecf1f1",
          500: "#00c4c9",
          600: "#00b6bb",
          700: "#94e2cd",
          800: "linear-gradient(100deg, #fa8c16 , #00c4c9, #00c4c9)",
          900: "#dbf5ee",
        },
        orangeAccent: {
          100: "#ff6a00",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#0d6efd",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// mui theme settings
  export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500], // Set the background for dark mode
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.primary[500], // Set the background for light mode
              },
            }),
      },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
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
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
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
