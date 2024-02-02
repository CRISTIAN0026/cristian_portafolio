import React from "react";

export default function HeroSection() {
  const [navActive, setNavActive] = React.useState(false);
  const closeMenu = () => {
    setNavActive(false);
  };
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  React.useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = new URL('../../assets/CV Cristian Paez_.pdf', import.meta.url).href;
      link.download = 'Cristian Paez CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };
  
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hola soy Cristian</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Apasionado por el mundo del software, me embarqué en un viaje para desarrollar al máximo mi potencial en esta área, 
          con el objetivo de ser mejor cada día.
          </p>
        </div>
        <br /> 
        <div class="btn-container">
        <button onClick={closeMenu} className="btn btn-primary">
          Contactar
        </button>
        <button
          class="btn btn-color-2"
          onClick={() => handleDownload()}
        >
          Descargar CV
        </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/Diseño_Cris.png" alt="Hero Section" />
      </div>
    </section>
  );
}
