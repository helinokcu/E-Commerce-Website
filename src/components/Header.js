import React from 'react'
import { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Router, Link } from 'react-router-dom'
import CartIcon from "./svg/cart.svg"
import { Context } from './context/Context'

export class Header extends Component{
  static contextType = Context;

  render(){
    const { cart } = this.context;
    return(
      <header>
        <Box >
          <Grid container 
          style={{backgroundColor:"", borderBottom:"1px solid grey"}}
          direction="row"
          alignItems="center">

            <Grid item sm={1}></Grid>

            {/* LOGO */}
            <Grid item sm={2}>
              <Grid container
                justifyContent="center"
                alignItems="center"
                style={{backgroundColor:"", padding:"15px 50px"}}>
                  <Link to="/" style={{textDecoration: "none", color: "black"}}>
                    <h1>STORE</h1>
                  </Link>
              </Grid>
            </Grid>

            <Grid item sm={1}></Grid>

            {/* MENU */}
            <Grid item sm={7}>
              <Grid container
              style={{ backgroundColor:"", padding:"15px 50px"}}
              columns={{ xs: 12, sm: 12, m:3}}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={4}>
                
                <Grid item>
                  <Link to="/" style={{ textDecoration: "none", color:"black"}}> HOME </Link>
                </Grid>
                <Grid item>
                  <Link to="/product" style={{ textDecoration: "none", color:"black"}}> PRODUCT </Link>
                </Grid>
                <Grid item>
                  <Link to="/about" style={{ textDecoration: "none", color:"black"}}> ABOUT </Link>
                </Grid>
                <Grid item>
                  <Link to="/contact" style={{ textDecoration: "none", color:"black"}}> CONTACT </Link>
                </Grid>
                <Grid item>
                  <Link to="#" style={{ textDecoration: "none", color:"black"}}> LOGIN/REGISTER </Link>
                </Grid>
                <Grid item>
                  <span style={{color:"white", fontWeight: "bold", fontSize: "13px", borderRadius: "30px", backgroundColor: "red", padding: "3px 7px"}}>{cart.length}</span>
                  <Link to="/cart"><img src={CartIcon}></img></Link>
                </Grid>

              </Grid>

              <Grid item sm={2}></Grid>

            </Grid>

          </Grid>
        </Box>
      </header>
    )
  }
}
export default Header;
