import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import SemiCircleRadialGauge from "./SemiCircle";
import Visual from "./DataVisual";
import Lineargauge from "./LinearGuage";

const StatBox = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop="-0.5rem"
    >
      <SemiCircleRadialGauge
        val={(props.val.var4) / 10}
        value={(props.val.var4) * 2.22}
        label={`${props.val.var9}`}
        colorBlue={colors.primary[200]}
        colorGrey={colors.grey[100]}
        colorGreen={colors.greenAccent[500]}
        endAngle={110}
      />
      <Box display={'flex'} alignItems={'center'}>
      <Box
        color={colors.grey[100]}
        fontSize="1.3rem"
        marginTop="-1rem"
        // fontWeight="600"
        display="flex"
        alignItems="center"
        
        marginRight={'4rem'}
       >
        <Box color={colors.greenAccent[600]} fontSize="14px" fontWeight="1000">
          RPM:
          {"\u00A0"}{"\u00A0"}{"\u00A0"}
        </Box>
        {props.val.var9}
       </Box>
       <Box
        color={colors.grey[100]}
        fontSize="1.3rem"
        marginTop="-1rem"
        // fontWeight="600"
        display="flex"
        alignItems="center"
        // marginRight={'2rem'}
       >
        <Box color={colors.greenAccent[600]} fontSize="14px" fontWeight="1000">
          ODO:
          {"\u00A0"}{"\u00A0"}{"\u00A0"}
        </Box>
        {props.val.var5}
        <Box color={colors.grey[100]} fontSize="12px">
          {"\u00A0"}{"\u00A0"}{"\u00A0"}km
        </Box>
       </Box>
      </Box>

      
    </Box>
  );
};

export default StatBox;
