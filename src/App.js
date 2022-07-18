

import { Routes, Route} from 'react-router-dom';
import ClassicTheme from './ClassicTheme';



function App() { 

  
  return (
<div className="app-container">
<Routes>
<Route path="/*" element={<ClassicTheme />}/>
</Routes>
    </div>
  );
}


export default App;
