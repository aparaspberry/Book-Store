import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import axios from 'axios'

const DeleteBook = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
      axios.delete('https://localhost:3001/book/book/'+id)
      .then(res => {
          if(res.data.deleted) {
              navigate('/books'),
              alert('Book Deleted')
          }
      }).catch(err => console.log(err))
    }, [])
}

export default DeleteBook;