import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Homescreen() {
  const [rooms, setRooms] = useState([]); // สร้าง state สำหรับเก็บข้อมูลห้อง

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await axios.get('/api/rooms/getallrooms'); // ใช้ await กับ axios.get
        setRooms(data); // ตั้งค่า rooms จาก response.data.rooms

      } catch (error) {
        console.error('Error fetching rooms:', error); // แสดงข้อผิดพลาดใน console
      }
    };

    fetchRooms(); // เรียกใช้ฟังก์ชัน fetchRooms
  }, []);

  return (
    <div>
      <h1>Homescreen</h1>
      <h1>there are {rooms.length} rooms</h1>
    </div>
  );
}

export default Homescreen;