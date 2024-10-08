import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap"; 
import Loader from "../components/Loader";
import Error from "../components/Error";

function Bookingscreen() {
  const { roomid } = useParams(); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(); 
  const [room, setRoom] = useState(); 

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/rooms/getroombyid/${roomid}`); 
        setRoom(data); // เก็บข้อมูลห้อง
        setLoading(false); 
      } catch (error) {
        setError(error.response?.data?.message || "An error occurred"); 
        console.log(error);
        setLoading(false); 
      }
    })();
  }, [roomid]); // เพิ่ม roomid เป็น dependency เพื่อให้ useEffect ทำงานเมื่อ roomid เปลี่ยน

  return (
    <Container>
      {loading ? (
          <Loader />
      ) : error ? (
        <Error/> 
      ) : (
        <Row className="mt-4">
          <Col md={5}>
          <h1>Booking Detail</h1>
            <div
              style={{
                border: "0px solid #ccc",
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
          
            <div
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              
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
                    <p>Total Days: </p>
                    <p>Rent per day: {room.rentperday}</p>
                    <p>
                      Total Amount:{" "}
                    
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
