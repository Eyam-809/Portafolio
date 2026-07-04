import React from 'react'
import './BookCover.css'

const BookCover: React.FC = () => {
  return (
    <div className="bookcover-root">
      <div className="bookcover-canvas" role="img" aria-label="Portada del libro El Acto de Crear">
        <div className="circle">
          <div className="dot" />
        </div>

        <div className="title-vertical">El Acto de Crear: una Manera de Ser</div>
        <div className="author-vertical">Rick Rubin</div>
      </div>
    </div>
  )
}

export default BookCover
