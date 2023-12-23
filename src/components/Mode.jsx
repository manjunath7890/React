import { Box, useTheme} from "@mui/material";
import { tokens } from "../theme";
import Mod from "./Mod";

const Modes = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
    m={'2px 2px'}
    p={'0px 10px'}
    width={'100%'}
    borderRadius={'2.5rem'}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height={props.height}
    fontWeight={'bold'}
  >
    <Box display={'flex'} justifyContent="space-evenly" marginBottom={'0.2rem'} marginTop={'0.5rem'}> 
      <Mod value={'P'} bg={props.fner === 1 ? colors.palette[500] : colors.palette[400]} color={props.fner === 1 ? colors.palette[400] : colors.palette[500]} bgRadius={'15px 0px 0px 0px'}/>
      <Mod value={'E'} bg={props.fner === 2 ? colors.palette[500] : colors.palette[400]} color={props.fner === 2 ? colors.palette[400] : colors.palette[500]} bgRadius={'0px 15px 0px 0px'}/>
    </Box>
    <Box display={'flex'} justifyContent="space-evenly" marginBottom={'0.2rem'} marginTop={'0rem'}>     
      <Mod value={'D'} bg={props.fner === 3 ? colors.palette[500] : colors.palette[400]} color={props.fner === 3 ? colors.palette[400] : colors.palette[500]} bgRadius={'0px 0px 0px 15px'}/>
      <Mod value={'R'} bg={props.fner === 4 ? colors.palette[500] : colors.palette[400]} color={props.fner === 4 ? colors.palette[400] : colors.palette[500]} bgRadius={'0px 0px 15px 0px'}/>
    </Box>
  </Box> 
  );
};

export default Modes;
