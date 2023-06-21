import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import SemiCircleRadialGauge from "./SemiCircle";
import Values from "./Value";



const StatBox = ({ progressVal, val, val1, val2, icon}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"  >
          <SemiCircleRadialGauge val={val/10} value={val * 2.22}  label={"value 1"} colorBlue={colors.blueAccent[500]} colorGrey={colors.grey[100]} colorGreen={colors.greenAccent[500]}/>
    </Box>
  );
};

export default StatBox;
