import React from 'react'

type Item = {
  title: string
  image: string
  href: string
  passwordRequired?: boolean
  password?: string
  blurred?: boolean
}

const Gallery: React.FC<{ items?: Item[] }> = ({ items = [] }) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: Item
  ) => {
    if (!item.passwordRequired) return

    e.preventDefault()

    const pass = window.prompt('Enter password')

    if (pass === item.password) {
      window.location.href = item.href
    } else {
      alert('Incorrect password')
    }
  }

  return (
    <>
      <style>
        {`
          .card-img-blurred {
            filter: blur(18px) brightness(0.6);
            transform: scale(1.08);
          }
        `}
      </style>

      <div className="gallery">
        {items.map((it, idx) => (
          <a
            key={idx}
            className="card"
            href={it.href}
            onClick={(e) => handleClick(e, it)}
            target={it.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            <div className="card-media">
              <img
                className={`card-img ${
                  it.blurred ? 'card-img-blurred' : ''
                }`}
                src={it.image}
                alt={it.title}
              />

              <div className="card-overlay" aria-hidden="true" />
              <div className="card-title-overlay">{it.title}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export default Gallery