import { Box, useTheme} from "@mui/material";
import { tokens } from "../theme";

const Visual = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
    border={'1px solid #014d50'}
    m={'2px 2px'}
    p={'2px 10px'}
    bgcolor={colors.primary[500]}
    width={'100%'}
    borderRadius={'5px'}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height='60px'
  >
    <div style={{ color: colors.greenAccent[500], fontSize: '14px', margin: '0px', padding: '0' }}>{props.label}</div>
    <div style={{ fontSize: '30px', color: `${colors.grey[800]}`, fontWeight: 'bold' , margin:' -10px'}}>{props.data}</div>
  </Box> 
  );
};

export default Visual;
