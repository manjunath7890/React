import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isActive = selected === title;

  const handleClick = () => {
    setSelected(title);
  };

  return (
    <MenuItem
      active={isActive}
      style={{
        background: isActive ? `${colors.greenAccent[300]}` : "transparent",
        border:  isActive ?`1px solid ${colors.greenAccent[800]}`: "transparent",
        // boxShadow:colors.greenAccent[200],
        color: colors.grey[100],
        fontWeight: 'bold'
      }}
      onClick={handleClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = (props) => {
  const customFontFamily = "'Black Ops One', sans-serif"; // Define the custom font family
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box 
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 15px 5px 15px !important",
          
        },
        "& .pro-inner-item:hover": {
          color: `${colors.grey[500]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} width={'11rem'}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <img
              alt="profile-user"
              width="10px"
              height="10px"
              src={`../../assets/logo.png`}
              style={{ cursor: "pointer", borderRadius: "50%", width:'2.5rem', height:'2.5rem', marginBottom:'2rem', marginTop:'2rem', marginLeft:'1rem'}}
            /> : undefined}
            style={{
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                mt="-0.5rem"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <img
                  alt="profile-user"
                  src={`../../assets/logo.png`}
                  style={{ cursor: "pointer", borderRadius: "50%", width:'2.3rem', height:'2.3rem', marginLeft:'-0.5rem'}}
                />
                </IconButton>
                <Typography fontSize={'0.7rem'} color={colors.grey[100]} display={'flex'} fontFamily={customFontFamily}>                 
                  <Box fontSize={'2.5rem'} mr={"0.2rem"} ml={'0.2rem'}>A</Box>
                  <Box marginTop={'1.2rem'} sx={{color:colors.greenAccent[5000]}}>
                    <Box>lterner</Box>
                    <Box mt={'-0.3rem'}>Solution</Box>
                  </Box>
                </Typography>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/logo.png`}
                  style={{ cursor: "pointer", borderRadius: "50%", width:'6rem', height:'6rem'}}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  fontSize="25px"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {props.data.v2}
                </Typography>

                <Typography 
                  fontSize={'15px'} 
                  color={colors.greenAccent[500]}
                  mb={'-0.7rem'}
                >
                  {props.data.v3}
                </Typography>
              </Box>
            </Box>
          )}

          <Box padding={isCollapsed ? '30% 10% ' : "0  0 5%  2%  "}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />           
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Trail"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pdf form"
              to="/user"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected} 
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
    {/* <Box display="flex" justifyContent="space-between" pt={'1rem'} pl={2} borderBottom={'0px solid grey'} alignItems={'center'} ml={'1rem'}>
      <Box display="flex" mt="-0.5rem">
        <IconButton >
       
        <Typography fontSize={'0.7rem'} color={colors.grey[100]} display={'flex'} fontFamily={customFontFamily} >                 
          <Box fontSize={'2.5rem'} mr={"0.2rem"} ml={'0.2rem'}>A</Box>
          <Box marginTop={'1.2rem'} sx={{color:colors.greenAccent[5000]}} marginRight={'2rem'}>
            <Box>lterner</Box>
            <Box mt={'-0.3rem'}>Solution</Box>
          </Box>
        </Typography>
        </IconButton>
        <DatePickerValue user={props.user}/>
      </Box>

      <Box display="flex" justifyContent={'space-around'}>
        <IconButton
          component={Link}
          to="/dashboard"
          onClick={() => handleButtonClick('dashboard')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'dashboard' ? colors.greenAccent[500] : colors.grey[100],
            "&:hover": { color: colors.grey[300] },
          }}
        >
          <DashboardIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/form"
          onClick={() => handleButtonClick('form')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'form' ? colors.greenAccent[500] : colors.grey[100],
            "&:hover": { color: colors.grey[300] },
          }}
        >
          <AccountBoxIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/user"
          onClick={() => handleButtonClick('user')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'user' ? colors.greenAccent[500] : colors.grey[100],
            "&:hover": { color: colors.grey[300] },
          }}
        >
          <FeedIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/bar"
          onClick={() => handleButtonClick('bar')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'bar' ? colors.greenAccent[500] : colors.grey[100],
            "&:hover": { color: colors.grey[300] },
          }}
        >
          <AssessmentIcon />
        </IconButton>
        <IconButton
          component={Link}
          to="/line"
          onClick={() => handleButtonClick('line')}
          sx={{
            mr: '2rem',
            color: clickedButton === 'line' ? colors.greenAccent[500] : colors.grey[100],
            "&:hover": { color: colors.grey[300] },
          }}
        >
          <StackedLineChartIcon />
        </IconButton>

        <IconButton onClick={colorMode.toggleColorMode} sx={{ mr: '2rem' }}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton sx={{ mr: '2rem' }}>
          <a href="./">
            <LogoutOutlinedIcon />
          </a>
        </IconButton>
      </Box>
    </Box> */}