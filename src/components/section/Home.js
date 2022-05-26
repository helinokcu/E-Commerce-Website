import React from 'react'
import Products from "./Products";

function Home(props) {
  return (
    <div>
        <img src="https://images.pexels.com/photos/6767774/pexels-photo-6767774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg"
        fluid="true"
        style={{width: "100%", display:"flex"}}/>
      <Products />
    </div>
  )
}

export default Home