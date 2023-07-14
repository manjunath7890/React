import { Box, useTheme} from "@mui/material";
import { tokens } from "../theme";
import Lineargauge from "./LinearGuage" 
import Mod from "./Mod";

const Modes = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
    border={'1px solid #014d50'}
    m={'2px 2px'}
    p={'2px 10px'}
    bgcolor={colors.primary[500]}
    boxShadow={'0px 0px 10px #0aa'}
    width={'98%'}
    borderRadius={'5px'}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height={props.height}
  >
    <Box display={'flex'} justifyContent="space-evenly" marginBottom={'0.5rem'}>
        
      <Mod value={'P'} bg={props.data.var13 === 1 ? '#077' : '#011b20'} />
      <Mod value={'E'} bg={props.data.var13 === 2 ? '#077' : '#011b20'} />
      <Mod value={'D'} bg={props.data.var13 === 3 ? '#077' : '#011b20'}/>
      <Mod value={'R'} bg={props.data.var13 === 4 ? '#077' : '#011b20'}/>

    </Box>

    <Lineargauge data={props.data.var4} label={''} index={'y'} width={'90%'} height={'35px'} yAxis={true} xAxis={false} max={100}/>
  </Box> 
  );
};

export default Modes;
