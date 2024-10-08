import React, { useState } from 'react';
import './Loginscreen.css'; // นำเข้าไฟล์ CSS
import axios from 'axios';
function Loginscreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    const user = { email, password };
    try {
        const response = await axios.post('/api/users/login', user);
        const result = response.data; // รับข้อมูลที่ส่งกลับจากเซิร์ฟเวอร์
        console.log(result); // แสดงผลลัพธ์
    } catch (error) {
        console.log(error.response.data); // แสดงข้อผิดพลาดที่เกิดขึ้น
    }
}

  return (
    <div className="container"> {/* ใช้ class จาก CSS */}
      <h1>Login</h1>
      <div className="mb-1">
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
  );
}

export default Loginscreen;
