import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../Components/images/AddMenuImg.jpg'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AddMenu.css'

function AddMenu() {
  return (
    <div id='div' className='mt-5 ps-5 '>
      <Container>
        <Row>

          <Col >
            <div className='div2'>
              <img id='imgEdit' src={img}></img>
            </div>

          </Col >
          <Col >
            <div className='mt-3'>
              <h3 className='text-center'>Add Menu</h3>
              <input type="text" placeholder='Food Name' id='input'></input><br></br><br></br>
              <input type="text" placeholder='Food Name' id='input'></input><br></br><br></br>
              <input type="text" placeholder='Food Name' id='input'></input><br></br><br></br>
              <select id='drop1' >
                <option selected>Wedding</option>
                <option>categories</option>
                <option>1</option>
                <option>1</option>
              </select><br></br><br></br>
              <select id='drop1' >
                <option selected>Dessert</option>
                <option>categories</option>
                <option>1</option>
                <option>1</option>
              </select><br></br><br></br>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Add Picture</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <div className="d-grid gap-2" id='input'>
                <Button variant="primary" size="sm"> Submit</Button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>



  )
}

export default AddMenu