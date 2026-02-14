import { useState } from 'react';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';

function Gallery() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-center mb-5">Our Work</h1>
          <div className="position-relative">
            <img 
              src={images[currentIndex]} 
              alt={`Gallery ${currentIndex + 1}`}
              className="gallery-image img-fluid w-100 rounded shadow"
            />
            <button 
              className="btn btn-primary position-absolute top-50 start-0 translate-middle-y ms-3"
              onClick={prevImage}
            >
              &lt;
            </button>
            <button 
              className="btn btn-primary position-absolute top-50 end-0 translate-middle-y me-3"
              onClick={nextImage}
            >
              &gt;
            </button>
          </div>
          <div className="text-center mt-3">
            <small className="text-muted">{currentIndex + 1} of {images.length}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;