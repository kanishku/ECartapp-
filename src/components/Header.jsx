import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';



function Header() {
 
  const wishlist=useSelector((state)=>state.wishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)

  return (
    <>
     
      <Navbar style={{zIndex:1}}  className="bg-secondary"  >
    <Container className='border rounded bg-light'>
      <Navbar.Brand>
        <Link className='text-info-emphasis ms-3' to="/" style={{textDecoration:"none" ,fontSize:"30px"}}>
        <i class="fa-solid fa-truck-fast fa-bounce me-2" style={{color:"#0bc5f4"}}></i>
      E-cart
        </Link>
      
      </Navbar.Brand>

      <Nav>
            <Link className='me-4' to="/wishlist">
            <Badge badgeContent={wishlist.length} color="secondary">
            <i class="fa-solid fa-heart fa-xl"></i>
      </Badge>
              </Link>
            <Link className='me-5' to="/cart" >
     

      <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
      </Badge>
            </Link>
          </Nav>
    </Container>
  </Navbar>
    


    </>
  )
}

export default Header