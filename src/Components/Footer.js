import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
        
        <div className='footer'>
      <Container>
      <Row id='footersub' className='text-light '>
        <Col><span className='h4 fw-bold'>HUNGRY HUB</span><br></br><br></br>A 109 Adam street<br></br>NY 567654, USA<br></br><br></br>
        Phone:7865432328<br></br>
        Email:info@example.com</Col>
        <Col><span className='h5 fw-bold'>Useful Links</span><br></br><br></br>
        <li>Home</li>
        <li>AboutUS</li>
        <li>Services</li>
        <li>Terms and services</li>
        <li>privcy Policy</li>
        </Col>
        <Col><span className='h5 fw-bold'>Our Services</span><br></br><br></br>
        <li>Web Design</li>
        <li>Web Development</li>
        <li>Product Management</li>
        <li>Margeting</li>
        <li>Graphic Design</li>
        </Col>
        <Col><span className='h5 fw-bold'>OurNewsLetter</span><br></br><br></br>
        Taken queen nlla qua legam multos aute sint culp legam noster magna
       
        <div className=' m-3'>
        <input type='text' className='lg-1'></input>
        <button className='bg-info m-3'>Subscripe</button>
        </div>
        </Col>     
         </Row>
      </Container>
      </div>
      <div className='footerend'>
        <p className='text-center fw-bold text-light'>@Copyright Hungry Hub . All Rights reserved</p>
      </div>
    </div>
  )
}

export default Footer