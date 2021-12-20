import "./normalize.css";
import "./App.css";
import ListContainer from "./components/ListContainer";
import FAQ from "./components/FAQ";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main className="main-container">
      <div className="title-container">
        <h1 className="main-title title">Falso Ídolo Portafolio</h1>
        <div className="title-underline"></div>
      </div>
      <Contact />
      <FAQ />
      <ListContainer />
    </main>
  );
}

export default App;
