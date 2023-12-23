import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/d1";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Faq from "./scenes/faq";
import BAR from "./scenes/bar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode, tokens } from "./theme";


import Login from "./scenes/form/login";
import UserForm from "./components/PdfForm";
import Topbar1 from "./scenes/global/Topbar1";
import Topbar2 from "./scenes/global/Topbar2";
import Topbar3 from "./scenes/global/Topbar3";
import Dashboard2 from "./scenes/dashboard/d2";
import Dashboard3 from "./scenes/dashboard/d3";
import Register from "./scenes/form/Register";
import Home from "./scenes/dashboard";
import Test from "./scenes/bar/Test";
import AnalyticsForm from "./scenes/Analytics/Form";
import AnalyticsTemplate from "./scenes/Analytics/Analytics";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const [path, setPath] = useState();
  const [vehicleData, setVehicleData] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [mapAPI, setMapAPI] = useState([]);
  const [switchValue, setSwitchValue] = useState(null);
  const colors = tokens(theme.palette.mode);

  function handleDataFromChild(newVariable, Access, role) {
    setData1(newVariable);
    setData2(Access);
    setPath(role);
  } 

  const [receivedVehiclesData, setReceivedVehiclesData] = useState([]);

  const handleVehiclesData = (data) => 
  {
    setReceivedVehiclesData(data);
    setData1(data.vehicleId);
  };

  useEffect(() => {
    if (path) {
      const fetchMapAPI = async () => {
        try {
          const response = await fetch(`${colors.palette[50]}/map-api/token`);
          if (response.ok) {
            const mapAPI = await response.json();
            // Assuming the server response has a property like "initialSwitchValue"
            setMapAPI(mapAPI.access_token);
            console.log(mapAPI.access_token);
          } else {
            console.log('Failed to fetch initial switch value.');
          }
        } catch (error) {
          console.error('Error fetching initial switch value:', error);
        }
      };
      fetchMapAPI();
    }
  }, [path]);
  
  // const shouldShowSidebar = location.pathname !== "/dashboard";
  // const shouldShowTopbarAdmin = location.pathname.startsWith("/admin");
  // console.log(data2);
  // console.log(receivedVehiclesData);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      {/* {shouldShowSidebar && <Sidebar isSidebar={isSidebar} data={data} />} */}
      <main className="content">
        {path == 'admin' && <Topbar1  user={data} />}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Login data={data} onLogin={handleDataFromChild}/>} />
            {path == 'admin'? 
            <>
            <Route path="/admin/dashboard" element={<Home  onVehicleIdClick={handleVehiclesData}/>} />
            <Route path="/admin/template" element={<Dashboard data={data} vehicleData={receivedVehiclesData} user={data1} mapKey={mapAPI}/>} />
            <Route path="/admin/register" element={<Register />} />
            <Route path="/admin/form" element={<Form />} />
            <Route path="/admin/line" element={<Line user={data1} />} />
            <Route path="/admin/faq" element={<Faq data={data} />} />
            <Route path="/admin/bar" element={<BAR user={data1} />} />
            <Route path="/admin/analytics/form" element={<AnalyticsForm user={data1} />} />
            <Route path="/admin/user" element={<UserForm user={data1} />} />
            <Route path="/admin/analytics/template" element={<AnalyticsTemplate user={data1} />} />
            </>
            : 
            <> </>}
          </Routes>
        </div>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
