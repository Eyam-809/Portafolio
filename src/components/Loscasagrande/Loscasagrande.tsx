import { useState } from 'react'
import '../modal.css'

const img01 = "https://lh3.googleusercontent.com/d/11v8gKtn3hFBuE3GumT_ZRnm18bHO486d";
const img02 = "https://lh3.googleusercontent.com/d/16bZEXx3R8uBkSVJmpq1YIUUpTT24QbWs";
const img03 = "https://lh3.googleusercontent.com/d/1qWYCshq6udW4MCtFnFKzggPJKBYzUik3";
const img04 = "https://lh3.googleusercontent.com/d/1boehMQfPqfOYb_hlA6X3zxl5LUd_vmq6";
const img05 = "https://lh3.googleusercontent.com/d/1SZgmme4ibWd96BJ2E16_Bppsgvx5AIKD";
const img06 = "https://lh3.googleusercontent.com/d/1rboFd20NXfqjh-blJfw1pWhdJDgfJYXs";
const img07 = "https://lh3.googleusercontent.com/d/1WWOy3UscS2rBQuk2cGDy8MRrsuOSQ9EY";
const img08 = "https://lh3.googleusercontent.com/d/150UJR-VPDNYXNXtTksBXiEh-XY0ZM5Fc";
const img09 = "https://lh3.googleusercontent.com/d/1jG1m0_53N4P3Dv4j-sRPO5Dnmxae0Mr-";
const img10 = "https://lh3.googleusercontent.com/d/1Fjs6pcP86w2XKsO0QSSehnDt44_Zy3Yf";
const img11 = "https://lh3.googleusercontent.com/d/1iw_gD6kqpD8AdMptWw8oNq0lcmD5i9Wq";

const items = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
]

function Loscasagrande() {
  const [imagenAbierta, setImagenAbierta] = useState(null)

  return (
    <main className="container home-page">
      <div className="gallery2">
        {items.map((img, index) => (
          <button
            key={index}
            type="button"
            className="gallery-item2"
            onClick={() => setImagenAbierta(img)}
          >
            <img src={img} alt={`Los Casagrande ${index + 1}`} />
          </button>
        ))}
      </div>

      {imagenAbierta && (
        <div
          className="image-modal"
          onClick={() => setImagenAbierta(null)}
        >
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

export default Loscasagrande