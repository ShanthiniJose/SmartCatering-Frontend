import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function Navbar() {
  return (
    <div>
     
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Hungry Hub</a>
         <form class="d-flex">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Register</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar