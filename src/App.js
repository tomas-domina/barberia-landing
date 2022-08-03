import "./App.css";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Inicio title1={"Contratá nuestra"} title2={"Membresía"} />

        <Servicios />
      </main>
    </div>
  );
}

export default App;
