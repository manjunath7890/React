import { Box, Typography, useTheme } from "@mui/material";
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import BoltIcon from '@mui/icons-material/Bolt';
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import Modall from "./StatBoxModal";
import TempModal from "./ModalTemperature";

const StatBox = ({heading, title, subtitle, icon, progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" mr="20px" ml={'10px'}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            sx={{ color: colors.greenAccent[500] }}
            display={'flex'}
          >
          {icon}
          {' '}
          {heading}
          </Typography>
          {/* {icon} */}
          
          <Typography
            // fontFamily="Ubuntu, sans-serif"
            fontSize={'40px'}
            fontWeight="bold"
            display={'flex'}
            alignItems={'center'}
            sx={{ color: colors.grey[100] ,marginBottom:'-10px', mt:'30px'}}
          >
             <BrightnessAutoIcon style={{color: colors.greenAccent[500]}}/>
             {' '}
             {Math.floor(title)}
             <Box fontSize="25px" fontWeight={20} component="span" ml={0.5} mt={1.5}>
              .{((title % 1).toFixed(2)).toString().split('.')[1]}
             </Box>
             {/* <Box fontSize={'20px'}>{'A'}</Box> */}
          </Typography>  

          <Typography 
            fontSize={'20px'} 
            color={colors.grey[100]}
            mb={'0px'}
          >
            <BoltIcon style={{color: colors.greenAccent[500]}}/>
            {' '}
            {subtitle}
            {/* {' V'} */}
          </Typography>

          <Typography 
            fontSize={'13px'} 
            sx={{ color: colors.grey[100] }}
            boxShadow= {"0 2px 3px rgba(110, 110, 110)"}
            padding={'5px 10px'}
            marginRight={'25px'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <TempModal   color={colors.greenAccent[500]} voltage={subtitle}/>  
          </Typography>
        </Box>

        <Box mr={'5px'} mt={'1px'}> 
          <Modall  data={icon} color={colors.greenAccent[500]} voltage={subtitle}/>  
          <ProgressCircle progress={progress}  size={120} />
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
