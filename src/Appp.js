import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
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

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const [path, setPath] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [switchValue, setSwitchValue] = useState(null);
  const colors = tokens(theme.palette.mode);
  const sampleData = {
    "v1": "45","v2": "UserName","v3": "UserRole","v4": 28,"v5": 135,"v6": "online","v7": "good", "v8": "good", "v9": 180, "v10": 1,
    "v11": 70, "v12": "good", "v13": "discharging", "v14": 3.42, "v15": 3.38, "v16": 80, "v17": "good", "v18": "disconnected", "v19": 3.40, "v20": 3.37,
    "v21": 90, "v22": "good", "v23": "disconnected", "v24": 3.41, "v25": 3.4, "v26": 20, "v27": "good", "v28": "disconnected", "v29": 3.31, "v30": 3.23,
    "v31": "1", "v32": 70, "v33": 107.62, "v34": 75.34, "v35": 71.47, "v36": 7653, "v37": 5176, "v38": 104, "v39": 37, "v40": 3975,
    "v41": 435, "v42": "on", "v43": "off", "v44": 3, "v45": 56, "v46": 135, "v47": 6, "v48": 77, "v49": 13.567567, "v50": 77.675646,
    "v51": 3.35, "v52": 3.33, "v53": 3.37, "v54": 3.38, "v55": 3.32, "v56": 3.36, "v57": 3.39, "v58": 3.32, "v59": 3.36, "v60": 3.36,
    "v61": 3.32, "v62": 3.31, "v63": 3.30, "v64": 3.39, "v65": 3.35, "v66": 3.34, "v67": 3.37, "v68": 3.36, "v69": 3.31, "v70": 3.38,
    "v71": 3.33, "v72": 3.36, "v73": 3.32, "v74": 358, "v75": 45, "v76": 35, "v77": 45, "v78": 35, "v79": 45, "v80": 35, 
  }

  function handleDataFromChild(newVariable, Access, role) {
    setData1(newVariable);
    setData2(Access);
    setPath(role);
  } 

  useEffect(() => {
    if (data1 && location.pathname === `/${path}/dashboard`) {
      async function fetchData() {
        const response = await fetch(`http://localhost:4000/getdata?user=${data1}`);

        const result = await response.json();
        setData(result);
      }
  
      const intervalId = setInterval(fetchData, 1000);
      fetchData();
  
      return () => clearInterval(intervalId);
    }

    const fetchData = async () => {
      try {
        console.log(`fetching user id for switch value ${data1}`);
        const response = await fetch(`https://server-pi-one-90.vercel.app/getinput?user=${data1}`);
        if (response.ok) {
          const data = await response.json();
          // Assuming the server response has a property like "initialSwitchValue"
          setSwitchValue(data);
          console.log(data1);
        } else {
          console.log('Failed to fetch initial switch value.');
        }
      } catch (error) {
        console.error('Error fetching initial switch value:', error);
      }
    };
    fetchData();
  }, [data1, location.pathname]);
  
  // const shouldShowSidebar = location.pathname !== "/dashboard";
  const shouldShowTopbarAdmin = location.pathname.startsWith("/admin");
  const shouldShowTopbarSupport = location.pathname.startsWith("/support");
  const shouldShowTopbarClient = location.pathname.startsWith("/client");
  // console.log(data2);
  // console.log(data1);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app">
      {/* {shouldShowSidebar && <Sidebar isSidebar={isSidebar} data={data} />} */}
      <main className="content">
        {shouldShowTopbarAdmin && <Topbar1  user={data} />}
        {shouldShowTopbarSupport && <Topbar2  user={data} />}
        {shouldShowTopbarClient && <Topbar3  user={data} />}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Login data={data} onLogin={handleDataFromChild}/>} />
            <Route path="/admin/dashboard" element={<Dashboard data={data} user={data1} switchValue ={switchValue} mapKey={data2}/>} />
            <Route path="/admin/form" element={<Form />} />
            <Route path="/admin/line" element={<Line user={data1} />} />
            <Route path="/admin/faq" element={<Faq data={data} />} />
            <Route path="/admin/bar" element={<BAR user={data1} />} />
            <Route path="/admin/user" element={<UserForm user={data1} />} />

            <Route path="/support/dashboard" element={<Dashboard2 data={data} user={data1} switchValue ={switchValue} mapKey={data2}/>} />
            <Route path="/support/user" element={<UserForm user={data1} />} />
            <Route path="/support/line" element={<Line user={data1} />} />
            <Route path="/support/faq" element={<Faq data={data} />} />
            <Route path="/support/bar" element={<BAR user={data1} />} />

            <Route path="/client/dashboard" element={<Dashboard3 data={data} user={data1} switchValue ={switchValue} mapKey={data2}/>} />
            <Route path="/client/line" element={<Line user={data1} />} />
            <Route path="/client/bar" element={<BAR user={data1} />} />
          </Routes>
        </div>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
