import { useContext, useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "../context/books";

function ReadingList() {
    const { fetchBooks } = useContext(BookContext)

    useEffect(() => {
        fetchBooks();
    }, [])


    return (
        <div className="mb-6">
            <section className="hero is-small is-info">
                <div className="hero-body">
                    <p className="title">Reading List</p>
                </div> 
            </section>
            <section className="section">
                <BookCreate />
                <BookList/>
            </section>
        </div>
    )
}

export default ReadingList;