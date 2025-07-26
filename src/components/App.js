
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div style={{padding:'50px'}}>
        {/* Do not remove the main div */}
        <Tooltip text="This is a tooltip">
         <h1 style={{cursor:"pointer"}}>Hover over me</h1>
        </Tooltip>
        <br/> <br/>
        <Tooltip text="This is another tooltip">
         <p style={{cursor:"pointer"}}>Hover over me to see another tooltip</p>
        </Tooltip>
    </div>
  )
}

export default App
