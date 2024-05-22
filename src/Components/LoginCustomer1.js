import React from 'react'
import './LoginCustomer1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../Components/images/hub.jpg'

function LoginCustomer1() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <img className='image1' src={img1}></img>
                    </Col>
                    <Col className='text-start'>
                        <div  id='Loginbody2' >
                            <h5>Login customer</h5><br></br>
                            <input id='input2' type='text' placeholder='Name'></input>
                            <div> <br></br>
                                <input id='input2' type='text' placeholder='Password'></input>
                            </div><br></br>
                            <div>
                                <button className='btn btn-primary' id='input2' >Submit</button><br></br><br></br>
                                <a href='#'>Forget Password</a>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default LoginCustomer1