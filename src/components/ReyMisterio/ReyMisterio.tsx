import { useState } from 'react'
import '../modal.css'

const img01 = "https://lh3.googleusercontent.com/d/1esGA5ouQGd4RcgFEHGOsUu5nMF8JfNMo";
const img02 = "https://lh3.googleusercontent.com/d/1ACDddSo8sjDjNc694fsq4yzE1OW-Fdef";
const img03 = "https://lh3.googleusercontent.com/d/1YwU0nDTV_fQtI19eAEmUlwhRFCT_OxbF";
const img04 = "https://lh3.googleusercontent.com/d/1QJ7fe4O3-j7712Jtznve2TTOsSaFr6Sr";
const img05 = "https://lh3.googleusercontent.com/d/1JVdWTsBoCMv_ODUYSuQc-_uRrKi4WvAo";
const img06 = "https://lh3.googleusercontent.com/d/1JE3rpg9v5NH4IHUb_Mjz-rQOI5l-uTk4";
const img07 = "https://lh3.googleusercontent.com/d/1rDrncTamDCI07BX0CjoGPareM_SZ4GM2";
const img08 = "https://lh3.googleusercontent.com/d/1d3yELHyn5ONS7QXZ_lKZbtDJmedr39Mu";
const img09 = "https://lh3.googleusercontent.com/d/1R4cLNsOi3YZDGdUm9Nr33DkjXCxuLiQi";
const img10 = "https://lh3.googleusercontent.com/d/1bUKAGtX730Pj-EIPuVa-GueXW_HSk3z4";
const img11 = "https://lh3.googleusercontent.com/d/1m4BkE0d_hhNuqtxRiRICSOEAiLj7ipmd";
const img12 = "https://lh3.googleusercontent.com/d/13ljP1aH8NgMxQd-it6RQDV-tgTs1F4Sa";

const items = [
  img01, img02, img03, img04, img05, img06,
  img07, img08, img09, img10, img11, img12,
]

function ReyMisterio() {
  const [imagenAbierta, setImagenAbierta] = useState<string | null>(null)

  return (
    <main className="container home-page rey-misterio-page">
      <div className="gallery2">
        {items.map((img, index) => (
          <button
            key={index}
            type="button"
            className="gallery-item2"
            onClick={() => setImagenAbierta(img)}
          >
            <img src={img} alt={`Rey Misterio ${index + 1}`} />
          </button>
        ))}
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

export default ReyMisterio