import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Landingpage() {
  const navigatebutton = useNavigate()
  return (
    <>
    <Row className='d-flex justify-content-centrer align-items-center'>
      <Col></Col>
      <Col lg={5}>
        <h2 className='mt-5'>welcome to <span className='text-warning'> media player</span> </h2>
        <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem minima qui vel consequuntur, quasi labore ducimus dolores dicta! Inventore soluta eos doloribus assumenda quos eius, totam ut illum atque consequuntur.</p>
      <button onClick={()=>navigatebutton('/home')} className='btn btn-warning mt-4'>Get start <i class="fa-solid fa-arrow-right ms-2"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img style={{width:'320px'}} src="https://i.stack.imgur.com/HDcAB.gif" alt="no image" />
      </Col>
    </Row>

    <div className='container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column'>
      <h3 className='mb-5'>feactures</h3>
      <div className=' d-flex justify-content-evenly align-items-center w-100'>

    <Card className='p-4' style={{ width: '19rem', }}>
      <Card.Img variant="top" src="https://scion-social.com/wp-content/uploads/2016/07/gif-wallpaper-13.gif
" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://svs.gsfc.nasa.gov/vis/a010000/a014100/a014132/BHW_Gamma-ray_Burst.gif" />
      <Card.Body>
        <Card.Title>Categorized videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '19rem' }}>
      <Card.Img variant="top" src="https://scion-social.com/wp-content/uploads/2016/07/gif-wallpaper-13.gif" />
      <Card.Body>
        <Card.Title>watchHistory</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


      </div>
    </div>
    <div className="container border border-2 rounded border-secondary p-5 mt-5 mb-5">
      <Row>
       
        <Col lg={6}>
          <h3 className='text-warning'>simble fast and powerful</h3>
          <p><span className='fs-5 sw-bolder'>play everything</span>  : ipsum dolor sit amet consectetur adipisicing elit. Sequi minima ratione voluptatem molestiae dicta, numquam, praesentium vitae animi est et tempore voluptatum temporibus aperiam possimus at recusandae iusto repudiandae distinctio.</p>
          <p><span className='fs-5 sw-bolder'>play Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea veritatis debitis, ipsam quod voluptas odit maxime sed blanditiis, dolor fugiat ipsa, recusandae accusantium id quia maiores culpa mollitia corrupti natus.</p>
          <p><span className='fs-5 sw-bolder'>play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deleniti totam ex magni reiciendis ad labore in cumque odit? In harum ad ullam, sed quam quas nesciunt ducimus corporis nulla!</p>
        </Col>
        <Col lg={6}>
        <iframe width="100%" height="324" src="https://www.youtube.com/embed/mUlkAFF7ufw" title="En Sarwame (Malayalam) - 777 Charlie | Rakshit Shetty | Kiranraj K | Nobin Paul | Paramvah Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>
    </>
  )
}
export default Landingpage
