import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import SemiCircleRadialGauge from "./SemiCircle";
import Temp from "./Temperature";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import CameraIcon from "@mui/icons-material/Camera";
import MovingIcon from "@mui/icons-material/Moving";
import TitleIcon from "@mui/icons-material/Title";

const SpeedTemp = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const style = {
    color: colors.palette[800],
    m: "0.25rem",
    fontSize: "1.5rem",
  };

  const styleTemperature = {
    color: colors.palette[800],
    m: "0.25rem",
    fontSize: "1rem",
  };

  return (
    <Box display={"flex"} justifyContent={"space-evenly"}>
      <Box
        width={"40%"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop="0.5rem"
      >
        <SemiCircleRadialGauge
          val={props.speed / 10}
          value={props.speed * 2.22}
          label={`speed`}
          colorBlue={colors.palette[800]}
          colorGrey={colors.palette[100]}
          colorGreen={colors.palette[500]}
          endAngle={110}
        />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            color={colors.palette[100]}
            fontSize="1.2rem"
            marginTop="0rem"
            display="flex"
            alignItems="center"
            flexDirection="row"
            marginRight={"1.3rem"}
          >
            <Box
              color={colors.palette[150]}
              fontSize="0.7rem"
              fontWeight="100"
            >
              RPM:
              {"\u00A0"}
              {"\u00A0"}
            </Box>
            {props.rpm}
          </Box>
          <Box
            color={colors.palette[100]}
            fontSize="1.2rem"
            marginTop="0rem"
            display="flex"
            alignItems="center"
          >
            <Box color={colors.palette[150]} fontSize="0.7rem" fontWeight="100">
              ODO:
              {"\u00A0"}
              {"\u00A0"}
            </Box>
            {props.odo}
            <Box color={colors.palette[100]} fontSize="12px">
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}km
            </Box>
          </Box>
        </Box>
      </Box>

      <Box width={"60%"} ml={"1rem"}>
        <Box
          display={"flex"}
          mt={"0rem"}
          justifyContent={"space-evenly"}
          // minWidth={"16rem"}
        >
          <Temp
            value={
              props.cfan === 0
                ? "Parked and Safe"
                : props.cfan === 1
                ? "Charger connected to Charge"
                : props.cfan === 2
                ? "Vehicle Charging"
                : "On the Move"
            }
            icon={<LocalShippingIcon sx={style} />}
          />
        </Box>

        <Box display={"flex"} mt={"0.3rem"} justifyContent={"space-evenly"}>
          <Temp
            temp={"Driving MODE"}
            unit={""}
            fontSize={"1.1rem"}
            value={
              props.fner === 0
                ? "-----"
                : props.fner === 1
                ? "parked"
                : props.fner === 2
                ? "ECO"
                : props.fner === 3
                ? "Drive"
                : props.fner === 4
                ? "Reverse"
                : "----"
            }
            icon={<OpenWithIcon sx={styleTemperature} />}
          />

          <Temp
            temp={"Motor Fan"}
            unit={""}
            fontSize={"1.3rem"}
            value={props.mfan === 0 ? "Off" : "ON"}
            icon={<CameraIcon sx={styleTemperature} />}
          />
        </Box>

        <Box display={"flex"} mt={"0.3rem"} justifyContent={"space-evenly"}>
          <Temp
            temp={"Trip"}
            unit={"km"}
            fontSize={"1.3rem"}
            value={props.trip}
            icon={<TitleIcon sx={styleTemperature} />}
          />
          <Temp
            temp={"Range"}
            unit={"km"}
            fontSize={"1.3rem"}
            value={props.range}
            icon={<MovingIcon sx={styleTemperature} />}
          />
        </Box>

        <Box display={"flex"} mt={"0.3rem"} justifyContent={"space-evenly"}>
          <Temp
            temp={"Controller"}
            unit={"°C"}
            value={props.ctemp}
            fontSize={"1.3rem"}
            icon={<ThermostatIcon sx={styleTemperature} />}
          />
          <Temp
            temp={"Motor"}
            unit={"°C"}
            value={props.mtemp}
            fontSize={"1.3rem"}
            color={colors.palette[100]}
            icon={<ThermostatIcon sx={styleTemperature} />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SpeedTemp;
