import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function NavBar2() {
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
                  <a class="nav-link active" aria-current="page" href="#">profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Addmenu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">View Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">View order</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">View My Complainnts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default NavBar2