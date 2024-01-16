import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletevideohistory, getAllhistory } from '../services/allAPI'
import { Button } from 'react-bootstrap'

function WatchHistory() {
const [history,sethistory]=useState([])

  const allhistory = async ()=>{
    const {data} = await getAllhistory()
    //  console.log(data);
    sethistory(data)
  }
  console.log(history);
  const removehistory =async(id)=>{
        await deletevideohistory(id)
        // to get the removing history
        allhistory()
  }
useEffect (()=>{
  allhistory()
},[])

  return (
    < >
    <div className='container mt-5 d-flex justify-content-between'>     
    <h4>Watch History</h4>
    <Link to={'/home'} className='d-flex align-items-center ' style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i class="fa-solid fa-arrow-left "></i>Back to home</Link>
</div>
<div className='table mt-5 mb-5 container'>
  <thead>
    <tr>
      <th>#</th>
      <th>caption</th>
      <th>url</th>
      <th>time stamp</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
   { history?.length>0?
   history?.map((item,index)=>(
    <tr>
    <td>{index+1}</td>
    <td>{item.caption}</td>
    <td> <a href={`${item.embedlink}?autoplay=1`}target='_blank'>{item.embedlink}</a> </td>

    <td>{item.timetamp}</td>
    <td> <Button onClick={()=>removehistory(item?.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button></td>
  </tr>
// onClick={()=>removevideo(displayvideo?.id)}
   ))
    : <p className='mt-5 fw-bolder fs-4 text-danger'>no watch history</p> }
  </tbody>
</div>
    </>
  )
}

export default WatchHistory
