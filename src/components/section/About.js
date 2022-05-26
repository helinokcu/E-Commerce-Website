import React from "react";
import { Box, Grid } from "@material-ui/core";


function About() {
  return (
    <div>
        <Box>
            <Grid container style={{ backgroundColor: "white", marginTop: "50px"}}
            direction="row"
            justifyContent="center"
            alignItems="flex-start">

                <Grid item style={{}}
                xs={10}
                sm={4}
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <Grid item style={{padding: "3px"}}>
                        <h5>Newsfeed</h5>
                    </Grid>
                    <Grid item style={{ padding: "3px"}}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Grid>
                
                    <Grid item style={{ padding: "15px 3px 3px 3px", margin:"0px", borderTop:"0.2px solid grey"}}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Grid>
                       
                    <Grid item style={{ padding: "15px 3px 3px 3px", margin:"0px", borderTop:"0.2px solid grey"}}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Grid>

                    <Grid item style={{ padding: "15px 3px 3px 3px", margin:"0px", borderTop:"0.2px solid grey"}}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </Grid>
                </Grid>

                <Grid item style={{borderLeft:"1px solid grey"}}
                xs={10}
                sm={6}
                direction="column"
                justifyContent="center"
                alignItems="center">
                    <Grid item style={{padding: "5px"}}>
                        <h5>About Us</h5>
                    </Grid>
                    <Grid item style={{ padding: "5px"}}>
                        <img src="https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940.jpg" style={{ width: "600px"}}>

                        </img>
                    </Grid>
                    <Grid item style={{ padding: "5px"}}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem
                        </p>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    </div>
  )
}

export default About