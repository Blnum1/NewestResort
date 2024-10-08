import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Room({ room }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className='row'>
            <div className='col-md-4'>
                <img src={room.imageurls[0]} alt={room.name} className='smallimg' /> {/* เพิ่ม alt */}
            </div>
            <div className='col-md-7 '>
                <h2>{room.name}</h2>
                <p>Max Count: {room.maxcount}</p>
                <p>Phone number: {room.phonenumber}</p>
                <p>Type: {room.type}</p>

                <div style={{ float: 'right' }}>
                    <Link to={`/book/${room._id}`}>
                        <button className='btn btn-primary'>Book Now</button> {/* แก้ไข brn-primary */}
                    </Link>
                    <button className='btn btn-primary' onClick={handleShow}>View details</button> {/* แก้ไข spelling */}
                </div>
            </div>
            
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel prevLabel='' nextLabel=''>
                        {room.imageurls.map((url, index) => (
                            <Carousel.Item key={index}> {/* เพิ่ม key ให้กับ Carousel.Item */}
                                <img className='d-block w-100' src={url} alt={`Image ${index + 1}`} /> {/* เพิ่ม alt */}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <p>{room.desciption}</p> 
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

export default Room;
