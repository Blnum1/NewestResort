import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // นำเข้า useParams
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap"; // นำเข้า Container, Row, Col, Button จาก react-bootstrap
import Loader from "../components/Loader";
import Error from "../components/Error";

function Bookingscreen() {
  const { roomid } = useParams(); // ใช้ useParams แทน match
  const [loading, setLoading] = useState(true); // กำหนดให้เริ่มต้นเป็น true
  const [error, setError] = useState(); // กำหนดให้เริ่มต้นเป็น null
  const [room, setRoom] = useState(); // สร้าง state สำหรับเก็บข้อมูลห้อง

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/rooms/getroombyid/${roomid}`); // ใช้ GET แทน POST
        setRoom(data); // เก็บข้อมูลห้อง
        setLoading(false); // เปลี่ยนสถานะ loading เป็น false
      } catch (error) {
        setError(error.response?.data?.message || "An error occurred"); // แสดงข้อความผิดพลาดที่ชัดเจน
        console.log(error);
        setLoading(false); // เปลี่ยนสถานะ loading เป็น false ในกรณีเกิดข้อผิดพลาด
      }
    })();
  }, [roomid]); // เพิ่ม roomid เป็น dependency เพื่อให้ useEffect ทำงานเมื่อ roomid เปลี่ยน

  return (
    <Container>
      {loading ? (
          <Loader />
      ) : error ? (
        <Error/> // แสดงข้อความผิดพลาด
      ) : (
        <Row className="mt-4">
          <Col md={5}>
            {/* เพิ่มกรอบรอบรูปภาพ */}
            <div
              style={{
                border: "2px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img
                src={room.imageurls[0]}
                alt={room.name}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={7}>
            {/* เพิ่มกรอบรอบส่วนข้อมูล */}
            <div
              style={{
                border: "2px solid #ccc",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h1>Booking Detail</h1>
              <h1>Room ID = {roomid}</h1>
              {room && (
                <>
                  <div>
                    <hr />
                    <h2>{room.name}</h2>
                    <p>From Date: </p>
                    <p>To Date: </p>
                    <p>Max Count: {room.maxcount}</p>
                    <p>Type: {room.type}</p>
                  </div>

                  <div>
                    <hr />
                    <h2>Amount</h2>
                    <p>Total Days: {/* เพิ่มจำนวนวันตามการจอง */}</p>
                    <p>Rent per day: {room.rentperday}</p>
                    <p>
                      Total Amount:{" "}
                      {/* คำนวณยอดรวม (Total Days * Rent per day) */}
                    </p>
                  </div>

                  <div style={{ float: "right" }}>
                    <Button variant="primary" size="lg">
                      Pay Now
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Bookingscreen;
