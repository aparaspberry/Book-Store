import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import '../css/Book.css'

const Books = ({role}) => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('https://localhost:3001/book/books')  // GET method to return the Books from database.
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
      }).catch(err => console.log(err))
  }, [])
  return (
    <div className='book-list'>
      {
        books.map(book => {
          return <BookCard key={book._id} book={book}></BookCard>
        })
      }
    </div>
  )
}

export default Books;
