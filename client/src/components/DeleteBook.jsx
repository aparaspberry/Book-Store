eimport { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

// Delete request to delete a Book from database 
const DeleteBook = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
      axios.delete('https://localhost:3001/book/book/'+id) // Axios delete method to delete the book by searching for the ID from the database.
      .then(res => {
          if(res.data.deleted) {
              navigate('/books'),  //if book is deleted then navigate to books page 
              alert('Book Deleted')  // console message 
          }
      }).catch(err => console.log(err))// else respond the error message to console
    }, [])
}

export default DeleteBook;
