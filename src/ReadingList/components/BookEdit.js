import { useState } from "react";

function BookEdit({ onEditBook, bookEditMode, bookItem }) {
    const [book, setBook] = useState(bookItem);

    const handleSubmit = (event) => {
        event.preventDefault();
        onEditBook(book);
    }

    const handleTitleChange = (event) => {
        setBook({ ...book, title: event.target.value });
    }

    return (
        <form className="bookedit" onSubmit={handleSubmit}>
            <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt={book.title} id="cover" /><br />
            <input
                onChange={handleTitleChange} value={book.title}
                className="input mb-4" type="text" name="searchTerm"
                readOnly={!bookEditMode} />

            <button
                style={{ display: (bookEditMode ? "block" : "none"), width: "100%" }}
                className="button mt-4 is-4 is-link is-focused">
                Save
            </button>
        </form>
    )
}


export default BookEdit;