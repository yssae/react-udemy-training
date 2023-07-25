import { useState } from 'react';
import "./Book.css";

import EditIcon from '../../assets/svg/icons8-edit.svg';
import CloseIcon from '../../assets/svg/icons8-close.svg'

import BookEdit from './BookEdit';


function Book({ book, onEditBook, onDeleteBook }) {
    const [editMode, setEditMode] = useState(false)

    const handleEditBook = (book) => {
        setEditMode(!editMode);
        onEditBook(book);
    }

    const handleEdit = () => {
        setEditMode(!editMode)
    }

    const handleDelete = () => {
        onDeleteBook(book);
    }

    return(
        <div className="book box">
            <div className="icon-wrapper">
                <img src={EditIcon} alt="Edit Button" onClick={handleEdit}/>
                <img src={CloseIcon} alt="Close Button" onClick={handleDelete}/>
            </div>
            <div className="bookedit-container">
                <BookEdit onEditBook={handleEditBook} bookEditMode={editMode} bookItem={book}/>
            </div>
        </div>
    )

}

export default Book;