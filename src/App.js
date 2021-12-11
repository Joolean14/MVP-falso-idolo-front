import "./normalize.css";
import "./App.css";
import ListContainer from "./components/ListContainer";

function App() {
  return (
    <main className="App">
      <h1 className="title">Falso Ídolo Portafolio</h1>
      <div className="contact">
        <div className="contact-text-container">
          <div>
            <h2>Simón Restrepo</h2>
            <p>Sync Agent Falso Ídolo</p>
          </div>
          <p>(+57) 312-741-4994</p>
          <p>restrepo.simon@hotmail.com</p>
          <a href="https://www.instagram.com/rstrpsmn/">
            https://www.instagram.com/rstrpsmn/
          </a>
          <a href="https://www.linkedin.com/in/simonrestrepo/">
            https://www.linkedin.com/in/simonrestrepo/
          </a>
        </div>
        <div className="profile-img-container">
          <img
            className="profile-img"
            src="https://picsum.photos/400?random=93"
            alt="Simón Restrepo"
          ></img>
        </div>
      </div>
      <ListContainer />
    </main>
  );
}

export default App;
