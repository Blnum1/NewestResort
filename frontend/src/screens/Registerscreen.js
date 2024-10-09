import React, { useState } from 'react';
import Loader from "../components/Loader";
import Error from "../components/Error";
import axios from 'axios';
import Success from '../components/Success';

function Registerscreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState();
  const [success,setSuccess] =useState();

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword
      };
      
      try {
        setLoading(true);
        const result = await axios.post('/api/users/register', user).data;
        setLoading(false);
        setSuccess(true);

        setName('')
        setEmail('')
        setPassword('')
        setCpassword('')

      }catch (error){
        console.log(error);
        setLoading(false);
        setError(true);

      }
    } else {
      alert('Password does not match'); // แสดงข้อความเมื่อรหัสผ่านไม่ตรงกัน
    }
  }


  return (
    <div>
    {loading && (<Loader/>)}
    {error && (<Error/>)}

    <div className="container"> {/* ใช้ class จาก CSS */}
    {success && (<Success message='Registration Success'/>)}
      <h1>Register</h1>
      <div className="mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
      </div>
      <div className="mb-1">
        <input
          type="email"
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
      <div className="mb-1">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          value={cpassword}
          onChange={(e) => { setCpassword(e.target.value); }}
        />
      </div>
      <button className="btn btn-primary" onClick={register}>Register</button>
    </div>
    </div>
  );
}

export default Registerscreen;
