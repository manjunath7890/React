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
        perspective: "1000px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          background: `radial-gradient(${colors.primary[300]} 45%, transparent 47%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.primary[200]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          // boxShadow: "0 0px 10px 1px #00d8dd",
          animation: "rotation 2s linear infinite", // Add animation
        }}
      />
      <Typography
        fontSize={"30px"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: colors.grey[100],
          fontSize: "1.5rem",
          fontWeight:'bold'
        }}
      >
        {`${Math.round(progress * 100)}`}
      </Typography>
    </Box>
  );
};

export default ProgressCircle;
