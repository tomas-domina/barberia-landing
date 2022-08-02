import "./App.css";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Inicio title1={"Contratá nuestra"} title2={"Membresía"} />
      </div>

      <Servicios />
    </div>
  );
}

export default App;
