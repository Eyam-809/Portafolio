import { useState } from 'react'
import '../modal.css'

// Background Art
const bg01 = "https://lh3.googleusercontent.com/d/1SSN97eljHslSr-xbkwM9W6pf87Ath3PZ";
const bg02 = "https://lh3.googleusercontent.com/d/16lV0GUfQAqlR4i8F6qSzRlwZ7kOw75C7";
const bg03 = "https://lh3.googleusercontent.com/d/1EJZ_Ru-gWp9Oxz-KGLZqd4EjUxX8RPjM";
const bg04 = "https://lh3.googleusercontent.com/d/123M8SpFIG1F6dspp6vxYL_rslOL9rk9U";
const bg05 = "https://lh3.googleusercontent.com/d/1FZWrR0_LHe7ksXN5_B7_H8cGKwHVRj1t";
const bg06 = "https://lh3.googleusercontent.com/d/125JPKnI6Y-GH2d7EM3_oRR3FABWOBHYs";

// Character Design
const char01 = "https://lh3.googleusercontent.com/d/1IOk8FA1BOu_agtoLDoXZ5QKWBhFqoc8u";
const char02 = "https://lh3.googleusercontent.com/d/1Or3UnZ68oiJYEPFWouwRPZRI3CmPp071";
const char03 = "https://lh3.googleusercontent.com/d/1bhQLClYBnQdCDttdKyu2fPnMT5RNwWqw";
const char04 = "https://lh3.googleusercontent.com/d/1pSAKqQjoldFG1zw8ay6TzAGl8zIRS1ES";
const char05 = "https://lh3.googleusercontent.com/d/109DjCvEVN8_AW8oNl8HWz5T9yR5fJMHj";
const char06 = "https://lh3.googleusercontent.com/d/1ifnn8aKlkIG1Di01ZqGZSOws6cOKFv80";
const char07 = "https://lh3.googleusercontent.com/d/1S7ciW2H-nh4ZTC7mQbcj8paJ8jxg57Ye";
const char08 = "https://lh3.googleusercontent.com/d/1YbzRiSYPnIUMdjkCKHdwtwEs-htHiA64";
const char09 = "https://lh3.googleusercontent.com/d/1M9qEBdmTIuI_l3mo81LsP91369pJS5rL";
const char10 = "https://lh3.googleusercontent.com/d/1QtrjkyBUqSY9OZgn2bFiZtQM3Wq9SrUQ";
const char11 = "https://lh3.googleusercontent.com/d/1d8O4hC2HHXyW8Fkk3uOT9uIwxj-Y2SGD";
const char12 = "https://lh3.googleusercontent.com/d/1fB-ahphRky4-bZPQHcFDDIfsOKmximqa";
const char13 = "https://lh3.googleusercontent.com/d/1W00UuA-haIYIS7Dx1XNz68MKPPtJ3Xd_";
const char14 = "https://lh3.googleusercontent.com/d/1HE8xlAvPk9Pr9nMWBPXthlj1Sic9ke1d";
const char15 = "https://lh3.googleusercontent.com/d/1DKIcjmvv4x9NBjDXqoYn6jHoLKg2Ea_O";
const char16 = "https://lh3.googleusercontent.com/d/1ha-jbtE98geRhxWgCPS1noWLVMv_rBYu";
const char17 = "https://lh3.googleusercontent.com/d/1JXRSPngPL_qot9-5xyGex-gzfiSvNWMQ";
const char18 = "https://lh3.googleusercontent.com/d/1-4qKOZBMwCLGRGTyeYMC1t4yOyuYosol";

const backgroundArt = [
  bg01,
    bg02,
  bg03,
    bg04,
    bg05,
    bg06,
]

const characterDesign = [
  char01,
  char02,
  char03,
    char04,
    char05,
    char06,
    char07,
    char08,
    char09,
    char10,
    char11,
    char12,
    char13,
    char14,
    char15,
    char16,
    char17,
    char18,
]

function Commonside() {
  const [imagenAbierta, setImagenAbierta] = useState<string | null>(null)

  const renderGaleria = (items: string[], titulo: string) => (
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
  <main className="container home-page commonside-page">

    {renderGaleria(backgroundArt, 'Background Art')}

    {renderGaleria(characterDesign, 'Character Design')}

    <div className="credits-section">
      <h3>Credits</h3>

      <p>
        Background Art — Layout by Pierre Pecoraro
      </p>

      <p>
        Background Art — Layout by Nicoletta Bea
      </p>
    </div>

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

export default Commonside