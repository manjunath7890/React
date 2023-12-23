import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = 0.5, size = 4, fontsize = '2rem'}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        position: "relative",
        width: `${size}rem`,
        height: `${size}rem`,
        perspective: "1000px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          background: `radial-gradient(${colors.palette[400]} 50%, transparent 52%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.palette[800]} ${angle}deg 360deg),
            ${colors.palette[500]}`,
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          boxShadow: colors.palette[200],
          animation: "rotation 2s linear infinite",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: colors.palette[100],
          fontSize: fontsize,
        }}
      >
        {`${Math.round(progress * 100)}`}
      </Typography>
    </Box>
  );
};

export default ProgressCircle;
