import React, { useState } from "react";
import art from "../data/art";

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="projects-section">
      <h2>Art</h2>
      <p>"Why do you include these rudimentary sketches?" - Because I want to.</p>
      <div className="projects-grid">
        {art.map((piece, index) => (
          <div
            key={index}
            className="art-card"
            onClick={() => setSelectedImage(piece.image)}
          >
            <img src={piece.image} alt={piece.title} className="art-image" />
            <h3 className="art-title">{piece.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal overlay */}
      {selectedImage && (
        <div className="art-modal">
          <button className="close-btn" onClick={() => setSelectedImage(null)}>
            ✕
          </button>
          <img src={selectedImage} alt="enlarged artwork" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default Art;
