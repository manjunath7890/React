import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ThermostatIcon from "@mui/icons-material/Thermostat";

const Temp = ({ temp, unit, value, fontSize = '1rem', icon, color = 100, bg = 500, bgColor = 800 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Use parentColor if defined, otherwise use default color
 const bgcolor = colors.palette[bg];
 const background = colors.palette[bgColor];
 const Color = colors.palette[color]

  return (
    <Box
      m={'1px 3px'}
      pl={'0.5rem'}
      width={'100%'}
      borderRadius={'0.5rem'}
      display="flex"
      // flexDirection={'column'}
      alignItems="center"
      // justifyContent="space-between"
      color= {Color}
      height='2.8rem'
      // color={colors.palette[100]}
      sx={{ background: background }}
    >
      <Box style={{color:bgcolor ,fontSize: fontSize, display: 'flex', alignItems: 'center', marginBottom: '0rem', borderRadius:'0.5rem', marginRight:'0.5rem' }} border={`2px solid ${bgcolor}`}>
        {icon}
      </Box>
      <Box>
        <Box fontSize={'0.55rem'} mb={'-0.1rem'} color={colors.palette[150]} > {temp}</Box>
        <Box style={{ fontSize: fontSize, display: 'flex', alignItems: 'center', marginBottom: '0.2rem' }}> {value} {unit}</Box>
      </Box>

    </Box>
  );
};

export default Temp;
