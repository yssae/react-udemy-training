import { useContext, useState } from "react";
import BookContext from "../../context/books";

function BookCreate() {
    const [book, setBook] = useState('');
    const { createBook } = useContext(BookContext);
    
    const submitBookHandler = (event) => {
        event.preventDefault();
        createBook(book);
        setBook(""); // reset after submit
    }

    const handleTextChange = (event) => {
        setBook(event.target.value);
    }

    return(
        <form className="section box" onSubmit={submitBookHandler}>
            <label htmlFor="title" className="is-size-5 has-text-weight-bold">Add a Book</label>
            <input value={book} onChange={handleTextChange} type="text" name="title" className="column input is-size-6" />
            <button className="is-1 is-size-6 button is-link is-focused mt-5">Submit</button>
        </form>
    )
}


export default BookCreate;