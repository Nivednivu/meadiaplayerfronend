import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addhistory, deletevideo } from '../services/allAPI';

function VideoCard({displayvideo,setdeletevideostatus,isprsent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
  

  const {caption,embedlink}=displayvideo

  let today= new Date()
  console.log(today);
  let timetamp = new Intl.DateTimeFormat("en-GB",{year:"numeric",month:'2-digit',day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)
     console.log(timetamp);

     let videoDetails = {
      caption,embedlink,timetamp

     }
     await addhistory(videoDetails)

    }


  const removevideo =async(id)=>{
    const response = await deletevideo(id)
    setdeletevideostatus(true)
  }

  const cardDrag = (e,id)=>{
    console.log(`The id of the videocard draged is ${id}`);
    e.dataTransfer.setData("videoID",id)
  }
  return (
    <>
         <Card style={{ width: '100%',height:'300px' }} className='mb-3 ' draggable onDragStart={(e)=>cardDrag(e,displayvideo?.id)} >
      <Card.Img height={'280px'} onClick={handleShow} variant="top" src={displayvideo.url}/>
      <Card.Body>
        <h4>{displayvideo.caption} </h4>

{! isprsent &&
<Button onClick={()=>removevideo(displayvideo?.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>
}   </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayvideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayvideo.embedlink}`}title={displayvideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
