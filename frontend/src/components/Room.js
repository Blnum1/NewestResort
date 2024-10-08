import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Room({ room }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div className='row'>
        <div className='col-md-4'>
            <img src={room.imageurls[0]} className='smallimg'/>
        </div>
        <div className='col-md-7 '>
            <h1>{room.name}</h1>
            <p>Max Count : {room.maxcount}</p>
            <p>Phonenumber : {room.phonenumber}</p>
            <p>Type : {room.type}</p>

            <div style={{float: 'right'}}>
                <button className='btn btn-primary' onClick={handleShow}>Veiwdetail</button>
            </div>
        </div>
       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>


        
    </div>
  )
}

export default Room;
