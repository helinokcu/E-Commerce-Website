import React, { Component } from 'react'
import { Box, Grid } from "@material-ui/core";

export class Payment extends Component {
  render() {
    return (
      <div>
          <Box>
            <Grid container 
            justifyContent="center"
            alignItems="center"
            style={{padding:"15px"}}>
              <h2 style={{fontWeight: "lighter"}}>Payment</h2>
            </Grid>
        </Box>
      </div>
    );
  }
}

export default Payment;