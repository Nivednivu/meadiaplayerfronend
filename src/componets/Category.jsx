import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addcategory, getAllcategory, getAvideo, getdeletecategoty, updatecategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';



function Category() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [catergoryname,setcatergoryname]=useState("")
    const [Category,setCategory]=useState([])
    const addtocategory = async ()=>{
      console.log(catergoryname);
if(catergoryname){
  let body = {
    catergoryname,
    allvideo:[]
  }
const resopnonse =  await  addcategory(body)
console.log(resopnonse);
if(resopnonse.status>=200 && resopnonse.status<300){
  toast.success('category added successfully')
  // state value made null
  addcategory('')
  // close the modal 
  handleClose()
}
else{
  toast.error('something want wrong pleas try latter')
}
}
else{
  toast.warning('pleas enter category name')
}
    }
// fuctijon to get all categories

const allcategory = async ()=>{
 const {data} = await getAllcategory()
//  console.log(data);
setCategory(data)
}
console.log(Category);

// functoin to delete category
const deletegategory = async (id)=>{
 const {data} = await getdeletecategoty(id)
//  to get the rremaining category
 allcategory()
}

// function to prevent reload so that the data that we want lost
const dragover =(e)=>{
e.preventDefault()
}
const videoDrop = async (e, categoryid)=>{
  console.log(`droped on the category id :${categoryid}`);
  // to get data send from videocard
 let videoid = e.dataTransfer.getData("videoID")
 console.log(videoid)
 const {data} = await getAvideo (videoid)
 console.log(data);
 const selectedCategory = Category.find(item=>item.id===categoryid)
 selectedCategory.allvideo.push(data)
 console.log(selectedCategory);

 await updatecategory(categoryid,selectedCategory)
 allcategory()
}



useEffect (()=>{
  allcategory()
},[])

  return (
    <>
      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add new category</button>
      </div>
     { Category?.length>0? 
     Category?.map((item)=>(     <div className='m-5 border border-secondary p-3 rounded'>
     <div className='d-flex justify-centent-between align-items-center'droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
         <h6 className='me-5'>{item.catergoryname}</h6>
         <Button onClick={()=>deletegategory(item?.id)}  variant="danger"><i class="fa-solid fa-trash"></i></Button>

     </div>
     <Row>
      <Col>
     { item?.allvideo?.length>0?
     item?.allvideo.map((Card)=>(<VideoCard displayvideo={Card} isprsent={true}/>))
      : <p>nothing to display</p>}
      </Col>
     </Row>
</div>
))
      : <p className='m-3 fw-bolder fw-5 text-center'>No category</p>  }
      <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add new category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className='border border-secondery p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setcatergoryname(e.target.value)} />
      </Form.Group>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addtocategory}>Add</Button>
            </Modal.Footer>
          </Modal>
          <ToastContainer position='top-center'theme='colored' autoClose={2000}/>


    </>
  )
}

export default Category

