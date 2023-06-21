import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import Modall from "./StatBoxModal";

const StatBox = ({heading, title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" mr="20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h6"
            marginBottom={'10px'}
            ml={'19px'}
            sx={{ color: colors.greenAccent[100] }}
          >
          {heading}
          </Typography>
          {/* {icon} */}
          <Typography
            variant="h2"
            ml={'16px'}
            mt={'25px'}
            // fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography 
            variant="h4"  
            sx={{ color: colors.grey[100] }}
            ml={'18px'}
          >
            {subtitle}
          </Typography>
          <Modall  data={icon} color={colors.blueAccent[500]} voltage={subtitle}/>  
        </Box>

        <Box>
          <Box marginTop={'5px'} marginLeft={'25px'}> 
            <ProgressCircle progress={progress}  size={100} />
          </Box>
          <Typography
          variant="h3"
          
          marginRight={'15px'}
          fontWeight={'bold'}
          sx={{ color: colors.greenAccent[600], marginLeft:'60px', marginTop:'10px' }}
        >
          {increase}
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
