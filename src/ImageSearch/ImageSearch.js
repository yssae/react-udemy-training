import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import { searchImages } from "../api";
import { useState } from "react";

function ImageSearchApp() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const response = await searchImages(term);
        setImages(response);
    }
    
    
    return (
      <div className="imagesearch mb-6">
        <section className="hero is-small is-info">
          <div className="hero-body">
            <p className="title">Image Search App</p>
          </div>
        </section>
        <section className="section">
          <SearchBar onSubmit={handleSubmit} />
        </section>
        <section>
          <ImageList images={images}/>
        </section>
      </div>
    );
}

export default ImageSearchApp;