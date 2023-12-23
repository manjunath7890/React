import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ThermostatIcon from "@mui/icons-material/Thermostat";

const RepoData = ({title, label1, label2, init, final, secondary, primary, icon, color: parentColor, iconColor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Use parentColor if defined, otherwise use default color
  const color = parentColor ? parentColor : colors.palette[100];

  return (

    <Box >
        <Box pl={'1rem'} fontSize={'0.75rem'} pt={'0.4rem'} color={colors.palette[150]}>
        {title}
        </Box>
    <Box
      pl={'1rem'}
      width={'100%'}
      borderRadius={'1rem'}
      display="flex"
      alignItems="center"
      color={colors.palette[100]}
      height='3.9rem'
    >
  
      <Box style={{ display: 'flex', alignItems: 'center', marginRight: '1rem',background:iconColor, borderRadius:'1rem' }}>
        {icon}
      </Box>

      <Box width={'7rem'}>
        <Box style={{ fontSize: '1.6rem',fontWeight:'bold' , display: 'flex', alignItems: 'center', color:colors.palette[100] }}>{primary}</Box>
        <Box fontSize={'0.9rem'}  mt={'-0.1rem'}> {secondary}</Box>
      </Box>

      <Box>
        <Box style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', color:colors.palette[150] }}>{label1}</Box>
        <Box fontSize={'0.9rem'}  mt={'-0.25rem'}> {init}</Box>

        <Box style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', color:colors.palette[150], marginTop: '0.3rem'}}>{label2}</Box>
        <Box fontSize={'0.9rem'}  mt={'-0.25rem'} mb={'0.5rem'}> {final}</Box>
      </Box>
    </Box>
    </Box>
  );
};

export default RepoData;
