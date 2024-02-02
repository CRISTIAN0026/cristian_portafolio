export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/img-Cristian.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Acerca de</p>
          <h1 className="skills-section--heading">Sobre mi</h1>
          <p className="hero--section-description">
            Full Stack Developer con más de 1 un año de experiencia
            especializado en JavaScript, React, Next.js, Node js. Con
            conocimientos TypeScript, Express, GraphQL. Experiencia creando
            bases de datos así como la interfases de usuario me permitieron
            desarrollar habilidades como comunicación, autonomía,
            responsabilidad.
          </p>
          <p className="hero--section-description">
          ● <span style={{fontWeight:'bold'}}> Ingenierio de Software </span>  Universidad de Cartagena (Cursando - Modalidad virtual),
          </p>
          <p className="hero--section-description">
          ●  <span style={{fontWeight:'bold'}}>Analisis y Desarrollo de Software en el SENA</span> (Cursando - Modalidad virtual).

          </p>
          <p className="hero--section-description">
          ●  <span style={{fontWeight:'bold'}}>Full Stack Web Developer.</span> Henry Bootcamp 2022.</p>
        </div>
      </div>
    </section>
  );
}
