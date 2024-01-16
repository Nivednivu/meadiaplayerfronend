import React, { useState } from 'react'
import Add from '../componets/Add'
import { Link } from 'react-router-dom'
import View from '../componets/View'
import Category from '../componets/Category'

function Home() {
const [uploadvideostatus,setuploadvideostatus]=useState({})

  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center'>
         <div className='add me-3'>
              <Add setuploadvideostatus={setuploadvideostatus}/>
         </div>
         <Link to={'/watchhistory'} style={{textDecoration:'none',color:'white',fontSize:'34px',marginLeft:'720px'}}>watchHistory</Link>
      </div>
      <div className='container-fluid w-100 wt-5 mb-5 d-flex justify-content-between'>
            <div className='all-vieos col-lg-9'>
             <h4 className='mb-5'>All videos</h4>
                <View uploadvideostatus={uploadvideostatus}/>
            </div>
            <div className='category col-lg-3'>
            <Category/>
            </div>
      </div>
    </>
  )
}

export default Home
