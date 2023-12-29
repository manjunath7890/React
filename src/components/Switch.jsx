import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Button from "@mui/material/Button";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

function SwitchToggle(props) {
  const val = props.switchValue;
  const [switchValue, setSwitchValue] = useState(
    // localStorage.getItem("switchValue") === "true" ? true : false
    // val
    true
  );
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isOnline, setIsOnline] = useState(false);
  const [previousSignal, setPreviousSignal] = useState(null);

  useEffect(() => {
    const checkSignal = () => {
      if (props.signal !== previousSignal) {
        setIsOnline(true);
        setPreviousSignal(props.signal);
        setTimeout(() => {
          setIsOnline(false);
        }, 5000); // Show "Offline" after 5 seconds if signal doesn't change
      } else {
        setIsOnline(false);
      }
    };

    
    console.log(props.signal);
    const interval = setInterval(checkSignal, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.signal]);

  const handleSwitchChange = (value) => {
    const newValue = value;
    setSwitchValue(newValue);

    // Save the updated switch value to localStorage
    // localStorage.setItem("switchValue", newValue.toString());

    // Send the updated switch value to the server
    postData(newValue);
  };

  const postData = async (value) => {
    try {
      const response = await fetch(`${colors.palette[50]}/postinput`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          var1: value,
          var2: props.user,
        }),
      });
      if (response.ok) {
        console.log(`Switch value (${value}) posted successfully!`);
      } else {
        console.log("Failed to post switch value.");
      }
    } catch (error) {
      console.error("Error posting switch value:", error);
    }
  };

  const CustomButton = withStyles({
    root: {
      width: 70,
      height: 40,
      paddingBottom: 5,
      borderRadius: 50 / 2,
      border: "2px solid",
      borderColor: switchValue === true ? colors.palette[500] : "#bdbdbd",
      color: switchValue === true ? colors.palette[500] : "#bdbdbd",
      // color: '#000',
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "0rem",
          alignItems: "center",
          marginBottom: "0.4rem",
          paddingBottom: "0.1rem",
        }}
      >
        <SignalCellularAltIcon
          sx={{
            color: colors.palette[110],
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            marginBottom: "0rem",
            padding: "0.15rem",
            background: (props.signal == 1)?colors.palette[510]:colors.palette[900],
            borderRadius: "0.5rem",
            marginRight: "0.5rem",
          }}
        />{switchValue === true ? "ON" : "OFF"}
        {/* {isOnline ? "Online" : "Offline"} */}
      </div>
      <CustomButton onClick={() => handleSwitchChange(!switchValue)}>
        {switchValue === true ? "ON" : "OFF"}
      </CustomButton>

      <div
        style={{
          marginLeft: "0rem",
          marginTop: "0.2rem",
          color: colors.palette[100],
          fontSize: "1rem",
        }}
      >
        Slope: {props.slope}°
      </div>
    </div>
  );
}

export default SwitchToggle;
