import './App.css';
import Navbar from './components/Navbar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <BrowserRouter> {/* ต้องมี BrowserRouter ที่นี่ */}
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path='/book/:roomid' element={<Bookingscreen />} />
          <Route path='/register' element={<Registerscreen/>} />
          <Route path='/login' element={<Loginscreen/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
