import React, { useState } from 'react';

import axios from 'axios';
import Loader from "../components/Loader";
import Error from "../components/Error";
function Loginscreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState();

  async function login() {
    const user = { email, password };
    try {
      
      setLoading(true);
        const response = await axios.post('/api/users/login', user);
        const result = response.data; // รับข้อมูลที่ส่งกลับจากเซิร์ฟเวอร์
      setLoading(false);

      localStorage.setItem('currentuser', JSON.stringify(result));
      window.location.href='/home'

    } catch (error) {
        console.log(error.response.data); // แสดงข้อผิดพลาดที่เกิดขึ้น
        setLoading(false);
        setError(true);
    }
}

  return (
    <div>
      {loading && (<Loader/>)}
    <div className="container"> {/* ใช้ class จาก CSS */}
      <div className="col-md-5 mt-5">
      {error && (<Error message='Invalid Credentionals'/>)}
      <div className="mb-1">
      <h1>Login</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
      </div>
      <div className="mb-1">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); }}
        />
      </div>
      <button className="btn btn-primary" onClick={login}>Login</button>
      </div>
    </div>
    </div>
  );
}

export default Loginscreen;
