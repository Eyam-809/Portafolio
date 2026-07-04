import { useState } from 'react'
import '../modal.css'

const color01 = "https://lh3.googleusercontent.com/d/1v0Da-VdJOXBY_rQgmqFYcpb19DFm_p59";
const color02 = "https://lh3.googleusercontent.com/d/1VJVUvKbzcY0c2W0NBkYg5O6waIOSyZfB";
const color03 = "https://lh3.googleusercontent.com/d/1Shq-jkzlMpFEJxayLwOJOWCeipDosS4Q";
const color04 = "https://lh3.googleusercontent.com/d/1BSu9Vv9KZxwhE_OPcphPEY3Obj_sUkbV";


const visual01 = "https://lh3.googleusercontent.com/d/1Y3Woq9kkrxhB640vc1A0VRl-SOINUmyU";
const visual02 = "https://lh3.googleusercontent.com/d/10DzhMasspN4KE4ZtKCrJshmktsVlKRdY";
const visual03 = "https://lh3.googleusercontent.com/d/1vR5pHuFp8Cu0lV9WTn6vA84VSU4qkOo4";
const visual04 = "https://lh3.googleusercontent.com/d/15yuL61MDx3k2bRFFPzuDO-8ETki15e4J";
const visual05 = "https://lh3.googleusercontent.com/d/1mZqd_TC-aiePcd5nHnH_AOT3o3obApMf";
const visual06 = "https://lh3.googleusercontent.com/d/1DyhQzk2pY1ECYmxe4NmH00B2KDxSKflj";
const visual07 = "https://lh3.googleusercontent.com/d/1sPGjRmWzzIwNXkJNhtxrFNgPzKc5r6vx";
const visual08 = "https://lh3.googleusercontent.com/d/1lRk145cnC1wfzk-aDr1oNJWs8Gj0DVGg";
const visual09 = "https://lh3.googleusercontent.com/d/1oIy4tLVWqcDdo86JOWDkZsJdwz8PGk2-";
const visual10 = "https://lh3.googleusercontent.com/d/1jWsyxJgo9hd6Il5c0h0D2F7VUUzrICmQ";
const visual11 = "https://lh3.googleusercontent.com/d/1WZ5ept-yoRLpHzgi_64hDWyWrx1BmdC8";
const visual12 = "https://lh3.googleusercontent.com/d/1kXGNnI7vvLX0XrH_XXfuz_tI2Bw0ZEgm";
const visual13 = "https://lh3.googleusercontent.com/d/1sUfEpdxdfDP9xx212_arJ4AVAJUHchpr";
const visual14 = "https://lh3.googleusercontent.com/d/1tO9iEiou27xO45GJRJZDnAR3Sv-mkv5c";
const visual15 = "https://lh3.googleusercontent.com/d/1MUdiBa51ltKvo82vGZkZWRQEFL3Klcdl";
const visual16 = "https://lh3.googleusercontent.com/d/11Kei22EuoO5nx8mY8emhYo7mtSeAQyjO";
const visual17 = "https://lh3.googleusercontent.com/d/1_XzjrGdfalTkIP5O8uimrmeWf_6eSvcg";
const visual18 = "https://lh3.googleusercontent.com/d/1_uhIdlbtd2YwislbgPueWrQl6muhjnRp";
const visual19 = "https://lh3.googleusercontent.com/d/1882rReeLlGXInAzQuVbggroFMpd5c3BD";
const visual20 = "https://lh3.googleusercontent.com/d/1J5njdD_5lmA8m9_Ed0zetPd6f0dxdNfW";

const colorScript = [
  color01,
  color02,
  color03,
  color04,
]

const visuales = [
  visual01,
  visual02,
  visual03,
  visual04,
  visual05,
  visual06,
  visual07,
  visual08,
  visual09,
  visual10,
  visual11,
  visual12,
  visual13,
  visual14,
  visual15,
  visual16,
  visual17,
  visual18,
  visual19,
  visual20
]

function Vidasecreta() {
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
    <main className="container home-page vida-secreta-page">
      {renderGaleria(colorScript, 'Color Script')}
      {renderGaleria(visuales, 'Visual Developments')}

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

export default Vidasecreta