import { useEffect, useState } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function ReadingList() {
    const API_URL = "http://localhost:3001/books";
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, [])

    const fetchBooks = async() => await axios.get(API_URL).then(response => setBooks(response.data));

    const createBook = async (title) => {
        const response = await axios.post(API_URL, { title });
        setBooks([...books, response.data]);
    }

    const editBook = async (updatedBook) => {
        const response = await axios.put(API_URL + `/${updatedBook.id}`, { title: updatedBook.title })
        setBooks(books.map((book) => book.id === updatedBook.id ? response.data : book))
    }

    const deleteBook  = async (updatedBook) => {
        const response = await axios.delete(API_URL + `/${updatedBook.id}`)
        setBooks(books.filter((book) => updatedBook.id !== book.id))
    }

    return (
        <div className="mb-6">
            <section className="hero is-small is-info">
                <div className="hero-body">
                    <p className="title">Reading List</p>
                </div> 
            </section>
            <section className="section">
                <BookCreate onCreateBook={createBook}/>
                <BookList books={books} onEditBook={editBook} onDeleteBook={deleteBook}/>
            </section>
        </div>
    )
}

function generateId() {
    // Combine current timestamp with a random number
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}


export default ReadingList;