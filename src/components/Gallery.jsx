import { useState, useEffect } from "react";

function Gallery() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/photos") // Replace with your backend API
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, []);

    return (
        <section className="gallery">
            {photos.map((photo, index) => (
                <img key={index} src={photo.url} alt={`Gallery ${index + 1}`} />
            ))}
        </section>
    );
}

export default Gallery;
