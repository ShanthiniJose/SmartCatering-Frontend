import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 import Img from './images/charity.jpg'
 import './Profile.css'
function Profile() {
  return (
    <div>
        
      <h2 className='mt-2 ms-5'  >Welcome, Cart1</h2>
      <div className='body' >
      <Card style={{ width: '18rem' }} className='card'>
      <img src={Img}></img>
      <Card.Body>
        <Card.Title>Car1</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Profile