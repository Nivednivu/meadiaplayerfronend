import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadvideo } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setuploadvideostatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
const [addform,setaddform]=useState({
id:'',
caption:'',
url:'',
embedlink:''
})

const embedvideolink = (e)=>{
    const {value} = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setaddform ({...addform ,embedlink:link})
}

console.log(addform);


const handleupload= async()=>{
  const {id,caption,url,embedlink}= addform
  if(!id || !caption || !url || !embedlink){
  toast.warning('please file the form')
  }
  else{
    const response = await uploadvideo(addform)
    console.log(response);
    if(response.status>=200 && response.status<300){
      setuploadvideostatus(response.data)
      toast.success('uploaded successfully')
      handleClose()
    }
    else{
      console.log(response);
      toast.error('something went wrong try agine later')
    }
  }
}

  return (
<>
        <div>
          <h5 className='d-flex align-items-center'><i class="fa-solid fa-film  text-warning"></i> Upload New Video</h5>
          <button onClick={handleShow} className='btn'><i class="fa-solid fa-upload"></i></button>
        </div>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Upload videos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className='border border-secondery p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video id" onChange={(e)=>setaddform({...addform,id:e.target.value})} />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video caption" onChange={(e)=>setaddform({...addform,caption:e.target.value})} />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video image url" onChange={(e)=>setaddform({...addform,url:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter youtub video link"onClick={embedvideolink} />
      </Form.Group>

            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={handleupload} variant="primary">Upload</Button>
            </Modal.Footer>
          </Modal>
    <ToastContainer position='top-center'theme='colored' autoClose={2000}/>
</>  
)
}

export default Add

// https://www.youtube.com/watch?v=m
// https://www.youtube.com/embed/
