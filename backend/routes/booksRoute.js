import express from "express";
import { Book } from '../models/bookModel.js'

const router = express.Router()
// Changes from code refactoring
// app.get/post -> router.get/post
// ('/books') -> ('/')
// ('/books/:id') -> ('/:id')

//POST Route to save new book
router.post('/',async(req,res)=>{
    try {   
        //res.send("POST Add New Book")
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).send({
                message:'send all required fields: title, author, publishYear',
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        //add book in db
        const book = await Book.create(newBook); 
        res.status(201).send(book);

    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

//GET Route for fetching all books from database
router.get('/',async(req,res)=>{
    try {
        //res.send("GET all Books")
        // fetches data from db and stores in "books" as JSON
        const books = await Book.find({}); 
        res.status(200).json({
            count:books.length,
            data:books
        }); 
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})
 
//GET Route for fetching one book from database by id
router.get('/:id',async(req,res)=>{
    try {
        // res.send("GET one Book by id")
        // requests ID from user
        const id = req.params.id;
        const oneBook = await Book.findById(id); 
        res.status(200).json(oneBook);
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

//PUT Route to update a book
router.put('/:id',async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).send({
                message:'send all required fields: title, author, publishYear',
            })
        }

        const id = req.params.id;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            res.status(404).json({ message:'Book not found' })
        }
        else{
            res.status(200).send({ message:'Book Updated Succesfully' })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

//DELETE Route to Delete a Book
router.delete('/:id',async(req,res)=>{
    try {
        
        const id = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).json({ message:'Book not found' })
        }
        else{
            res.status(200).send({ message:'Book Deleted Succesfully' })
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

export default router;