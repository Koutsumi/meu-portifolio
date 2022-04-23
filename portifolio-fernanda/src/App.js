import "./App.css";
import Menu from "./components/Menu";
import DetalheLine from "./components/DetalheLine";
import MyInfo from "./components/MyInfo";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Rodape from "./components/Rodape"

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Menu />
        <DetalheLine />
      </header>

      <main>
        <MyInfo />

        <DetalheLine />

        <MyProjects />
      </main>

      <footer>
        <Contact />
        <Rodape />
      </footer>
    </div>
  );
}

export default App;
