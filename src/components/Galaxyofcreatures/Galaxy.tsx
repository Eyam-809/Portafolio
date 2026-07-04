import { useState } from 'react'
import '../modal.css'

const bg01 = "https://lh3.googleusercontent.com/d/1Xv_vbDwNSLBXv-9e-VHFtpRwehuVjoKR";
const bg02 = "https://lh3.googleusercontent.com/d/1hgtA1Mr2fhnYsLspTbAmDEy3lV8DTQmN";
const bg03 = "https://lh3.googleusercontent.com/d/1yCtQTen8f07ltMDEssuHu_CYHuNnxQ0k";
const bg04 = "https://lh3.googleusercontent.com/d/1X85yd-IttodhqnA4y19HFvi9ahLYv7cf";
const bg05 = "https://lh3.googleusercontent.com/d/1gYmOa9xz_BEAV7PBFEWOAsmhRNxJcFHT";
const bg06 = "https://lh3.googleusercontent.com/d/1a8EDkdCP0yciVtbiCTJzXz9vxCEIaIdL";

const backgroundArt = [
  bg01,
  bg02,
  bg03,
  bg04,
  bg05,
  bg06,
]

function Galaxy() {
  const [imagenAbierta, setImagenAbierta] = useState(null)

  const renderGaleria = (items, titulo) => (
    <section className="vida-secreta-section">
      <h2 className="vida-secreta-title">{titulo}</h2>

      <div className="gallery2">
        {items.map((img, index) => (
          <button
            key={index}
            type="button"
            className="gallery-item2"
            onClick={() => setImagenAbierta(img)}
          >
            <img src={img} alt={`${titulo} ${index + 1}`} />
          </button>
        ))}
      </div>
    </section>
  )

  return (
    <main className="container home-page galaxy-page">
      {renderGaleria(backgroundArt, 'Background Art "Painting"')}

      {imagenAbierta && (
        <div className="image-modal" onClick={() => setImagenAbierta(null)}>
          <button
            type="button"
            className="image-modal-close"
            onClick={(e) => {
              e.stopPropagation()
              setImagenAbierta(null)
            }}
          >
            ×
          </button>

          <img
            src={imagenAbierta}
            alt="Imagen ampliada"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}

export default Galaxy