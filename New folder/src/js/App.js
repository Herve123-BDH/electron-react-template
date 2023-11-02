import React from 'react'
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import churchIcon from "../church.png"
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import {
    Routes, Link, Route
  } from "react-router-dom";
  import "./App.css"
const App = () => {

      


return (
    
    <div>

      <div className='container-login'>
            <div className='left-container-login'>gyhkt</div>
            <div className='right-container-login'>
                <h1>School management System</h1>
                <h3>Login</h3>
                <div className='login-input-container'>
                    <TextField
                      id="outlined-password-input"
                      label="School ID"
                      type="text"
                      autoComplete="current-password"
                    />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                </div>
                
            </div>
      </div>
        {/* <Routes>
            <Route path='/Home' element={<Home/>}/>
        </Routes> */}
    </div>
)

    
}
export default App