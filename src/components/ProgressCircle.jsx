import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = 0.5, size = 50 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        perspective: "1000px", // Add perspective for 3D effect
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          background: `radial-gradient(${colors.primary[500]} 50%, transparent 52%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.primary[400]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          // transform: "rotateX(60deg) rotateZ(45deg)", // Apply 3D rotations
          // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)", // Add a shadow effect
          boxShadow: "0 2px 3px rgba(110, 110, 110)", // Add a shadow effect
          
        }}
      />
      <Typography
        fontSize={"30px"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: theme.palette.text.primary,
          fontSize: "1.5rem", // Increase the font size as desired
        }}
      >
        {`${Math.round(progress * 100)}%`}
      </Typography>
    </Box>
  );
};

export default ProgressCircle;
