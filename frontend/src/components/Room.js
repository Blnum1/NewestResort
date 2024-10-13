import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Room({ room, fromdate, todate }) {
  const [show, setShow] = useState(false); // State สำหรับการเปิด/ปิด modal

  // ฟังก์ชันเปิด modal
  const handleShow = () => setShow(true);
  
  // ฟังก์ชันปิด modal
  const handleClose = () => setShow(false);

  // ตรวจสอบว่าข้อมูลห้องมีหรือไม่
  if (!room) {
    return <div>Loading...</div>; // หรือแสดงข้อความเมื่อยังไม่มีข้อมูล
  }

  return (
    <div className='row'>
      <div className='col-md-4'>
        {/* แสดงรูปภาพห้อง */}
        {room.imageurls.length > 0 ? (
          <img src={room.imageurls[0]} alt={room.name} className='smallimg' /> 
        ) : (
          <p>No Image Available</p> // แสดงข้อความเมื่อไม่มีรูปภาพ
        )}
      </div>
      <div className='col-md-7'>
        <h2>{room.name}</h2>
        <p>Max Count: {room.maxcount}</p>
        <p>Phone Number: {room.phonenumber}</p>
        <p>Type: {room.type}</p>
        <p>From Date: {fromdate}</p>  {/* แสดงจาก props */}
        <p>To Date: {todate}</p>      {/* แสดงจาก props */}

        <div style={{ float: 'right' }}>
          {/* ปุ่มสำหรับการจองห้อง */}
          <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
            <button className='btn btn-primary'>Book Now</button>
          </Link>
          {/* ปุ่มสำหรับดูรายละเอียดเพิ่มเติม */}
          <button className='btn btn-primary' onClick={handleShow}>View Details</button>
        </div>
      </div>

      {/* Modal สำหรับแสดงรายละเอียดเพิ่มเติม */}
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel='' nextLabel=''>
            {room.imageurls.map((url, index) => (
              <Carousel.Item key={index}>
                <img className='d-block w-100' src={url} alt={`Image ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

// กำหนดประเภทของ props
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageurls: PropTypes.arrayOf(PropTypes.string).isRequired,
    maxcount: PropTypes.number.isRequired,
    phonenumber: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  fromdate: PropTypes.string.isRequired,
  todate: PropTypes.string.isRequired,
};

export default Room;
