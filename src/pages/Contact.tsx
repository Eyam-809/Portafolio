

function Contact() {
  return (
    <main className="container contact-page">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-content">
        <p className="contact-subtitle">Follow me on my social media</p>
        
        <div className="contact-links">
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=noveescobedo@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <div className="contact-icon">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 6.5L12 12.2L20.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>

  <h3>Gmail</h3>
  <p>Andres Escobedo</p>
</a>

          <a href="https://www.instagram.com/nove_escobedo?igsh=b2IxemY5bWVkODZl" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 11.9C8.1 9.9 9.9 8.1 11.9 8C13.9 7.9 15.7 9.7 15.8 11.7C15.9 13.7 14.1 15.5 12.1 15.6C10.1 15.7 8.3 13.9 8 11.9Z" stroke="currentColor" strokeWidth="1"/>
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </div>
            <h3>Instagram</h3>
            <p>@nove_escobedo</p>
          </a>

          <a href="https://www.facebook.com/share/1DoaeFgKXr/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C12.7909 2 11 3.79086 11 6V8H9V11H11V22H14V11H16.5L17 8H14V6C14 5.44772 14.4477 5 15 5H18V2Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Facebook</h3>
            <p>@Andrés "Nove" Escobedo</p>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Contact
