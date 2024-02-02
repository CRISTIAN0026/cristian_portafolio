export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <p class="section__text__p1">Ponte en contacto conmigo</p>
      <h1 className="title">Contácteme</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./img/gmail.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:cristianpaez009@gmail.com">
              email
            </a>
          </p>
        </div>
        <div class="contact-info-container">
          <img
            src="./img/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon linkedIn-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/cristian009" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
        <div class="contact-info-container">
          <img
            src="./img/whatsapp.png"
            alt="LinkedIn icon"
            class="icon contact-icon linkedIn-icon"
          />
          <p>
            <a href="https://wa.me/573043966737" target="_blank">
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
