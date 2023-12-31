import Book from "./Book";

function BookList({ books, onEditBook, onDeleteBook }) {
    return(
        <div className="box section">
             <p className="is-size-5 has-text-weight-bold">Book Collection</p>
            <div className="columns is-multiline pt-5">
                {
                    books.map((book, index) => 
                        <div className="column" key={index}>
                            <Book book={book} onEditBook={onEditBook} onDeleteBook={onDeleteBook}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default BookList;