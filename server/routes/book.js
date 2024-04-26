import express from 'express';
import { Book } from '../models/Book.js';     //for hashing the password
import { verifyAdmin } from './auth.js';

const router = express.Router();


// Routers for Create Read Update and Delete operations
// Router to Add new Book
router.post('/add', verifyAdmin, async (req, res) => {
    try {
        const { name, author, imageUrl } = req.body;
        const newbook = new Book({
            name,
            author,
            imageUrl
        })
        await newbook.save()
        return res.json({ added: true })
    } catch (err) {
        return res.json({ message: "Error in adding book" })
    }
})
// Router to Read new Book
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find()
        return res.json(books)
    } catch (err) {
        return res.json(err)
    }
})
// Router to find book by ID
router.get('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById({ _id: id })
        return res.json(book)
    } catch (err) {
        return res.json(err)
    }
})
// Router to update Book
router.put('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, book})
    } catch (err) {
        return res.json(err)
    }
})
// Router to Add new Book
router.delete('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByIdAndDelete({_id: id})
        return res.json({deleted: true, book})
    } catch (err) {
        return res.json(err)
    }
})

export { router as bookRouter };