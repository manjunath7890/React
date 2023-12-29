import { Box, useTheme} from "@mui/material";
import { tokens } from "../theme";
import Battery0BarOutlinedIcon from "@mui/icons-material/Battery5Bar";

const Mod = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
    border={`1px solid ${colors.palette[800]}`}
    m={'0px 4px'}
    p={'5px 2px'}
    width={'7rem'}
    borderRadius= {'0.5rem'}
    display="flex-start"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-evenly"
    height='100%'
    color={colors.palette[100]}
    sx={{background:colors.palette[800]}}
  >
    <div style={{ fontSize: '0.93rem',p:'0.2rem' }}>
      <Battery0BarOutlinedIcon sx={{fontSize: '1.5rem',color:colors.palette[110],background:colors.palette[500],p:'0.2rem', borderRadius:'0.5rem', marginRight:'0.2rem', ml:'0.2rem' }} />
      v{props.cell} : {props.value} v</div>
     </Box> 
  );
};

export default Mod;
