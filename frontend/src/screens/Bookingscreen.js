import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap"; 
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";

function Bookingscreen() {
  const { roomid, fromDate, toDate } = useParams(); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(); 
  const [room, setRoom] = useState();

  // ตรวจสอบค่าที่ได้รับจาก URL
  console.log("From Date:", fromDate); // แสดงวันที่เริ่มต้น
  console.log("To Date:", toDate); // แสดงวันที่สิ้นสุด

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/rooms/getroombyid/${roomid}`); 
        setRoom(data); 
        setLoading(false); 
      } catch (error) {
        setError(error.response?.data?.message || "An error occurred"); 
        console.log(error);
        setLoading(false);
      }
    })();
  }, [roomid]); 
  
  // ฟังก์ชันสำหรับทำการจองห้อง
  async function bookRoom() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
    if (!currentUser || !currentUser._id) {
      console.error("User not logged in or user data is missing.");
      return;
    }
  
    const bookingDetails = {
      room,
      userid: currentUser._id, // เข้าถึง _id ของ currentUser หลังจากตรวจสอบแล้ว
      fromDate,
      toDate,
      totalDays,
      totalAmount,
    };
  
    try {
      const result = await axios.post('/api/booking/bookroom',bookingDetails); // ต้องใส่ URL API ที่ถูกต้อง
      console.log("Booking successful", result.data);
      // คุณสามารถเปลี่ยนเส้นทางไปหน้าขอบคุณหรือหน้าการชำระเงินได้ที่นี่
    } catch (error) {
      console.error("Error booking room", error);
    }
  }

  // แปลงวันที่จาก URL เป็น moment objects
  const formattedFromDate = moment(fromDate, 'DD-MM-YYYY');
  const formattedToDate = moment(toDate, 'DD-MM-YYYY');

  // ตรวจสอบว่า moment objects valid หรือไม่
  if (!formattedFromDate.isValid() || !formattedToDate.isValid()) {
    console.error("Invalid dates provided");
  }

  // คำนวณจำนวนวันและยอดรวม
  const totalDays = formattedToDate.diff(formattedFromDate, 'days') + 1; // +1 เพื่อรวมวันที่เริ่มต้น
  const totalAmount = totalDays * (room?.rentperday || 0);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <Row className="mt-4">
          <Col md={5}>
            <h1>Booking Detail</h1>
            <div style={{ border: "0px solid #ccc", padding: "10px", borderRadius: "10px" }}>
              <img src={room.imageurls[0]} alt={room.name} className="img-fluid" />
            </div>
          </Col>
          <Col md={7}>
            <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
              <h1>Room ID = {roomid}</h1>
              {room && (
                <>
                  <div>
                    <hr />
                    <h2>{room.name}</h2>
                    <p>From Date: {formattedFromDate.format('DD-MM-YYYY')}</p>
                    <p>To Date: {formattedToDate.format('DD-MM-YYYY')}</p>
                    <p>Max Count: {room.maxcount}</p>
                    <p>Type: {room.type}</p>
                  </div>

                  <div>
                    <hr />
                    <h2>Amount</h2>
                    <p>Total Days: {totalDays}</p>
                    <p>Rent per day: {room.rentperday}</p>
                    <p>Total Amount: {totalAmount}</p>
                  </div>

                  <div style={{ float: "right" }}>
                    {/* เปลี่ยน onClick ให้ใช้ฟังก์ชัน bookRoom */}
                    <Button variant="primary" onClick={bookRoom} size="lg">
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