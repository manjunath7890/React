import React, { useState, useEffect } from 'react';

const GoogleMap = (props) => {
  const [grayscale, setGrayscale] = useState(props.grayscale);

  useEffect(() => {
    setGrayscale(props.grayscale)
  }, [props.grayscale]);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31077.861109133068!2d77.53472816046273!3d13.179250124503366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae21d155570515%3A0xf868dc50f102a621!2sRajanukunte%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683284377464!5m2!1sen!2sin"
        width="500px"
        height="450px"
        style={{ border: 0, filter: `grayscale(0) invert(${grayscale}) brightness(100%)` }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
