import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Values = ({heading, icon, value = 0}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box >
      <Typography
        variant="h6"
        marginBottom={'10px'}
        sx={{ color: colors.greenAccent[100] }}
      >
      {heading}
      </Typography>
      <Box display={"flex"}>
      {icon}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: colors.grey[100] }}
      >
        {value}
      </Typography>
      </Box>
    </Box>
  );
};

export default Values;