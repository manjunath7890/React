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
import { ColorModeContext, useMode } from "./theme";

import Login from "./scenes/form/login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const [data1, setData1] = useState();




  function handleDataFromChild(childData) {
    setData1(childData);
  } 
  useEffect(() => {
    if (data1 && location.pathname === "/dashboard") {
      async function fetchData() {
        const response = await fetch(`https://mernserver-ep5w.onrender.com/getdata?user=${data1}`);
        const result = await response.json();
        setData(result);
      }
  
      const intervalId = setInterval(fetchData, 2000);
      fetchData();
  
      return () => clearInterval(intervalId);
    }
  }, [data1, location.pathname]);
  
  const shouldShowSidebar = location.pathname !== "/";
  const shouldShowTopbar = shouldShowSidebar;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {shouldShowSidebar && <Sidebar isSidebar={isSidebar} data={data} />}
          <main className="content">
            {shouldShowTopbar && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Login data={data} onLogin={handleDataFromChild}/>} />
              <Route path="/dashboard" element={<Dashboard data={data} />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq data={data}/>} />
              <Route path="/bar" element={<BAR />} />
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
