import { useState } from 'react'
import '../modal.css'

const img01 = "https://lh3.googleusercontent.com/d/1KBmNCJv6cqbrgWcH9mIcJhr6_SWa9EWt";
const img02 = "https://lh3.googleusercontent.com/d/1k-cCTYcatLkKpYuxTt7xgkfAlicAhZVa";
const img03 = "https://lh3.googleusercontent.com/d/1Qe6Ab2PIlR77fvyBzTnVY_rJtWlhKUYA";
const img04 = "https://lh3.googleusercontent.com/d/1rJC0kOaPG21Q35iv4GYJwE3KFimczfQy";
const img05 = "https://lh3.googleusercontent.com/d/1rk64E2HfSqbYe__wKaZKwQ1S5ZeYh_89";
const img06 = "https://lh3.googleusercontent.com/d/1Og3Tr8SH04EdZ8FnAUik0ra65kX1MAMT";
const img07 = "https://lh3.googleusercontent.com/d/1a0vDKNJXkwf9ZMEWkiD0z2jNuEK9RlSy";
const img08 = "https://lh3.googleusercontent.com/d/17SP19-q95tZh9VzO3JHnRnpZquye59lh";
const img09 = "https://lh3.googleusercontent.com/d/1171LfqBcEzLZbPUFNE8TmgQkFgAKfYYU";
const img10 = "https://lh3.googleusercontent.com/d/1YJMbz8o4vZsXJuUlGcd9Zfm9IcyejeQ7";
const img11 = "https://lh3.googleusercontent.com/d/12i1Dm7BinYOB1uyoLU5DQ-Mzz_Iy9wkY";
const img12 = "https://lh3.googleusercontent.com/d/1OjWbymWNOB7qYU01mScqkLMgpDdrkGtB";

const img14 = "https://lh3.googleusercontent.com/d/1KjU3WsEKshFjcgjLItIS-L0NYWbXZAvE";
const img15 = "https://lh3.googleusercontent.com/d/1kUGtRAbyVh45dh_HXbIlXOrPg5s_cxXV";
const img16 = "https://lh3.googleusercontent.com/d/1GpbcCb3_9lrTKLcLB-Z21HdCHcHmRzJO";
const img17 = "https://lh3.googleusercontent.com/d/1FZz6C1g-3Yi57qDW7-FTF7fB7iIryKWJ";
const img18 = "https://lh3.googleusercontent.com/d/1tAFvbZnQtujWMz7jKI4YZoAptbsrkORr";
const img19 = "https://lh3.googleusercontent.com/d/1GZKfDKv7ygRZ77eZvGNq7WjxiADqGp3L";
const img20 = "https://lh3.googleusercontent.com/d/1R7e-guxtMMwTuu45kdO5mD2a1jHWvuMv";
const img21 = "https://lh3.googleusercontent.com/d/1dO4PaWuUXDnT0wDHxgkS2Y2v4e1wSVda";
const img22 = "https://lh3.googleusercontent.com/d/1ngq2wcDu1lRSfGELjA3sIRzQE2YSG4As";
const img23 = "https://lh3.googleusercontent.com/d/1W4IGkEUAlmliPPX-x-6TxK6PD6eyK3tO";
const img24 = "https://lh3.googleusercontent.com/d/1toJ9JfslxalNXWjhaoHVOB84T8aexq_A";
const img25 = "https://lh3.googleusercontent.com/d/153RNzqncILtOs38tA_N7HJTFvcbXMmQP";
const img26 = "https://lh3.googleusercontent.com/d/1FgjBPdgsbZ_McP2Yz3iicJGAAhheuvAU";
const img27 = "https://lh3.googleusercontent.com/d/18YslkE8i3OXGyQYF6GYYtdEXXNnli61T";
const img28 = "https://lh3.googleusercontent.com/d/1G4Vmt8kXwTprx1_sYjJQtJgFVosASSxG";
const img29 = "https://lh3.googleusercontent.com/d/1Zsjuq4tMNbsTbvaho5hX3Ye5DFR3o2U-";

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
  img12,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29
]

function PersonalWork() {
  const [imagenAbierta, setImagenAbierta] = useState<string | null>(null)

  return (
    <main className="container home-page personal-work-page">
      <div className="gallery2">
        {items.map((img, index) => (
          <button
            key={index}
            type="button"
            className="gallery-item2"
            onClick={() => setImagenAbierta(img)}
          >
            <img
              src={img}
              alt={`Personal Work ${index + 1}`}
            />
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

export default PersonalWork