import { useContext } from "react";
import Book from "./Book";
import BookContext from "../../context/books";

function BookList() {
    const { books } = useContext(BookContext)

    return(
        <div className="box section">
             <p className="is-size-5 has-text-weight-bold">Book Collection</p>
            <div className="columns is-multiline pt-5">
                {
                    books.map((book, index) => 
                        <div className="column" key={index}>
                            <Book book={book}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default BookList;