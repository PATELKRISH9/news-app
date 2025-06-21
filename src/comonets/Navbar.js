import React, { Component } from 'react'


export class Navbar extends Component {

  render() {
    return (
      <div className='k11'>
        <div className='k1'>
          <nav className="navbar navbar-expand-lg bg-body-" >
            <div className="container-fluid">
              <a className="navbar-brand" id='m'  href="/">NewsMonkey</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" id='m' aria-current="page" href="">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id='m' href="/about">About</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link"  id='m' href="/business">business</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id='m' href="/entertainment">entertainment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id='m' href="/general">general</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id='m' href="/health">health</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"id='m' href="/science">science</a>
                  </li>

                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
