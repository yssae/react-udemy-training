import Image from "./Image";

function ImageList({ images }) {
    console.log(images)
    return(
        <div className="columns section is-multiline">
            {
                images.map((image, index) => 
                    <div className="column" key={index}>
                        <Image image={image}/>
                    </div>
                )
            }
        </div>
    )
}

export default ImageList;