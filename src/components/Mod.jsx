import { Box, useTheme} from "@mui/material";
import { tokens } from "../theme";

const Mod = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
    border={'1px solid #014d50'}
    m={'0px 10px'}
    p={'0px 10px'}
    bgcolor={props.bg}
    boxShadow={'0px 0px 5px #099'}
    width={'100%'}
    borderRadius={'5px'}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-evenly"
    height='100%'
  >
    <div style={{ color: colors.greenAccent[500], fontSize: '20px', margin: '0px', padding: '0' }}>{props.value}</div>
     </Box> 
  );
};

export default Mod;
