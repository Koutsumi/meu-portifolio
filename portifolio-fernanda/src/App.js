import "./App.css";
import Menu from "./components/Menu";
import DetalheLine from "./components/DetalheLine";
import MyInfo from "./components/MyInfo";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Rodape from "./components/Rodape"
import MenuMobile from "./components/MenuMobile"

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <Menu />
        <MenuMobile />
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
