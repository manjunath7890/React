import React, { useEffect } from 'react';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const MapWithMarkerComponent = ({ token, user}) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://apis.mappls.com/advancedmaps/api/${token}/map_sdk?layer=vector&v=3.0&callback=initMap`;
    script.async = true;

    let marker;
    let currentLat = 13.061571;
    let currentLng = 77.509403;

    script.onload = () => {
      window.initMap = () => {
        const map = new window.mappls.Map('map', {
          center: [13.061571, 77.509403],
          zoomControl: true,
          location: true
        });

        marker = new window.mappls.Marker({
          map: map,
          position: {
            lat: currentLat,
            lng: currentLng
          },
          fitbounds: true,
          icon_url: 'https://apis.mapmyindia.com/map_v3/1.png'
        });

        setInterval(() => {

          const fetchData = async () => {
            try {
              // console.log(user);
              const response = await fetch(`${colors.palette[50]}/getdata?user=${user}`);
              const data = await response.json();
              if (data && data.v49 && data.v50) {
                currentLat = data.v49;
                currentLng = data.v50;
                marker.setPosition({
                  lat: currentLat,
                  lng: currentLng
                });
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    
        }, 3000); 
      };
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.initMap = undefined;
    };
  }, [token, user]);

  
  return <div id="map" style={{ width: '100%', height: '25rem', borderRadius: '0.6rem' }}></div>;
};

export default MapWithMarkerComponent;
