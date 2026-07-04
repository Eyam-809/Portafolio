import React from 'react'

import imgPro1 from '../assets/img/Portafolio_img_2021.png'
import imgPro2 from '../assets/img/Portafolio_img_2022.png'
import imgPro3 from '../assets/img/Portafolio_img_2024.png'

function Portfolio() {
  const portfolioItems = [
    {
      title: 'Portfolio 2021',
      image: imgPro1,
      href: '#',
    },
    {
      title: 'Portfolio 2022',
      image: imgPro2,
      href: '#',
    },
    {
      title: 'Visdev Portfolio 2024',
      image: imgPro3,
      href: '#',
    },
  ]

  return (
    <main className="container portfolio-page">
      <h2 className="portfolio-title">Portfolio</h2>

      <div className="gallery portfolio-gallery">
        {portfolioItems.map((item, idx) => (
          <a
            key={idx}
            className="card portfolio-card"
            href={item.href}
            aria-label={item.title}
          >
            <div className="card-media">
              <img
                className="card-img"
                src={item.image}
                alt={item.title}
              />

              <div className="card-overlay" />
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}

//Pruba de subida en git 

export default Portfolio