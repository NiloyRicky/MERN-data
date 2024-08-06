
import './App.css';

import HomePage from './HomePage';
import { Routes,Route } from 'react-router-dom';
import UserData from './UserData';
import Footer from './Footer';
import { useGlobal } from './Context';

function App() {
  const {nseData,bseData,name}=useGlobal()
  return (
    <div className="App">
     
      <Routes>

      <Route path='/' element={<HomePage/>}/>
    
    
        <Route path='/api' element={<UserData/>}/>
      </Routes>
      {nseData.length>0 || bseData.length>0 || name.trim()!==''?'':<Footer/>}
    </div>
  );
}

export default App;
