import React from 'react'
import './RegisterCustomer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../Components/images/hungry.jpg'
function RegisterCustomer() {
    return (
        <div className='registerBody'>
            <Container>
                <Row>
                    <Col>
                        <img className='regimage1' src={img2}></img>
                    </Col>
                    <Col>
                        <div className='mt-4 '>
                            <h5 className='text-center'>Register customer</h5><br></br>
                            <input id='reginput' type='text' placeholder='name'></input><br></br><br></br>
                            <input id='reginput' type='text' placeholder='district'></input><br></br><br></br>
                            <input id='reginput' type='number' placeholder='pincode'></input><br></br><br></br>
                            <input id='reginput' type='text' placeholder='city'></input><br></br><br></br>
                            <input id='reginput' type='number' placeholder='contact'></input><br></br><br></br>
                            <input id='reginput' type='email' placeholder='email'></input><br></br><br></br>
                            <input id='reginput' type='password' placeholder='password'></input><br></br><br></br>
                            <input id='reginput' type='number' placeholder='age'></input><br></br><br></br>
                            <button className='btn btn-primary' id='reginput'>Submit</button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default RegisterCustomer