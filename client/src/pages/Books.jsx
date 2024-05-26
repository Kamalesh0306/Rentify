import axios from "axios";
import React, { useEffect, useState } from 'react';
import BooksSection from "../components/BooksSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Books = () => {
    const [Data, setData]= useState();
    useEffect(()=>{
        const fetch = async ()=>{
            await axios.get("http://localhost:3001/api/v1/getBooks").then((res)=> setData(res.data.books));
        };
        fetch();
    });
  return (
    <div>
        <Navbar/>
    <div className='bg-dark' style={{minHeight:"91.5vh"}}>
        <div className='d-flex justify-content-center align-items-center py-3'>
            <h4 className='text-white'>Properties Section</h4>

        </div>
        {Data ? (<BooksSection data={Data}/>) : (<div className="text-white">Loading...</div>)}

    </div>
    <Footer/>
    </div>
  )
}

export default Books