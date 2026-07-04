
import './about.css'

function About() {
  return (
    <main className="container about-page">
      <img
        src="https://res.cloudinary.com/qqekl0ru/image/upload/f_auto,q_auto/Andres_xcd1ln"
        alt="Andrés Escobedo"
        className="about-image"
      />

      <h2 className="about-title">Andrés Espinosa</h2>

      <div className="about-content">
        <p>
          I’m Andrés Escobedo, a Mexican Visual Development Artist, Character
          Designer, Background Designer, and Illustrator with over a decade of
          professional experience. My work focuses on worldbuilding, visual
          storytelling, and the creation of compelling characters and
          environments inspired by everyday life, landscapes, and video games.
        </p>

        <p>
          I have contributed to internationally recognized animated
          productions, including Emmy-nominated projects, collaborating across
          visual development, character design, environment design, and
          production illustration. Alongside my commercial work, I develop
          original graphic narratives and personal projects that explore Mexican
          culture, memory, and childhood through illustration.
        </p>
      </div>
    </main>
  )
}

export default About