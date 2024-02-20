import React from 'react'
import { Button, Card, Col, Row, } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { removeFromWishlist } from '../redux/Whishlistslice'
import { addToCart } from '../redux/cartslice'



function Wishlist() {
 const wishlistArray=useSelector((state)=>state.wishlistReducer)
 const dispatch= useDispatch()
 const  handleWishlistcart=(product)=>{
  dispatch(addToCart(product))
  dispatch(removeFromWishlist(product.id))
 }
 

  return (
    <div style={{marginTop:"100px"}}>
      <Row>
  {
    wishlistArray.length>0?
    wishlistArray.map((product,index)=>(
<Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      
      <Card className='shadwo rounded' style={{ width: '20rem', }}>
         <Card.Img height={"200px"} variant="top" src={product?.thumbnail} />
         <Card.Body>
           <Card.Title>{product?.title}</Card.Title>
           <Card.Text>
            <p>{product?.description.slice(0,50)}</p>
            <h5>${product?.price}</h5>
           </Card.Text>
           <div className='d-flex justify-content-between'> 
           <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn 'style={{background: "none"}} ><i class="fa-solid fa-trash"  style={{color: "#f34949"}}></i></Button>
           <Button  onClick={()=>handleWishlistcart(product)} className='btn btn light' style={{background: "none"}}><i class="fa-solid fa-cart-shopping fa-lg" style={{color: "#f34949"}}></i></Button>
           </div>
           
         </Card.Body>
       </Card>
      
      </Col>
    )):<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
    <img height={'500px'} width={'500px'} src="https://img.freepik.com/premium-vector/girl-is-looking-empty-trolley_118167-11735.jpg?w=740" alt="" />
    <h3 className='text-center text-danger'>Wishlist Is Empty!!</h3>
    <Link style={{textDecoration:'none'}} className='btn btn-warning rounded ' to={'/'}>Back to Home</Link>

  </div>
  }


      </Row>
      
    </div>
  )
}

export default Wishlist