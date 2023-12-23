import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import SwitchExample from "./Switch";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import Info from "./Info";
import DatePickerValue from "./DataDownload";
import Temp from "./Temperature";

const SwitchTemp = (props) => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode); 

  return (
    <Box display="flex" alignItems="center" justifyContent={'space-evenly'} width="100%">
      {/* <Info /> */}

      <SwitchExample user={props.user} switchValue={props.switchValue} slope={props.gradient} signal={props.signal}/>
      <Box mt={'0.7rem'}>
        <DatePickerValue user={props.user} />
        <Box
        display={"flex"}
        mt={"1rem"}
        justifyContent={"space-evenly"}
      >
        <Temp
          temp={"Watt-hr/km"}
          // unit={"wh/km"}
          value={props.whpkm} 
          fontSize={'1.3rem'}
          // icon={
          //   <GroupWorkRoundedIcon
          //     sx={style}
          //   />
          // }
        />
        <Temp
          temp={"Temperature"}
          unit={"°C"}
          value={props.ambient}
          fontSize={'1.3rem'}
          // icon={
          //   <HealthAndSafetyIcon
          //     sx={style}
          //   />
          // }
        />
        <Temp
          temp={"Health"}
          // unit={"v"}
          fontSize={'1.3rem'}
          value={props.cerror === 0 ? 'good' : props.cerror }
          // icon={
          //   <DonutLargeIcon
          //     sx={style}
          //   />
          // }
        />
      </Box>
      </Box>
    </Box>
  );
};

export default SwitchTemp;
