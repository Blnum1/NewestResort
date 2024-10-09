import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Homescreen() {
  const [rooms, setrooms] = useState([]); // สร้าง state สำหรับเก็บข้อมูลห้อง
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    (async () => {
      try {
        setloading(true);
        const { data } = await axios.get("/api/rooms/getallrooms");
        setrooms(data);
        setloading(false);
      } catch (error) {
        seterror(error);
        console.log(error);
        setloading(false);
      }
    })(); // เรียกใช้ฟังก์ชันที่ประกาศขึ้นแบบทันที
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader/>
        ) : error ? (
          <Error/>
        ) : (
          rooms.map((room) => (
            <div className="col-md-9 mt-2" key={room.id}> {/* เพิ่ม key */}
              <Room room={room} />
            </div>
          ))
        )}
      </div>
    </div>
  );
  
}

export default Homescreen;
