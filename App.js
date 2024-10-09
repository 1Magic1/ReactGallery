import React, { useState } from 'react';
import './App.css';

//Масив URL-адрес для зображень
const images = [
  'https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtftvwg0PJllUtboLhzMHZY0VGnxFkIFvwxQ&s',
  'https://c.files.bbci.co.uk/116AB/production/_115093317_neo4.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfv9W0VWSbE9BCmbRc4KhKTsboW7BTYn2kPQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIaNqW7YdVpScIRKMwr-wEPUCdHi1s-YoIw&s',
  'https://upload.wikimedia.org/wikipedia/commons/e/e3/Hermitage_cat.jpeg'
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLarge, setIsLarge] = useState(true);

  // Функція для переходу до наступного зображення
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Функція для зміни розміру зображення
  const handleResizeImage = () => {
    setIsLarge(!isLarge);
  };

  return (
    <div className="gallery-container">
      <img
        src={images[currentImageIndex]}
        alt="Gallery"
        className={isLarge ? 'large' : 'small'}
      />
      <div className="button-container">
        <button className="button" onClick={handleNextImage}>
          Next
        </button>
        <button className="button" onClick={handleResizeImage}>
          Resize
        </button>
      </div>
    </div>
  );
}

export default App;
