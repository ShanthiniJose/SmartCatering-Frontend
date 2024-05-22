import React from 'react'
import './LoginCaterier1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../Components/images/charity.jpg'

function LoginCaterier1() {
  return (
    <div>
         <Container>
                <Row>
                    <Col>
                    <img className='image2' src={img2}></img>
                    </Col>
                    <Col className='text-start'>
                        <div  id='LoginCaterierBody' >
                            <h5>Login-Caterer</h5><br></br>
                            <input id='input3' type='text' placeholder='Name'></input>
                            <div> <br></br>
                                <input id='input3' type='text' placeholder='Password'></input>
                            </div><br></br>
                            <div>
                                <button className='btn btn-primary' id='input3' >Submit</button><br></br><br></br>
                                <a href='#'>Forget Password</a>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>


    </div>
  )
}

export default LoginCaterier1