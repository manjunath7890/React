import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import SemiCircleRadialGauge from "./SemiCircle";
import Visual from "./DataVisual";
import Lineargauge from "./LinearGuage";



const StatBox = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box  width={'100%'} justifyContent={'center'}>
      <SemiCircleRadialGauge val={(props.val.var4)/10} value={(props.val.var4) * 2.22}  label={`${props.val.var9}`} colorBlue={colors.primary[500]} colorGrey={colors.grey[100]} colorGreen={colors.greenAccent[500]}/>    
      <Box sx={{ width:'100%'}}  alignItems={'center'} justifyContent={'center'}>
      <Box
         border={'1px solid #014d50'}
         m={'2px 2px'}
         p={'10px 10px'}
         bgcolor={colors.primary[500]}
         width={'99%'}
         borderRadius={'5px'}
         alignItems="center"
         justifyContent="center"
      >
        <Lineargauge data={props.val.var11} label={'Controller '} index={'y'} width={'100%'} height={'45px'}/>
        <Lineargauge data={props.val.var12} label={'Motor '} index={'y'} width={'100%'} height={'45px'}/>

        {/* <Box sx={{mb:'10px'}} display={'flex'} alignItems={'center'}> */}
          {/* <Box color={colors.greenAccent[500]} fontSize={'12px'} fontWeight={'bo0ld'} mr={'0%'}>
            {'Controller Temperature'}
          </Box>
          <LinearGauge value={props.val.var11} min={0} max={100} width={10} height={60} color1={colors.greenAccent[500]} color2={colors.primary[300]} />
          <Box color={colors.grey[100]} fontSize={'25px'} fontWeight={'bold'} ml={'5%'}>
            {props.val.var11}{'°C'}
          </Box>
        </Box>


        <Box sx={{mb:'0px'}} display={'flex'} alignItems={'center'}>
          <Box color={colors.greenAccent[500]} fontSize={'12px'} fontWeight={'bo0ld'} mr={'3%'}>
            {'motor temperature'}
          </Box>
          <LinearGauge value={props.val.var12} min={0} max={180} width={10} height={60} color1={colors.greenAccent[500]} color2={colors.primary[300]} />
          <Box color={colors.grey[100]} fontSize={'25px'} fontWeight={'bold'} ml={'5%'}>
            {(props.val.var12)}{'°C'}
          </Box>
        </Box> */}
      </Box>
      </Box>
      <Box sx={{ width:'100%'}} display={'flex'}>
        <Visual data={props.val.var7} label={'Slope'}/>
        <Visual data={props.val.var6} label={'Trip'}/>
        <Visual data={props.val.var5} label={'Distance'}/>
      </Box>
    </Box>
  );
};

export default StatBox;