import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function generateId() {
    // Combine current timestamp with a random number
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

function ReadingList() {
    const [books, setBooks] = useState([]);

    const createBookHandler = (book) => {
        
        setBooks([...books, { title: book, id: generateId() }]);
        console.log(books);
    }

    const editBookHandler = (updatedBook) => {
       // books.find(book => book.id === bookId)) {
        console.log('editBookHandler', updatedBook);
        setBooks((prevBooks) => {
            const bookIndex = prevBooks.findIndex((book) => book.id === updatedBook.id);

            if (bookIndex === -1) {
                // Book with the given ID not found, return the existing state
                return prevBooks;
            }

            // Create a new array with the updated book object
            const updatedBooks = [...prevBooks];
            updatedBooks[bookIndex] = { ...updatedBook };

            return updatedBooks;
        })
        console.log(books)
    }

    const deleteBookHandler = (updatedBook) => {
        console.log('delete', updatedBook)
        setBooks((prevBooks) => {
            const bookIndex = prevBooks.findIndex((book) => book.id === updatedBook.id);

            if(bookIndex === -1) {
                return prevBooks;
            }

            const updatedBooks = [...prevBooks];
            updatedBooks.splice(bookIndex, 1)

            return updatedBooks;
        })
    }

    return (
        <div className="mb-6">
            <section className="hero is-small is-info">
                <div className="hero-body">
                    <p className="title">Reading List</p>
                </div> 
            </section>
            <section className="section">
                <BookCreate createBookEvent={createBookHandler}/>
                <BookList books={books} editBookHandler={editBookHandler} deleteBookHandler={deleteBookHandler}/>
            </section>
        </div>
    )
}

export default ReadingList;