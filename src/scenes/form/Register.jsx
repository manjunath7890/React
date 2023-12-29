import React from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const Register = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate  =  useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {

    try {
      const response = await fetch(`${colors.palette[50]}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        
      });
      console.log(values);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      window.alert(responseData.message);
    //   navigate("../admin/form", { replace: true });
      console.log('Data sent successfully:', responseData);
    } catch (error) {
      console.error('Error sending data:', error);
      window.alert('Vehicle already exist');
    }
  };

  return (
    <Box m="20px" >
        <h3 style={{fontWeight:'bold', display:'flex', justifyContent:'center', marginBottom:'2rem'}}>REGISTER VEHICLE</h3>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="1rem"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
                <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="vehicle ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleId}
                name="vehicleId"
                error={!!touched.vehicleId && !!errors.vehicleId}
                helperText={touched.vehicleId && errors.vehicleId}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="vehicle Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleNo}
                name="vehicleNo"
                error={!!touched.vehicleNo && !!errors.vehicleNo}
                helperText={touched.vehicleNo && errors.vehicleNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Chassi Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.chassiNo}
                name="chassiNo"
                error={!!touched.chassiNo && !!errors.chassiNo}
                helperText={touched.chassiNo && errors.chassiNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Motor Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.motorNo}
                name="motorNo"
                error={!!touched.motorNo && !!errors.motorNo}
                helperText={touched.motorNo && errors.motorNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                // variant="filled"
                type="text"
                label="Battery Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.batteryId}
                name="batteryId"
                error={!!touched.batteryId && !!errors.batteryId}
                helperText={touched.batteryId && errors.batteryId}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  vehicleId: yup.string().required("required"),
  vehicleNo: yup.string().required("required"),
  motorNo: yup.string().required("required"),
  chassiNo: yup.string().required("required"),
  batteryId: yup.string().required("required"),
});
const initialValues = {
    name: "",
    vehicleId: "",
    vehicleNo: "",
    motorNo: "",
    chassiNo: "",
    batteryId: "",
};

export default Register;
