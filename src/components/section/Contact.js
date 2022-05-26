import React from 'react'
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function Contact() {

  const [values, setValues] = useState({
    name:"",
    email:"",
    message:"",
  });
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameChange = (event) => {
    setValues( { ...values, name: event.target.value })
  };

  const handleEmailChange = (event) => {
    setValues( { ...values, email: event.target.value })
  };

  const handleMessageChange = (event) => {
    setValues( { ...values, message: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ( values.name && values.email && values.message){
      setValid(true);
    }
    setSubmit(true);
  };

  return (
    <Box>
    <Grid container 
    direction= "row">
      
      <Grid item xs={4}></Grid>

      <Grid item
      style={{backgroundColor: "rgba(200,200,200,0.5)", margin: "30px", padding: "30px", borderRadius: "20px"}}
      xs={4}
      justifyContent= "center"
      alignItems= "center">
    
        <form className="form" onSubmit={handleSubmit}>
          { submit && valid ? (<div>Thanks for your message</div>) : null }

          <Grid container
          direction= "column">
            
            <Grid item>
            <h3 style={{fontWeight: "lighter"}}>Get in Touch</h3>
            </Grid>

            <Grid item>
              <input
                onChange={handleNameChange}
                values={values.name}
                style={{borderRadius: "10px", padding: "10px 15px", margin: "20px", border: "none"}}
                id="name"
                className="form-field"
                type="text"
                placeholder="Enter your name"
                name="name" />
                <Grid item>
                  { submit && !values.name ? <span>Please enter a name.</span> : null}
                </Grid>
            </Grid>
              
            <Grid item>
              <input 
                onChange={handleEmailChange}
                values={values.email}
                style={{borderRadius: "10px", padding: "10px 15px", margin: "20px", border: "none"}}
                id="email"
                className="form-email"
                type="text"
                placeholder="Enter your email"
                name="email" />
                <Grid item>
                  { submit && !values.email ? <span>Please enter a email address.</span> : null} 
                </Grid>
            </Grid>
              
            <Grid item>
              <input 
                onChange={handleMessageChange}
                values={values.message}
                style={{borderRadius: "10px", padding: "70px 15px", margin: "20px", border: "none"}}
                id="message"
                className="form-message"
                type="text"
                placeholder="Enter your message"
                name="message"/>
                <Grid item>
                  { submit && !values.message ? <span>Please enter a message.</span> : null} 
                </Grid>
            </Grid>

            <Grid item>
              <button className="form-btn" type="submit" style={{ borderRadius: "5px", margin: "20px", padding: "5px 75px", backgroundColor: "green", color: "white", border:"none"}}>
                SUBMIT
              </button>
            </Grid>

          </Grid>

        </form>  
    
      </Grid>

      <Grid item xs={4}></Grid>

    </Grid>
    </Box>
  )
}

export default Contact