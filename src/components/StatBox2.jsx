import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import SemiCircleRadialGauge from "./SemiCircle";



const StatBox = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"  >
          <SemiCircleRadialGauge val={(props.val1)/10} value={(props.val1) * 2.22}  label={`${props.val2}`} colorBlue={colors.primary[300]} colorGrey={colors.grey[100]} colorGreen={colors.greenAccent[500]}/>
    </Box>
  );
};

export default StatBox;
