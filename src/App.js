import "./App.css";
import Inicio from "./components/Inicio";
import Membresia from "./components/Membresia";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Reserva from "./components/Reserva";
import Servicios from "./components/Servicios";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Inicio title1={"Contratá nuestra"} title2={"Membresía"} />

        <Servicios />
        <Nosotros />
        <Membresia />
        <Reserva />
        <Form />
      </main>
    </div>
  );
}

export default App;
