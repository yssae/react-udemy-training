import { useEffect } from "react";

import useBookContext from "../hooks/useBooksContext";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function ReadingList() {
    const { fetchBooks } = useBookContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks])


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