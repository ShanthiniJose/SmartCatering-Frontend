import React from 'react'
import './RegisterCharity1.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from '../Components/images/charity.jpg'

function RegisterCaterier() {
  return (
    <div><div className='registeCateringrBody'>
    <Container>
        <Row>
            <Col>
                <img className='regcateringimage1' src={img3}></img>
            </Col>
            <Col>
                <div className='mt-4 '>
                    <h5 className='text-center'> RegisterCharity</h5><br></br>
                    <input id='regcateringinput' type='text' placeholder='name'></input><br></br><br></br>
                    <input id='regcateringinput' type='number' placeholder='regno'></input><br></br><br></br>
                    <input id='regcateringinput' type='text' placeholder='district'></input><br></br><br></br>
                    <input id='regcateringinput' type='text' placeholder='city'></input><br></br><br></br>
                    <input id='regcateringinput' type='number' placeholder='pincode'></input><br></br><br></br>
                    <input id='regcateringinput' type='number' placeholder='contact'></input><br></br><br></br>
                    <input id='regcateringinput' type='email' placeholder='email'></input><br></br><br></br>
                    <input id='regcateringinput' type='password' placeholder='password'></input><br></br><br></br>
                   <button className='btn btn-primary' id='regcateringinput'>Submit</button>
                </div>
            </Col>
        </Row>
    </Container>

</div>

    </div>
  )
}

export default RegisterCaterier