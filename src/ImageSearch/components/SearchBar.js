import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchTerm)
    }
    
   const handleTextChange = (event) => {
        setSearchTerm(event.target.value)
   }

    return(
        <form className="box mb-3" onSubmit={handleFormSubmit}>
            <label htmlFor="searchTerm" className="is-size-5">Search Term</label>
            <input value={searchTerm} onChange={handleTextChange} className="column input is-size-5" type="text" name="searchTerm"></input>
            {/* <button onClick={handleClick} className="column is-1 ml-2 is-size-5 button is-link is-focused">Submit</button> */}
        </form>
    )
}

export default SearchBar; 