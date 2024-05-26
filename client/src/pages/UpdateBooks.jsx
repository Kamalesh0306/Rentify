import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const UpdateBooks = () => {
    const { id } = useParams();
    const [bookname,setBookname]=useState()
    const [author,setAuthor]=useState()
    const [description,setDescription]=useState()
    const [image,setImage]=useState()
    const [price,setPrice]=useState()
    const navigate=useNavigate()

    // Fetch book details when component mounts
    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/getBooks/'+id)
        .then(result => {console.log(result)
            setBookname(result.data.bookname)
            setAuthor(result.data.author)
            setDescription(result.data.description)
            setImage(result.data.image)
            setPrice(result.data.price)
        })
        .catch(err=> console.log(err))
    }, []);

    const Update= (e)=>{
        e.preventDefault();
        axios.put("http://localhost:3001/api/v1/updateBook/"+id,{bookname,author,description,image,price})
        .then(result=>{
           alert(result.data.message)
            navigate('/books')
        })
        .catch(err => console.log(err))
    }

  
   

    return (
        <div>

        <Navbar/>
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: "91.5vh" }}>
            <div className='container p-4'>
                <form onSubmit={Update}>
                    <div className="mb-3">
                        <label htmlFor="bookname" className="form-label text-white">Book Name</label>
                        <input type="text" className="form-control" id="bookname" name='bookname' value={bookname} onChange={(e)=> setBookname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label text-white">Author</label>
                        <input type="text" className="form-control" id="author" name='author' value={author} onChange={(e)=> setAuthor(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label text-white">Description</label>
                        <input type="text" className="form-control" id="description" name='description' value={description} onChange={(e)=> setDescription(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label text-white">Image</label>
                        <input type="text" className="form-control" id="image" name='image' value={image} onChange={(e)=> setImage(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label text-white">Price</label>
                        <input type="number" className="form-control" id="price" name='price' value={price} onChange={(e)=> setPrice(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default UpdateBooks;
