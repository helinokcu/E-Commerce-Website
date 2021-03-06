import React from 'react'
import { Component } from 'react'
import { Context } from '../context/Context'
import { Link } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box"; 
import Container from "@material-ui/core/Container"; 
import { Row, Col } from "react-bootstrap";
import '../css/Products.css'

export class Products extends Component {
  static contextType = Context;

  render(){
    const { products, addProduct } = this.context;

    return (
      <Container style={{marginTop:"50px"}}>
        <Row>
          <Col> 
            <div>
              {products.map((product)=>{
                 return <Box>
                   <Grid>
                      <Container maxWidth="lg" style={{ marginTop: "10px" }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={3}>

                            <div className='card' key={product._id}>
                              <h5>
                                <Link to={`/product/${product._id}`}>
                                  <img src={product.src} style={{width:"50%"}} alt="" />
                                </Link>
                              </h5>
                            
                              <div className='content'>
                                <h5>
                                  <Link style={{ textDecoration: "none", color: "#333"}} to={`/product/${product._id}`}>
                                    {product.title}
                                  </Link>
                                </h5>
                                <p>{product.brand}</p>
                                <p>${product.price}</p>
                                <button onClick={() => addProduct(product._id)}>
                                  Add to cart
                                </button>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Container>
                  </Grid>
                </Box>
              })}
            </div>
          </Col>
        </Row>
      </Container>  
    
    )
  }
}

export default Products