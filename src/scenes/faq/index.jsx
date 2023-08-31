import React, { useState, useEffect } from 'react';

const DiamondButtons = () => {
  const [keyStatusWASD, setKeyStatusWASD] = useState({
    w: false, a: false, s: false, d: false,
  });
  const [keyStatusIJKL, setKeyStatusIJKL] = useState({
    i: false, j: false, k: false, l: false,
  });
  const [keyPressCountWASD, setKeyPressCountWASD] = useState(0);
  const [keyPressCountIJKL, setKeyPressCountIJKL] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event, setKeyStatus, setKeyPressCount) => {
      if (event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') {
        setKeyStatus((prevStatus) => ({ ...prevStatus, [event.key]: true }));
        setKeyPressCount((prevCount) => prevCount + 1);
      } else if (event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 'l') {
        setKeyStatus((prevStatus) => ({ ...prevStatus, [event.key]: true }));
        setKeyPressCount((prevCount) => prevCount + 1);
      }
    };

    const handleKeyUp = (event, setKeyStatus) => {
      if (
        event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd'
        || event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 'l'
      ) {
        setKeyStatus((prevStatus) => ({ ...prevStatus, [event.key]: false }));
      }
    };

    window.addEventListener('keydown', (event) => {
      handleKeyDown(event, setKeyStatusWASD, setKeyPressCountWASD);
      handleKeyDown(event, setKeyStatusIJKL, setKeyPressCountIJKL);
    });
    window.addEventListener('keyup', (event) => {
      handleKeyUp(event, setKeyStatusWASD);
      handleKeyUp(event, setKeyStatusIJKL);
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleMouseClick = (key, setKeyStatus, setKeyPressCount) => {
    setKeyStatus((prevStatus) => ({ ...prevStatus, [key]: true }));
    setKeyPressCount((prevCount) => prevCount + 1);
  };

  const handleMouseRelease = (key, setKeyStatus) => {
    setKeyStatus((prevStatus) => ({ ...prevStatus, [key]: false }));
  };

  const getButtonStyle = (status) => {
    return {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      backgroundColor: status ? '#3498db' : '#333',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s, box-shadow 0.3s',
      boxShadow: status ? '0 0 10px rgba(52, 152, 219, 0.7)' : 'none',
      margin: '-10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #3498db',
      cursor: 'pointer',
    };
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={getButtonStyle(keyStatusWASD.w)}
          >
            ↑
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
          <button
            style={getButtonStyle(keyStatusWASD.a)}
          >
            ←
          </button>
          <button
            style={getButtonStyle(keyStatusWASD.d)}
          >
            →
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={getButtonStyle(keyStatusWASD.s)}
          >
            ↓
          </button>
        </div>
        <p>Key Press Count (WASD): {keyPressCountWASD}</p>
        <pre>{JSON.stringify(keyStatusWASD, null, 2)}</pre>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={getButtonStyle(keyStatusIJKL.i)}
            onMouseDown={() => handleMouseClick('i', setKeyStatusIJKL, setKeyPressCountIJKL)}
            onMouseUp={() => handleMouseRelease('i', setKeyStatusIJKL)}
          >
            ↑
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '160px' }}>
          <button
            style={getButtonStyle(keyStatusIJKL.j)}
            onMouseDown={() => handleMouseClick('j', setKeyStatusIJKL, setKeyPressCountIJKL)}
            onMouseUp={() => handleMouseRelease('j', setKeyStatusIJKL)}
          >
            ←
          </button>
          <button
            style={getButtonStyle(keyStatusIJKL.l)}
            onMouseDown={() => handleMouseClick('l', setKeyStatusIJKL, setKeyPressCountIJKL)}
            onMouseUp={() => handleMouseRelease('l', setKeyStatusIJKL)}
          >
            →
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={getButtonStyle(keyStatusIJKL.k)}
            onMouseDown={() => handleMouseClick('k', setKeyStatusIJKL, setKeyPressCountIJKL)}
            onMouseUp={() => handleMouseRelease('k', setKeyStatusIJKL)}
          >
            ↓
          </button>
        </div>
        <p>Key Press Count (IJKL): {keyPressCountIJKL}</p>
        <pre>{JSON.stringify(keyStatusIJKL, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DiamondButtons;
