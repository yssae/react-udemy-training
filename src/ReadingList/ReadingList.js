import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function generateId() {
    // Combine current timestamp with a random number
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function ReadingList() {
    const [books, setBooks] = useState([]);

    const createBook = (book) => {
        setBooks([...books, { title: book, id: generateId() }]);
        console.log(books);
    }

    const editBook = (updatedBook) => {
        setBooks(books.map((book) => book.id === updatedBook.id ? updatedBook : book))
    }

    const deleteBook  = (updatedBook) => {
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

export default ReadingList;