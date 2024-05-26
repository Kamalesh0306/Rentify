import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./Home.css";


const Home = () => {
    const image= require("../images/about.png")
  return (
    <div>
        <Navbar/>
    <div className='Home-page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'>
        <div className='row container'>
            <div 
            className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
            style={{height:"91.5vh"}}
            >
                <h2 style={{fontSize:"70px"}}>Rentify Properties</h2>
                <h3 style={{fontSize:"50px"}}>FOR YOU</h3>
                <p className='mb-0' style={{color:"silver"}}>Checkout the Properties From Here</p>
                <Link to="/books" className='viewBook my-3'>View Properties</Link>

            </div>
            <div 
            className='col-lg-6 d-flex justify-content-center align-items-center flex-column'
            style={{height:"91.5vh"}}
            >
                <img className='home-img' src={image} alt="/"/>

            </div>

        </div>

    </div>
    <Footer/>
    </div>
  )
}

export default Home