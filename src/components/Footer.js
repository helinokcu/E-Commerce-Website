import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <footer>
        <Box style={{ marginTop: "30px" , padding: "60px", color:"black", textDecoration:"none", backgroundColor:"rgba(200,200,200, 0.5)"}}>
          <Grid 
          container 
          columns={{xs: 10}}
          spacing={3}
          style={{backgroundColor:""}}
          direction="row"
          justifyContent="center"
          alignItems="center">

            <Grid 
            item 
            style={{backgroundColor:"", alignItems:"center", direction: "column", justifyContent: "center"}}
            xs={3}>

              <Grid item>
                <Link href="/" style={{ fontWeight: "bolder", color:"inherit" }}>
                  ABOUT US
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  Blog
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  Locations
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  News
                </Link>
              </Grid>
            </Grid>

          <Grid 
            item 
            style={{backgroundColor:"", alignItems:"center", direction: "column", justifyContent: "center"}}
            xs={3}>

              <Grid item>
                <Link href="/" style={{ fontWeight: "bolder", color:"inherit" }}>
                  ASSISTANCE
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  Support Center
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  Terms & Conditions
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  Privacy Policy
                </Link>
              </Grid>
            </Grid>

          <Grid 
            item 
            style={{backgroundColor:"", alignItems: "center", direction: "column", justifyContent: "center"}}
            xs={3}>

              <Grid item>
                <Link href="/" style={{ fontWeight: "bolder", color:"inherit" }}>
                  CONNECT WITH US
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  E-Mail
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  Twitter
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" style={{ fontWeight: "lighter", color:"inherit" }}>
                  Instagram
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Box className='copyright-text' style={{marginTop: "40px", color:"rgb(180, 180, 180)", fontSize:"14px"}}>
            {" "}
            STORE. All right reserved.&reg; {new Date().getFullYear()}
          </Box>
        </Box>
    </footer>
  )
}

export default Footer