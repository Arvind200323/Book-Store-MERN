import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id

  const handleDeleteBook = () =>{
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        setLoading(false);
        alert('error occured')
        console.log(error);
      });
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center border-2 border-purple-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2xl'>Are You Sure You want to delete this Book</h3>
          <button className='p-3 bg-purple-800 text-white m-8 rounded-xl' onClick={handleDeleteBook}>Yes, Delete it</button>
        </div>
      </div>

    </div>
  )
}

export default DeleteBook