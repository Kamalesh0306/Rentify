import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BooksSection = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState(data); 
  const itemsPerPage = 5; 

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/v1/deleteBook/${id}`)
      .then(res => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleLike = async (id) => {
    try {
      // Add the like for the property in the backend
      await axios.post(`http://localhost:3001/api/v1/likeBook/${id}`);
      
      // Fetch updated property data after liking
      const response = await axios.get(`http://localhost:3001/api/v1/getBooks/${id}`);
      const updatedProperty = response.data;
      
      // Update the properties state with the updated property data
      setProperties(properties.map(property => (property._id === id ? updatedProperty : property)));
    } catch (error) {
      console.log(error);
    }
  };
  

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = properties.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className='d-flex justify-content-around align-items-center flex-wrap'>
        {currentItems && currentItems.map((item, index) => (
          <div key={index} className='m-3' style={{ width: "300px", height: "400px", border: "1px solid white", borderRadius: "20px" }}>
            <div>
              <img style={{ width: "300px", height: "210px", borderRadius: "20px", borderTopRightRadius: "20px" }}
                className='img-fluid'
                src={item.image}
                alt={item.bookname}
              />
            </div>
            <h6 style={{ fontSize: "15px" }} className='text-white px-2 my-1'>{item.bookname.slice(0, 20)}...</h6>
            <h6 style={{ fontSize: "15px" }} className='text-white px-2 my-1'>{item.author.slice(0, 20)}...</h6>
            <h6 style={{ fontSize: "15px" }} className='text-white px-2 my-1'>{item.description.slice(0, 200)}...</h6>
            <b style={{ fontSize: "20px", color: "red" }} className='px-2'>Rs. {item.price}</b>
            <div className='d-flex justify-content-around align-items-center my-2'>
              <Link to={`/update/${item._id}`} className='btn btn-primary'>UPDATE</Link>
              <button className='btn btn-danger mx-2' onClick={() => handleDelete(item._id)}>DELETE</button>
              <button className='btn btn-success mx-2' onClick={() => handleLike(item._id)}>LIKE</button>
              <span>Likes: {item.likes}</span> 
            </div>
          </div>
        ))}
      </div>
      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
