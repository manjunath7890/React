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
      marginTop="-5px"
    >
      <SemiCircleRadialGauge
        val={(props.val.var4) / 10}
        value={(props.val.var4) * 2.22}
        label={`${props.val.var9}`}
        colorBlue={colors.primary[200]}
        colorGrey={colors.grey[100]}
        colorGreen={colors.greenAccent[500]}
      />
     <Box display={'flex'} >
      <Box
        color={colors.grey[100]}
        fontSize="22px"
        marginTop="-1rem"
        fontWeight="600"
        display="flex"
        alignItems="center"
        marginRight={'2rem'}
      >
        <Box color={colors.greenAccent[500]} fontSize="15px">
          {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
        </Box>
        {props.val.var5}
        <Box color={colors.grey[100]} fontSize="12px">
          {"\u00A0"}{"\u00A0"}{"\u00A0"}km
        </Box>
      </Box>
      <Box
        color={colors.grey[100]}
        fontSize="22px"
        marginTop="-1rem"
        fontWeight="600"
        display="flex"
        alignItems="center"
        marginLeft={'2rem'}
      >
        <Box color={colors.greenAccent[500]} fontSize="15px">
          {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
        </Box>
        {props.val.var6}
        <Box color={colors.grey[100]} fontSize="12px">
          {"\u00A0"}{"\u00A0"}{"\u00A0"}km
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default StatBox;
