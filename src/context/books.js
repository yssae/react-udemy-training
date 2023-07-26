import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
    const API_URL = "http://localhost:3001/books";
    const [books, setBooks] = useState([]);

    const createBook = async (title) => {
        const response = await axios.post(API_URL, { title });
        setBooks([...books, response.data]);
    }

    const deleteBook  = async (updatedBook) => {
        const response = await axios.delete(API_URL + `/${updatedBook.id}`)
        setBooks(books.filter((book) => updatedBook.id !== book.id))
    }

    const editBook = async (updatedBook) => {
        const response = await axios.put(API_URL + `/${updatedBook.id}`, { title: updatedBook.title })
        setBooks(books.map((book) => book.id === updatedBook.id ? response.data : book))
    }

    const fetchBooks = async() => await axios.get(API_URL).then(response => setBooks(response.data));

    return(
        <BookContext.Provider value={{ books, createBook, deleteBook, editBook, fetchBooks }}>
            { children }
        </BookContext.Provider>
    )
}

export { Provider };
export default BookContext;