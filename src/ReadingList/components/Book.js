import { useState } from 'react';
import "./Book.css";

import useBooksContext from "../../hooks/useBooksContext"

import EditIcon from '../../assets/svg/icons8-edit.svg';
import CloseIcon from '../../assets/svg/icons8-close.svg'

import BookEdit from './BookEdit';


function Book({ book }) {
    const [editMode, setEditMode] = useState(false);
    const { deleteBook } = useBooksContext();

    const handleEdit = () => {
        setEditMode(!editMode)
    }

    const handleDelete = () => {
        deleteBook(book);
    }

    return(
        <div className="book box">
            <div className="icon-wrapper">
                <img src={EditIcon} alt="Edit Button" onClick={handleEdit}/>
                <img src={CloseIcon} alt="Close Button" onClick={handleDelete}/>
            </div>
            <div className="bookedit-container">
                <BookEdit bookItem={book} bookEditMode={editMode} toggleBookEditMode={handleEdit} />
            </div>
        </div>
    )

}

export default Book;