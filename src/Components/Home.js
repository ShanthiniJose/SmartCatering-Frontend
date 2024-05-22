import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from './images/aboutus.jpg'
import './Home.css'

function Home() {
  return (
    <div>
     
      <div className="navclass">
        <h1 id="divtag1" className=' text-center pt-5'><span className='text-light ' >Welcome to</span> Hungry Hub</h1>
        <h4 id="divtag2" className=' text-center '>Your one stop destination for smart catering service</h4>
        <button id="button1" className='text-light bg-info button-center '>Get Started</button>
      </div>
      <div className='gridclass'>
        <Container>
          <Row id='gridsubclass'>
            <Col lg="3" ><span className='h4'>Extensive Menu selection</span><br></br>
              Explore a diverse range of culinary options, including appettizer , main corses, desert and beverages, tailored to suit various tastes and dietary preference</Col>
            <Col lg="3"><span className='h4'>User friendly ordering process</span> <br></br>
              Enjoy a seemless online ordering experience with an intuitive interface tht allows you to effortiessly browse. select and customize yor catering choices. </Col>
            <Col lg="3"><span className='h4'>Event planning assistance</span><br></br>
              Receive expert guidence and support from cetering professionals who can help you wih menu planning, portion sizing, and other aspects of events catering to ensre a memorable experience.</Col>
            <Col lg="3"><span className='h4'>Reviws and rating</span><br></br>
              Benifit from customer reviews and ratings to make informed decisions about your catering choice , ensuring excepion quality and service.</Col>
          </Row>
        </Container>
      </div>
      <div className='aboutgridclass'>
        <Container>
          <Row>
            <Col class="col-4">
              <img src={img1}></img>
            </Col>
            <Col class="col-8">
              <span className='h1'>ABOUT US</span><br></br>
              Smart Catering is a renowned culinary service based in the vibrant city of Bangalore, India. Established in 2016, we have quickly risen to prominence for our exceptional commitment to delivering exquisite food experiences at a variety of events. Smart Chef Catering specializes in a diverse range of occasions, including birthday parties, weddings, corporate events, housewarming parties, high tea gatherings, baby showers, snack boxes, and more.
              
              One of the standout features of Smart Chef Catering is its diverse and extensive menu, designed to cater to a wide spectrum of tastes and preferences. In line with our commitment to inclusivity, Smart Chief offers both vegetarian and non-vegetarian options, ensuring that all guests can indulge in the culinary delights on offer.
            </Col>
          </Row>
        </Container>
      </div>
      
      
    </div>
  )
}

export default Home