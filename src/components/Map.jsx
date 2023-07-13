import React, { useState, useEffect } from 'react';

const GoogleMap = (props) => {
  const [grayscale, setGrayscale] = useState(props.grayscale);
  const [height, setheight] = useState(props.height);
  useEffect(() => {
    setGrayscale(props.grayscale)
    setheight(props.height)
  }, [props.grayscale,props.height]);

  return (
    // <div style={{ backgroundColor: '#000000', border:'1px solid #088' , margin:'10px', boxShadow:'0 2px 30px rgba(0,0,0)'}}>
    <div >

      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31077.861109133068!2d77.53472816046273!3d13.179250124503366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae21d155570515%3A0xf868dc50f102a621!2sRajanukunte%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683284377464!5m2!1sen!2sin&maptype=styled&style=feature:all|element:labels|color:0x00ffff`}
        width="100%"
        height={height}
        style={{ border: 0, filter: `grayscale(0) invert(0) brightness(100%)` }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

// import React, { useEffect } from 'react';

// const GoogleMap = () => {
//   useEffect(() => {
//     // Initialize the map
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       center: { lat: 13.179250124503366, lng: 77.53472816046273 },
//       zoom: 12,
//       styles: [
//         {
//           featureType: 'all',
//           elementType: 'labels.text.fill',
//           stylers: [{ color: '#00ffff' }],
//         },
//       ],
//     });

//     // Add a marker
//     new window.google.maps.Marker({
//       position: { lat: 13.179250124503366, lng: 77.53472816046273 },
//       map: map,
//       title: 'Rajanukunte, Karnataka',
//     });
//   }, []);

//   return <div id="map" style={{ width: '100%', height: '375px', backgroundColor: '#000000' }}></div>;
// };

// export default GoogleMap;

