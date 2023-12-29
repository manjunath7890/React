import { Box, Typography, useTheme } from "@mui/material";
import Battery0BarOutlinedIcon from "@mui/icons-material/Battery5Bar";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import BatteryFullIcon from "@mui/icons-material/BatteryFull";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import Temp from "./Temperature";
import CellPack from "./CellPack";
import BatteryIndicator from "./Efficiency";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Circle from "./CircularGauge";

const BatteryMain = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const style =
  {
    //  color: colors.palette[500],
    //  border: `2px solid ${colors.palette[500]}`,
     p: "0.15rem",
     fontSize: "1.1rem",
     borderRadius: '0.5rem'
  }

  return (
    <Box>
      <Box
        // mr="0.5rem"
        // ml={"0.5rem"}
        mt={"0rem"}
        pt={"0rem"}
        // mb={"1rem"}
        justifyContent={"space-evenly"}
        display="flex"
        borderRadius={"1rem"}
      >
        <Box >
          {/* <ProgressCircle progress={props.soc / 100} size={5.7} /> */}
          <Circle val={props.soc}
          value={props.soc}
          label={``}
          colorBlue={colors.palette[800]}
          colorGrey={colors.palette[100]}
          colorGreen={colors.palette[500]}
          endAngle={360}
          startAngle={0}
        />
        </Box>

          <Box
            sx={{
              pr: "2rem",
              ml: "1rem",
              width: "100%",
              mt:'0.2rem'
              // display: "flex",
              // justifyContent: "space-between",
            }}
          >
              <Typography
                fontSize={"2rem"}
                display={"flex"}
                alignItems={"center"}
                fontWeight={"bold"}
                // border={`1px solid ${colors.palette[500]}`}
                sx={{
                  color: colors.palette[100],
                  marginBottom: "0rem",
                  mt: "1rem",
                }}
              >
                <BrightnessAutoIcon
                  style={{ color: colors.palette[110], fontSize: "1.8rem", background:colors.palette[500], padding:'0.2rem', borderRadius:'0.5rem' }}
                />
                {"\u00A0"}
                {Math.floor(props.current) < 0
                  ? Math.ceil(props.current)
                  : Math.floor(props.current)}
                .{(props.current % 1).toFixed(1).toString().split(".")[1]}
                <Box fontSize={"1.3rem"} pt={"0.3em"}>
                  {" "}
                  {"\u00A0"}A
                </Box>
              </Typography>

              <Typography
                fontSize={"1.2rem"}
                display={"flex"}
                alignItems={"center"}
                // fontWeight={'bold'}
                sx={{
                  color: colors.palette[100],
                }}
              >
                <ElectricBoltIcon
                  style={{ color: colors.palette[110], fontSize: "1.8rem", background:colors.palette[500], padding:'0.2rem', borderRadius:'0.5rem' }}
                />
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                {props.voltage} v
              </Typography>
            </Box>
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <CellPack cell={props.data} />
              {/* {100} % */}
              <BatteryIndicator
                efficiency={props.efficiency}
                colorFill={colors.palette[500]}
                colorEmpty={colors.palette[800]}
              />
            </Box>
        </Box>
        <Box
        display={"flex"}
        mt={"0.3rem"}
        justifyContent={"space-evenly"}
        minWidth={"16rem"}
      >
        <Temp
          temp={"Total Capacity"}
          unit={"AH"}
          value={props.totalCapacity}
          bg={500}
          icon={
            <BatteryFullIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"Remaining Capacity"}
          unit={"AH"}
          bg={500}
          value={props.capacity}
          icon={
            <Battery0BarOutlinedIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"Remaining Watt-Hour"}
          unit={"WHr"} 
          value={props.whr}
          bg={500}
          icon={
            <LeaderboardIcon
              sx={style}
            />
          }
        />
      </Box>
      <Box
        display={"flex"}
        mt={"0.3rem"}
        justifyContent={"space-evenly"}
        minWidth={"16rem"}
      >
        <Temp
          temp={"Power"}
          unit={"w"}
          bg={500}
          value={props.power}
          icon={
            <GroupWorkRoundedIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"Battery-condition"}
          unit={""}
          bg={1400}
          value={props.berror === 0 ? "good" : `bx${props.berror}`}
          icon={
            <HealthAndSafetyIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"cell-difference"}
          bg={500}
          unit={"v"}
          value={`0.${((props.high) - (props.low)).toFixed(3).toString().split(".")[1]}`}
          icon={
            <DonutLargeIcon
              sx={style}
            />
          }
        />
      </Box>

      <Box
        display={"flex"}
        mt={"0.3rem"}
        justifyContent={"space-evenly"}
        minWidth={"16rem"}
      >
        <Temp
          temp={"Low-cell voltage"}
          unit={"v"}
          bg={500}
          value={props.low}
          icon={
            <ElectricBoltIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"High-cell voltage"}
          unit={"v"}
          bg={500}
          value={props.high}
          icon={
            <ElectricBoltIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"Avg-cell voltage"}
          unit={"v"}
          bg={500}
          value={(((props.high) + (props.low))/2).toFixed(3)}
          icon={
            <ElectricBoltIcon
              sx={style}
            />
          }
        />
      </Box>

      <Box
        display={"flex"}
        mt={"0.3rem"}
        justifyContent={"space-evenly"}
        minWidth={"16rem"}
      >
        <Temp
          temp={"MOS-temperature"}
          unit={"°C"}
          value={props.mt}
          bg={1100}
          icon={
            <ThermostatIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"Balance-temperature"}
          unit={"°C"}
          value={props.bt}
          bg={500}
          icon={
            <ThermostatIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"temperature - 1"}
          unit={"°C"}
          value={props.t1}
          bg={500}
          icon={
            <ThermostatIcon
              sx={style}
            />
          }
        />
      </Box>

      <Box
        display={"flex"}
        mt={"0.3rem"}
        justifyContent={"space-evenly"}
        minWidth={"16rem"}
      >
        <Temp
          temp={"temperature - 2"}
          unit={"°C"}
          value={props.t2}
          bg={500}
          icon={
            <ThermostatIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"temperature - 3"}
          unit={"°C"}
          value={props.t3}
          bg={500}
          icon={
            <ThermostatIcon
              sx={style}
            />
          }
        />
        <Temp
          temp={"temperature - 4"}
          unit={"°C"}
          value={props.t4}
          bg={500}
          icon={
            <ThermostatIcon
              sx={style}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default BatteryMain;
