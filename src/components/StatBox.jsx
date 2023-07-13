import { Box, Typography, useTheme } from "@mui/material";
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import BoltIcon from '@mui/icons-material/Bolt';
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import Modall from "./StatBoxModal";
import TempModal from "./ModalTemperature";

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
            fontSize={'40px'}
            fontWeight="bold"
            display={'flex'}
            alignItems={'center'}
            sx={{ color: colors.grey[100] ,marginBottom:'-10px', mt:'30px'}}
          >
             <BrightnessAutoIcon style={{color: colors.greenAccent[500]}}/>
             {'\u00A0'}
             {Math.floor(props.d && props.d.var16)}
             <Box fontSize="25px" fontWeight={1000} component="span" ml={0.5} mt={1.5}>
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
            boxShadow= {"0 1px 5px #088"}
            padding={'0px 5px 0px 0px'}
            marginRight={'25px'}
            alignItems={'center'}
            // justifyContent={'center'}
          >
            <TempModal   color={colors.greenAccent[500]} value={(props.d && props.d)}/>  
          </Typography>
        </Box>

        <Box mr={'10px'} mt={'0px'}> 
          <Modall  data={props.icon} color={colors.greenAccent[500]} voltage={(props.d && props.d)}/>  
          <ProgressCircle progress={(props.d && props.d.var17)/100}  size={105} />
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
// 400: "#212225",
// 500: "#141517",