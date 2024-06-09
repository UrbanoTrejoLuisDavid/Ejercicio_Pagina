import React from "react";
import "./App.css"; // Importa tu archivo de estilos CSS
import ara from "./images/ara.png"; 
import bat from "./images/bat.png"; 
import capit from "./images/capit.jpg"; 
import dead from "./images/dead.jpg"; 
import flash from "./images/flash.jpg"; 
import hulk from "./images/hulk.png"; 
import ironman from "./images/ironman.jpg"; 
import joker from "./images/joker.jpg";
import linterna from "./images/linterna.png";
import superman from "./images/superman.png" 
import casa from "./images/casa.png";
import galeria from "./images/galeria-de-fotos.png";


const Area1 = () => {
  return (
    <div className="component-container">
      <h2 className="center">Superheroes</h2>
      <div className="center-text">
        <p>Un texto.</p>
      </div>
      <div className="two-columns">
        <div className="small-paragraph">Otro texto.</div>
        <div className="small-paragraph">Un texto mas.</div>
      </div>
    </div>
  );
};

const Galeria = () => {
  // Rutas de las imágenes
  const images = [
    { id: 1, src: ara, alt: "Image 1" },
    { id: 2, src: bat, alt: "Image 2" },
    { id: 3, src: capit, alt: "Image 3" },
    { id: 4, src: dead, alt: "Image 4" },
    { id: 5, src: flash, alt: "Image 5" },
    { id: 6, src: hulk, alt: "Image 6" },
    { id: 7, src: ironman, alt: "Image 7" },
    { id: 8, src: joker, alt: "Image 8" },
    { id: 9, src: linterna, alt: "Image 9" },
    { id: 10, src: superman, alt: "Image 10" },
    // Agrega aquí las demás imágenes
  ];

  return (
    <div className="component-container">
      <h2 className="center-text">Galeria</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = React.useState("Area1");

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header>
        <h1 className="center-text">{currentPage === "Area1" ? "AREA 1" : "AREA 2"}</h1>
      </header>
      <main>
        {currentPage === "Area1" ? <Area1 /> : <Galeria />}
      </main>
      <footer className="center-text">
      <nav>
          <button onClick={() => handleChangePage("Area1")}
            style={{
              backgroundImage: `url(${casa})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '30px',
              height: '30px'
            }}
            disabled={currentPage === "Area1"} // Aquí se bloqueará si currentPage es "Area1"
          ></button>
          <button onClick={() => handleChangePage("Home")}
            style={{
              backgroundImage: `url(${galeria})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '30px',
              height: '30px'
            }}
            disabled={currentPage === "Home"} // Aquí se bloqueará si currentPage es "Home"
          ></button>
      </nav>
      </footer>
    </div>
  );
};

export default App;
