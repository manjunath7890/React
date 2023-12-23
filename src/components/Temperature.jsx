import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ThermostatIcon from "@mui/icons-material/Thermostat";

const Temp = ({ temp, unit, value, fontSize = '1rem', icon, color: parentColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Use parentColor if defined, otherwise use default color
  const color = parentColor ? parentColor : colors.palette[100];

  return (
    <Box
      m={'1px 3px'}
      pl={'1rem'}
      width={'100%'}
      borderRadius={'0.5rem'}
      display="flex"
      // flexDirection={'column'}
      alignItems="center"
      // justifyContent="space-between"
      color={colors.palette[100]}
      height='2.8rem'
      // color={colors.palette[100]}
      sx={{ background: colors.palette[800] }}
    >
      {/* <Box fontSize={'0.6rem'} mb={'-0.3rem'} color={colors.palette[150]}> {temp} </Box>
      <div style={{ fontSize: fontSize, display: 'flex', alignItems: 'center', marginBottom: '0.2rem' }}>
        {icon}<Box color={color}>{value}</Box> {unit}
      </div> */}
      <Box style={{ fontSize: fontSize, display: 'flex', alignItems: 'center', marginBottom: '0rem',background:colors.palette[510], borderRadius:'0.5rem', marginRight:'0.5rem' }}>
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
