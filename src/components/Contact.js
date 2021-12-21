import simon from "../simon-prof.jpeg";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-info-container">
        <div className="contact-text-container">
          <div>
            <h2>Simón Restrepo</h2>
            <p className="job">Sync Agent Falso Ídolo</p>
          </div>
          <div className="contact-links-container">
            <a href="tel:+573127414994">(+57) 312-741-4994</a>
            <a href="mailto:someone@example.com">restrepo.simon@hotmail.com</a>
          </div>
          <div className="icons-container">
            <a
              className="contact-icon"
              href="https://www.instagram.com/rstrpsmn/"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="contact-icon"
              href="https://www.linkedin.com/in/simonrestrepo/"
            >
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
        <div className="profile-img-container">
          <img className="profile-img" src={simon} alt="Simón Restrepo"></img>
        </div>
      </div>
    </section>
  );
}
