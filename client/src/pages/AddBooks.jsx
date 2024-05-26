import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddBooks = () => {
  const navigate=useNavigate()
    const [Data,setData]=useState({bookname:"",author:"",description:"",image:"",price:""});
    const change= (e)=>{
        const {name, value}=e.target;
        setData({...Data,[name]:value});
    };
    const submit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/api/v1/add", Data)
        .then(result=>{
          alert(result.data.message)
          navigate('/books')
      })
        setData({bookname:"",author:"",description:"",image:"",price:""});
    };
    console.log(Data);
  return (
    <div>
      <Navbar/>
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh"}}>
        <div className='container p-4'>
        <div className="mb-3 ">
    <label for="exampleFormControlInput1" className="form-label text-white">Place</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the State Name" name='bookname' value={Data.bookname} onChange={change}/>
  </div>
  <div className="mb-3 ">
    <label for="exampleFormControlInput1" className="form-label text-white">Area</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the City Name" name='author' value={Data.author} onChange={change}/>
  </div>
  <div className="mb-3 ">
    <label for="exampleFormControlInput1" className="form-label text-white">Description</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Description of the property" name='description' value={Data.description} onChange={change}/>
  </div>
  <div className="mb-3 ">
    <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the URL of the property" name='image'  value={Data.image} onChange={change}/>
  </div>
  <div className="mb-3 ">
    <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter the price of the property" name='price'  value={Data.price} onChange={change}/>
  </div>

  <button className='btn btn-success' onClick={submit}>Submit</button>
 
  
  </div>
        </div>
        <Footer/>
        </div>
        
  )
}

export default AddBooks