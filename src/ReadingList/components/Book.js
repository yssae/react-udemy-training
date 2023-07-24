import { useState } from 'react';
import "./Book.css";

import EditIcon from '../../assets/svg/icons8-edit.svg';
import CloseIcon from '../../assets/svg/icons8-close.svg'

import BookEdit from './BookEdit';


function Book({ book, editBookHandler, deleteBookHandler }) {
    const [editMode, setEditMode] = useState(false)

    const saveChangeHandler = (book) => {
        setEditMode(!editMode);
        editBookHandler(book);
    }

    const handleEdit = () => {
        setEditMode(!editMode)
    }

    const handleDelete = () => {
        console.log("handleDelete");
        deleteBookHandler(book);
    }

    return(
        <div className="book box">
            <div className="icon-wrapper">
                <img src={EditIcon} alt="Edit Button" onClick={handleEdit}/>
                <img src={CloseIcon} alt="Close Button" onClick={handleDelete}/>
            </div>
            <div className="bookedit-container">
                <img src="https://media.pitchfork.com/photos/6352cd4063dcacf1f2521078/3:2/w_1998,h_1332,c_limit/Taylor-Swift-Red.jpg" alt="" id="cover"/><br />
                <BookEdit saveChangesEvent={saveChangeHandler} bookEditMode={editMode} bookItem={book}/>
            </div>
        </div>
    )

}

export default Book;