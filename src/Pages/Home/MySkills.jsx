import data from "../../data/index.json";
import Tecnologías from "./Tecnologías";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">Mis habilidades</p>
        <h2 className="skills--section--heading">Mi experiencia</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              <p className="skills--section--description">{item.detail}</p>
              <Tecnologías  tecnologías={item.tecnologías} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
