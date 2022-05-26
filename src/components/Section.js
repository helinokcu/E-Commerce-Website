import React from 'react';
import { Route, Routes } from 'react-router-dom'
import About from "./section/About";
import { Cart } from "./section/Cart";
import Contact from "./section/Contact";
import Details from "./section/Details";
import Home from "./section/Home";
import Products from "./section/Products";
import { Payment } from "./section/Payment";


 export class Section extends React.Component{
   render(){
     return (
       <div>
           <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/product" element={<Products/>} />
                <Route path="/product/:id" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} /> 
           </Routes>
       </div>
     )
   }
 }
 export default Section;