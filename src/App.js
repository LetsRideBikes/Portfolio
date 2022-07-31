

import { Routes, Route} from 'react-router-dom';
import ClassicTheme from './ClassicTheme';
import DarkTheme from './DarkTheme';
import React, { useState, useEffect } from 'react';



function App() { 

    const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const [toggle, setToggle] = useState(false)

const handleClick = async event => { 
  await delay(1);
  setToggle(!toggle);
  
}


  return (
<div className="app-container">
<Routes>
<Route path="Dark/*" element={<DarkTheme />}/>
<Route path="/*" element={<ClassicTheme />}/>
</Routes>
    </div>
  );
}


export default App;
