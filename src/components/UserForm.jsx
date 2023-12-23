import React, { useState } from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const UserForm = ({ generatePDF }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userData, setUserData] = useState({
    v1: '',
    v2: '',
    v3: '',
    v4: '',
    v5: '',
    v6: '',
    v7: '',
    v8: '',
    v9: '',
    v10: '',
    v11: '',
    v12: '',
    v13: '',
    v14: '',
    v15: '',
    v16: '',
  });

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px', // Adjust the margins as needed
  };

  const boxStyle = {
    margin: '0.2rem 0.2rem 0 0.2rem',
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '1px 1px 0px 0px #888',
    width: '10em',

  };
  
  const textStyle = {
    width:'9em',
    border:`1px solid ${colors.palette[900]}`,
    backgroundColor: colors.palette[800],
    height:'2rem',
    color: colors.palette[100]
  }
  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={inputContainerStyle}>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Date:</label>
          <input type="date" name="v1" value={userData.v1} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Start time:</label>
          <input type="time" name="v2" value={userData.v2} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>End time:</label>
          <input type="time" name="v3" value={userData.v3} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
      </div>
      {/* Repeat the above structure for each set of three inputs */}
      <div style={inputContainerStyle}>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Max current:</label>
          <input type="number" name="v4" value={userData.v4} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>End Voltage:</label>
          <input type="number" name="v5" value={userData.v5} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Whr consumed:</label>
          <input type="number" name="v6" value={userData.v6} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
      </div>
      {/* Repeat the above structure for each set of three inputs */}
      <div style={inputContainerStyle}>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Initial SOC:</label>
          <input type="number" name="v7" value={userData.v7} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Final SOC:</label>
          <input type="number" name="v8" value={userData.v8} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Average Whr/km:</label>
          <input type="number" name="v9" value={userData.v9} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
      </div>
      {/* Repeat the above structure for each set of three inputs */}
      <div style={inputContainerStyle}>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Top speed:</label>
          <input type="number" name="v10" value={userData.v10} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Average Speed:</label>
          <input type="number" name="v11" value={userData.v11} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Distance Covered:</label>
          <input type="number" name="v12" value={userData.v12} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
      </div>
      {/* Repeat the above structure for each set of three inputs */}
      <div style={inputContainerStyle}>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Initial Controller Temperature:</label>
          <input type="number" name="v13" value={userData.v13} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Initial Motor Temperature:</label>
          <input type="number" name="v14" value={userData.v14} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Final Controller Temperature:</label>
          <input type="number" name="v15" value={userData.v15} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
      </div>
      {/* Repeat the above structure for each set of three inputs */}
      <div style={inputContainerStyle}>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Final Motor Temperature:</label>
          <input type="number" name="v16" value={userData.v16} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Vehicle load:</label>
          <input type="number" name="v17" value={userData.v17} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
        <div style={boxStyle}>
        <div>
          <label style={labelStyle}>Driving mode:</label>
          <input type="text" name="v18" value={userData.v18} onChange={handleChange} style={textStyle}/>
        </div>
        </div>
      </div>
      {/* Add a line break when necessary */}
      <br />
      <div style={{textAlign: 'center' }}>
        <button style={{ border: '0px', backgroundColor: '#0cc', borderRadius:'1rem', padding:'0.5rem 7rem', border:'0px solid #000', boxShadow:'1px 2px 1px 0px #222'}} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
