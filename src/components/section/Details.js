import React from 'react'
import { Component } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../context/Context'
import { Box, Grid } from "@material-ui/core";

export default class Details extends Component {
  // static contextType = Context;
  // state= {
  //   product: []
  // };

  // getProduct = () =>{
  //   if(this.props.match.params.id){
  //     const res = this.context.products;
  //     const data =  res.filter((item) =>{
  //       return item._id === this.props.match.params.id;
  //     });
  //     this.setState({product: data})
  //   }
  // };

  // componentDidMount(){
  //   this.getProduct();
  // };

  render(){
    // const { product } = this.state; 
    // const { addProduct } = this.context; 

    return (
      <div>
        <Box>
            <Grid container 
            justifyContent="center"
            alignItems="center"
            style={{padding:"15px"}}>
              <h2 style={{fontWeight: "lighter"}}>Product Details</h2>
            </Grid>
        </Box>

        {/* {product.map((item) => (
           <div className="details" key={item._id}>
            
            <img src={item.src} alt="product"></img>

            
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>{item.price}</span>
              </div>
              <p>{item.brand}</p>
              <p>{item.description}</p>
              <Link to="/cart" className="cart" onClick={() => addProduct(item._id)}>
                Add to Cart
              </Link>
            </div>

          </div>
        ))} */}
      </div>
    )
  }
}