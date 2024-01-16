import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex justify-content-center align-items-center flex-column mt-5 ' >
        <div className="footer d-flex justify-content-evenly align-items-center  w-300 m-5 ">
            <div className="webite  " style={{width:'400px'}}>
                <h4><i  class="fa-solid fa-video text-warning me-4"></i> Media player</h4>
               <p>similque? aspernature</p>
            </div>

            
            <div className="link d-flex flex-column  " >
                    <h4>Link</h4>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing page</Link>
                    <Link to={'/home'}style={{textDecoration:'none',color:'white'}}>Home page</Link>
                    <Link to={'/watchhistory'}style={{textDecoration:'none',color:'white'}}>watchHistory</Link>
    
                </div>
    
            <div className="guides d-flex flex-column m-5">
                <h4>Guids</h4>
                <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}>React Bootswatch</Link>
    
                    <Link to={'/'}style={{textDecoration:'none',color:'white'}}>react</Link>

                </div>
    
    
            <div className="contact d-flex flex-column ">
                <h4 className='mb-3'>Contact Us</h4>
               <div className='d-flex '>
                <input type="text" className='form-control' placeholder='Enter your Email ID' />
                <button className='btn btn-warning text-white ms-2'>Subscribe</button>
               </div>
               <div className='icons d-flex justify-content-evenly mt-3'>
                    <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                    <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
                    <Link to={'/watchHistory'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
                    <Link to={'/watchHistory'}style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
    

               </div>

            </div>
          
        </div>
      <p>copy rightt @ 2023 media plyer. Buit with react</p>
    </div>
  )
}

export default Footer
