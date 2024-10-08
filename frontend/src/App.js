
import Navbar from './components/Navbar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Hheader from './components/Hheader';
import Homeimg from './components/Homeimg';
import Newsscreen from './screens/Newsscreen';
import Contactscreen from './screens/Contactscreen';

function App() {
  return (
    <BrowserRouter> {/* ต้องมี BrowserRouter ที่นี่ */}
      <div>
        <Navbar /> 
        <Hheader />
        <Routes>
          <Route path='/' element ={<><Homeimg/><Homescreen /></>} />
          <Route path="/home" element={<Homescreen />} />
          <Route path='/book/:roomid' element={<Bookingscreen />} />
          <Route path='/register' element={<Registerscreen/>} />
          <Route path='/login' element={<Loginscreen/>} />
          <Route path='/news' element={<Newsscreen/>} />
          <Route path='/contact' element={<Contactscreen/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
