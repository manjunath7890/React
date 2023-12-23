import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const RepoVehicleDetails = ({
  vehicleName,
  vehicleNo,
  driver,
  intime,
  outtime,
  date,
  testNo,
  mode,
  health,
  icon,
  color: parentColor,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Use parentColor if defined, otherwise use default color
  const color = parentColor ? parentColor : colors.palette[100];

  const style = {
    color: colors.palette[500],
    m: "0.2rem",
    fontSize: "2.5rem",
    p: "0.15rem",
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        ml={"1rem"}
        mt={"1rem"}
      >
        <Box display={"flex"}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "1rem",
            }}
            paddingX={"0.5rem"}
            border={`2px solid ${colors.palette[500]}`}
          >
            <LocalShippingIcon sx={style} />
          </Box>
          <Box
            pl={"1rem"}
            mt={"0rem"}
            color={colors.palette[100]}
            fontWeight={"1000"}
          >
            <h3>{vehicleName}</h3>
            <h6 style={{ marginTop: "-0.5rem" }}>{vehicleNo}</h6>
          </Box>
        </Box>
        <Box>
          <Box
            pr={"2rem"}
            fontSize={"0.7rem"}
            mt={"0rem"}
            color={colors.palette[100]}
          >
            test number
          </Box>
          <Box
            pl={"1rem"}
            fontSize={"1.8rem"}
            mt={"-0.4rem"}
            color={colors.palette[150]}
          >
            {testNo}
          </Box>
        </Box>
      </Box>
      <Box
        pl={"1.5rem"}
        borderRadius={"1rem"}
        display="flex"
        color={colors.palette[100]}
      >
        <Box width={"60%"} mt={"1.5rem"}>
          <Box
            style={{
              fontSize: "1.6rem",
              display: "flex",
              alignItems: "center",
              color: colors.palette[100],
              marginBottom: "-0.2rem",
            }}
          >
            {driver}
          </Box>
          <Box
            fontSize={"1rem"}
            mr={"0.5rem"}
            display={"flex"}
            color={colors.palette[100]}
          >
            <div
              style={{
                fontSize: "0.9rem",
                color: colors.palette[100],
                marginRight: "0.2rem",
                marginTop: "0.2rem",
              }}
            >
              date:{" "}
            </div>
            {date}
          </Box>
          <Box display={"flex"} mt={"-0.2rem"}>
            <Box
              fontSize={"1rem"}
              mr={"0.5rem"}
              display={"flex"}
              color={colors.palette[1100]}
            >
              <h6
                style={{
                  fontSize: "0.9rem",
                  color: colors.palette[100],
                  marginRight: "0.3rem",
                  paddingTop: "0.25rem",
                }}
              >
                Out:-{" "}
              </h6>
              {intime}
            </Box>
            <Box
              fontSize={"1rem"}
              mr={"0.5rem"}
              display={"flex"}
              color={colors.palette[1100]}
            >
              <h6
                style={{
                  fontSize: "0.9rem",
                  color: colors.palette[100],
                  marginLeft: "0.3rem",
                  paddingTop: "0.25rem",
                }}
              >
                In:-{" "}
              </h6>
              {outtime}
            </Box>
          </Box>
        </Box>

        <Box
          width={"40%"}
          border={`1px solid ${colors.palette[900]}`}
          height={"5.5rem"}
          p={"1rem"}
          mr={"1rem"}
          mt={'1rem'}
          borderRadius={"0.5rem"}
          //   bgcolor={colors.palette[800]}
        >
          <Box
            style={{
              fontSize: "1.5rem",
              color: colors.palette[1400],
              marginTop: "-0.3rem",
            }}
          >
            <Box
              fontSize={"1.35rem"}
              color={colors.palette[1000]}
              display={"flex"}
              fontWeight={"bold"}
            >
              ECO :
              <Box color={colors.palette[100]} fontWeight={"100"}>
                {" "}
                {"\u00A0"} 25%
              </Box>
            </Box>
            <Box
              fontSize={"1.35rem"}
              color={colors.palette[1300]}
              display={"flex"}
              fontWeight={"bold"}
              mt={"rem"}
            >
              Drive :
              <Box color={colors.palette[100]} fontWeight={"100"}>
                {" "}
                {"\u00A0"} 75%
              </Box>
            </Box>
            {/* {health} */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RepoVehicleDetails;
