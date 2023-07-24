import { useState } from "react";

function BookEdit({ saveChangesEvent, bookEditMode, bookItem }) {
    const [book, setBook] = useState(bookItem);

    const handleSubmit = (event) => {  
        event.preventDefault();
        saveChangesEvent(book);
    }

    const handleTitleChange = (event) => {
        setBook((prevbook) => ({ ...prevbook, title: event.target.value }));
    }

    return(
        <form className="bookedit" onSubmit={handleSubmit}>
            <input 
                onChange={handleTitleChange} value={book.title} 
                className="input mb-4" type="text" name="searchTerm"
                readOnly={!bookEditMode}/>
                
            <button 
                style={{ display: (bookEditMode ? "block" : "none"), width: "100%" }}
                className="button mt-4 is-4 is-link is-focused">Save</button>
        </form>
    )
}


export default BookEdit;