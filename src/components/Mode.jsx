import { Box, useTheme} from "@mui/material";
import { tokens } from "../theme";
import Lineargauge from "./LinearGuage" 
import Mod from "./Mod";

const Modes = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
    // border={'1px solid #014d50'}
    // boxShadow= {'0 0  50px 0px #8357fe'}
    m={'2px 2px'}
    p={'0px 10px'}
    // bgcolor={colors.primary[500]}
    width={'100%'}
    borderRadius={'2.5rem'}
    // display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height={props.height}
  >
    <div style={{marginLeft:'0.5rem', color:colors.grey[800]}}>mode:</div>
    <Box display={'flex'} justifyContent="space-evenly" marginBottom={'0.2rem'} marginTop={'0.5rem'}> 
      <Mod value={'P'} bg={props.data.var13 === 1 ? '#077' : colors.primary[500]}  bgRadius={'15px 0px 0px 0px'}/>
      <Mod value={'E'} bg={props.data.var13 === 2 ? '#077' : colors.primary[500]} bgRadius={'0px 15px 0px 0px'}/>
    </Box>
    <Box display={'flex'} justifyContent="space-evenly" marginBottom={'0.2rem'} marginTop={'0rem'}>     
      <Mod value={'D'} bg={props.data.var13 === 3 ? '#077' : colors.primary[500]} bgRadius={'0px 0px 0px 15px'}/>
      <Mod value={'R'} bg={props.data.var13 === 4 ? '#077' : colors.primary[500]} bgRadius={'0px 0px 15px 0px'}/>

    </Box>

    {/* <Lineargauge data={props.data.var4} label={''} index={'y'} width={'90%'} height={'35px'} yAxis={true} xAxis={false} max={100} color={colors.greenAccent[500]}/> */}
  </Box> 
  );
};

export default Modes;
