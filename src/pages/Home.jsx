import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/usefetch';
import { addToWishlist } from '../redux/Whishlistslice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartslice';

function Home() {
   
  const data =useFetch("https://dummyjson.com/products")
 const dispatch=useDispatch()
  return (
    <>
   <Row className='ms-5' style={{marginTop:"100px"}}>

{

  data?.length>0?data?.map((product,index)=>(

  
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
        <button onClick={()=>dispatch(addToWishlist(product))} className='btn btn 'style={{background: "none"}} ><i class="fa-solid fa-heart fa-lg" style={{color: "#fb4828"}}></i></button>
        <button onClick={()=>dispatch(addToCart(product))} className='btn btn light' style={{background: "none"}}><i class="fa-solid fa-cart-shopping fa-lg" style={{color: "#f34949"}}></i></button>
        </div>
        
      </Card.Body>
    </Card>
   
   </Col>
   )):<p className='text-danger fw-bolder'>Nothing to display</p>
}



   </Row>

    </>
  )
}

export default Home