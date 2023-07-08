import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Years from '../components/Years'
import Footer from '../components/Footer'


function Main() {
  return (
    <div >
 
    <div className="container mx-auto p-4">
    <Navbar />

    <Home/>
    <Years/>
   </div>
    <Footer/>
  
    </div>
  )
}

export default Main