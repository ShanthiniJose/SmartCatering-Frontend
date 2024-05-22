import React from 'react'
import './EditMenu.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../Components/images/AddMenuImg.jpg'

function EditMenu() {
  return (
    <div id='div'>
      <Container>
        <Row>

          <Col >
            <div className='div2'>
              <img id='imgEdit' src={img}></img>
            </div>
          </Col >
          <Col>
          <div className="mt-5 ms-5 ">
            <h3 className='text-center'>EditMenu </h3>
            <input type="text" placeholder='Food Name' id='input1'></input><br></br><br></br>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" id='input1'>

              <Form.Control as="textarea" rows={3} placeholder='Food Discription' />
            </Form.Group><br></br>

            <select id='drop1' >
              <option>categories</option>
              <option>1</option>
              <option>1</option>
            </select><br></br><br></br>

            {/* <Row>
              <Col>
                <input type="text" placeholder='Veg' id='input3'></input>
              </Col>
              <Col>

                <input type="text" placeholder='Non Veg' id='input3'></input>

              </Col>
              
            </Row><br></br> */}

            <select id='drop1' >
              <option selected>Packages</option>
              <option>categories</option>
              <option>1</option>
              <option>1</option>
            </select><br></br><br></br>


            <input type="text" placeholder='Food Price' id='input1'></input><br></br><br></br>

            <Form.Group controlId="formFile" className="mb-3" >
              <Form.Label>Add Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="sm">
                Submit
              </Button>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EditMenu