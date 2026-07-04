import { useState } from 'react'
import '../modal.css'

const bg01 = "https://lh3.googleusercontent.com/d/1_8Q97-FtldFeyOaKnIDxrmtO0QxZsPAb";
const bg02 = "https://lh3.googleusercontent.com/d/1TzO4jCApx5B7l3QeycFMoSq-A1GZBfuq";
const bg03 = "https://lh3.googleusercontent.com/d/1idnX79qQTbPTByl2fdaSIxJ_Pr2sMPyx";
const bg04 = "https://lh3.googleusercontent.com/d/1IR8Ihoi4YdMLupbhryDuRBZV3LoNidUD";
const bg05 = "https://lh3.googleusercontent.com/d/1LCON4nNDZzJO9gcNBWhJ2425CzIkOFTD";
const bg06 = "https://lh3.googleusercontent.com/d/1bzIYBTTDxiVdMrqYjOJKXI2uM4Eo37y2";
const bg07 = "https://lh3.googleusercontent.com/d/11sTgE46-dyrlvkhDmTlm4c97rcnDP9SQ";
const bg08 = "https://lh3.googleusercontent.com/d/1--42xESJN2obTYYxBN4phycjjrLRu1r6";

const character01 = "https://lh3.googleusercontent.com/d/199Qw0rW7g4EqnfRweiTm6G_Q3ErUGsKn";
const character02 = "https://lh3.googleusercontent.com/d/1Zst-OelDz8G_QLSS_K5WXGHgcVt6KLUv";
const character03 = "https://lh3.googleusercontent.com/d/1tyT3bJInfQY6KgPFRpT_PbGvY6SYyT5q";
const character04 = "https://lh3.googleusercontent.com/d/1zK20cmlZ_LZ_TDqaECUcILNU-Vw8VH5R";
const character05 = "https://lh3.googleusercontent.com/d/1ushdnDmRJ61wtm74GPh9pKzvm4FZGW7M";
const character06 = "https://lh3.googleusercontent.com/d/1MAwhZaSPB1AU3-gw8IUn79J_2a3lu3RV";
const character07 = "https://lh3.googleusercontent.com/d/1U1yYcU-z5COJ1b6dB5z-8fKKy02VdS2Y";
const character08 = "https://lh3.googleusercontent.com/d/1LqTfmDilcrTn278rhNdfHFtBTExg5rPg";


const backgroundArt = [
  bg01,
  bg02,
  bg03,
  bg04,
  bg05,
  bg06,
  bg07,
  bg08,
]

const characterDesign = [
  character01,
  character02,
  character03,
    character04,
    character05,
    character06,
    character07,
    character08,
]

function Navespace() {
  const [imagenAbierta, setImagenAbierta] = useState<string | null>(null)

  const renderGaleria = (items: string[], titulo: string) => (
    <section className="gallery-section">
      <h2 className="gallery-section-title">{titulo}</h2>

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
    <main className="container home-page navespace-page">
      {renderGaleria(backgroundArt, 'Background Art (Painting)')}
      {renderGaleria(characterDesign, 'Character Design')}

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

export default Navespace