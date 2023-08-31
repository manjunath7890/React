import { Box, Typography, useTheme } from "@mui/material";
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import BoltIcon from '@mui/icons-material/Bolt';
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import Modall from "./StatBoxModal";
import TempModal from "./ModalTemperature";
// import CircleRadialGauge from "./CircleRadialGauge";

const StatBox = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // console.log( props.d.var1);

  return (
    <Box width="100%" mr="20px" ml={'10px'}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            sx={{ color: colors.greenAccent[500] }}
            display={'flex'}
            fontWeight={'bold'}
            fontSize={'16px'}
          >
          {props.icon}
          {' '}
          {props.heading}
          </Typography>
        
          
          <Typography
            fontSize={'30px'}
            // fontWeight="bold"
            display={'flex'}
            alignItems={'center'}
            sx={{ color: colors.grey[100] ,marginBottom:'-3px', mt:'30px'}}
          >
             <BrightnessAutoIcon style={{color: colors.greenAccent[500]}}/>
             {'\u00A0'}
             {Math.floor(props.d && props.d.var16)}
             <Box fontSize="15px" fontWeight={100} component="span" ml={0.5} mt={1}>
              .{(((props.d && props.d.var16) % 1).toFixed(2)).toString().split('.')[1]}
             </Box>
          
          </Typography>  

          <Typography 
            fontSize={'20px'} 
            color={colors.grey[300]}
            mb={'5px'}
          >
            <BoltIcon style={{color: colors.greenAccent[500]}}/>
            {'\u00A0'}{'\u00A0'}
            {(props.d && props.d.var15)}
          </Typography>

          <Typography 
            fontSize={'13px'} 
            sx={{ color: colors.grey[100] }}
            // boxShadow= {"0 1px 5px #088"}
            padding={'0px 5px 0px 0px'}
            marginRight={'25px'}
            alignItems={'center'}
            // justifyContent={'center'}
          >
            {/* <TempModal   color={colors.greenAccent[500]} value={(props.d && props.d)}/>   */}
          </Typography>
        </Box>

        <Box mr={'10px'} mt={'0px'}> 
          <Modall  data={props.icon} color={colors.greenAccent[500]} voltage={(props.d && props.d)}/>  
          {/* <CircleRadialGauge
          val={(props.d.var17) / 10}
          value={(props.d.var17) }
          label={`${props.d.var9}`}
          colorBlue={colors.primary[200]}
          colorGrey={colors.grey[100]}
          colorGreen={colors.greenAccent[500]}
          startAngle={0}
          endAngle={360}
          // width={50}
          // height={140}
         /> */}
         {/* <SemiCircleRadialGauge */}
          <Box mt={'1rem'}>
            <ProgressCircle progress={(props.d && props.d.var17)/100}  size={95} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
// 400: "#212225",
// 500: "#141517",