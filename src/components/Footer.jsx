import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
         <MDBFooter bgColor='light' className='text-center text-lg-start text-dark  mt-5'>
    

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
            <i class="fa-regular fa-cart-shopping fa-shake" style={{color: "#26a0fd"}}>E-cart</i>             
               
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-dark'>Links</h6>
            <p>
                
              <Link to="/">
              Home
                <a className='text-reset'>
              </a>
              </Link>
              
            </p>
            <p>
             <Link to="/wishlist">
                wishlist
             <a  className='text-reset'>
              </a></Link>
            </p>
            <p>
            <Link  to="/cart">
                cart
            <a  className='text-reset'>
              </a></Link>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
            <p>
              <a  className='text-reset'>
                React
              </a>
            </p>
            <p>
              <a  className='text-reset'>
                React Bootstrsp
              </a>
            </p>
            <p>
              <a  className='text-reset'>
                Bootswatch
              </a>
            </p>
           
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
            <p>
              
              <input type="text" className='p-1 border rounded bg-dark text-light'  />
              <button  className="btn btn-warning ms-1">Subscribe</button>

            </p>
            <p>
            <div >
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='dark' fab icon='facebook-f' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='dark' fab icon='twitter' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='dark' fab icon='google' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='dark' fab icon='instagram' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='dark' fab icon='linkedin' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='dark' fab icon='github' />
        </a>
      </div>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4 bg-secondary text-dark'>
      © 2021 Copyright:
      <a className='bg-secondary fw-bold' >
        E-cart.build with react.com
      </a>
    </div>
  </MDBFooter>
    </div>
  )
}

export default Footer