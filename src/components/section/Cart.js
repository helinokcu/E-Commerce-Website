import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export class Cart extends Component{
  static contextType = Context

  componentDidMount(){
    this.context.getTotal();
  }

  render(){
    const { cart, total, increaseProduct, decreaseProduct, deleteProduct} = this.context;

    if(cart.length === 0){
      return <h3 style={{ textAlign: "center" }}>No product</h3>
    } else {
      return(
        <div>
          {cart.map((item) =>(

              <Grid container 
              style={{padding: "10px"}}
              direction= "row"
              justifyContent= "center"
              alignItems= "center">

                <Grid item xs={1}></Grid>

                <Grid item xs={4}>
                  <img src={item.src} style={{width: "60%"}} />
                </Grid>

              <Grid item xs={5}>
                <Grid container 
                style={{backgroundColor: ""}}
                direction= "column"
                justifyContent= "flex-start"
                alignItems= "center">

                <Grid item>
                  <Grid container 
                  direction= "row"
                  alignItems= "center"
                  justifyContent= "center">

                    <Grid item>
                      <h3>{item.title}</h3>
                    </Grid>
              
                    <Grid item>
                      <button style={{border: "none", color: "red", fontSize: "20px", fontWeight:"bolder",margin:"0px 20px", backgroundColor: "white"}} onClick={() => deleteProduct(item._id)}> X </button>
                    </Grid>

                  </Grid>
                </Grid>

                <Grid item>
                  <h5 style={{fontWeight: "lighter", fontStyle: "italic"}}>{item.brand}</h5>
                </Grid>

                <Grid item>
                  <h5>${item.price*item.count}</h5>
                </Grid>

                <Grid item>
                  <p>{item.description}</p>
                </Grid>

                <Grid item>
                  <button style={{padding:"1px 15px", margin: "10px", borderRadius: "3px"}} onClick={() => decreaseProduct(item._id)}>-</button>
                  <span>{item.count}</span>
                  <button style={{padding:"1px 15px", margin: "10px", borderRadius: "3px"}} onClick={() => increaseProduct(item._id)}>+</button>
                </Grid>
              
                </Grid>
              </ Grid>

              <Grid xs={1}></Grid>

              </Grid>
          ))}

          <hr></hr>

          <Grid container 
          direction= "column"
          justifyContent="flex-start"
          alignItems="flex-end"
          spacing={2}>

            <Grid item>
              <h3>Total:${total}</h3>
            </Grid>

            <Grid item>
              <button style={{borderRadius:"10px", border:"none", padding:"10px 20px" }}>
                <Link style={{textDecoration: "none", color: "black" }}to="/payment">Proceed to Checkout</Link>
              </button>
            </Grid>

          </Grid>

        </div>
      )
    }

  }
}
export default Cart