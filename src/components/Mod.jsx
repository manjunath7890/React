import { Box, useTheme} from "@mui/material";
import { tokens } from "../theme";

const Mod = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
    border={`1px solid ${colors.palette[900]}`}
    m={'0px 2px'}
    p={'0px 10px'}
    bgcolor={props.bg}
    width={'100%'}
    borderRadius={props.bgRadius}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-evenly"
    height='100%'
    color={props.color}
    >
      <div style={{ fontSize: '20px', margin: '0px', padding: '0' }}>{props.value}</div>
    </Box> 
  );
};

export default Mod;
