import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getvideos } from '../services/allAPI'

function View({uploadvideostatus}) {

const [allvideo,setallvideo]=useState([])

const [deletevideostatus,setdeletevideostatus]=useState(false)


  const getAllvideos = async ()=>{
   const response = await getvideos()
  //  console.log(response);
  const {data}=response
  // console.log(data);
  setallvideo(data)

  }
  console.log(allvideo);
  
  useEffect(()=>{
    getAllvideos()
    setdeletevideostatus(false)
  },[uploadvideostatus,deletevideostatus])
  return (
    <>
      <Row className='p-5'>
        {allvideo.length>0?
        allvideo.map((video)=>(  <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayvideo={video}setdeletevideostatus={setdeletevideostatus}/>
      </Col>))
      :
        <p  className='mt-5 fw-bolder fs-4 text-danger'>nothing to display</p> 
        }
        
      </Row>
    </>
  )
}

export default View
