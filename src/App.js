import "./App.css";

import Inicio from "./components/Landing/Inicio/Inicio";
import Membresia from "./components/Landing/Membresia/Membresia";
import Navbar from "./components/Landing/Navbar/Navbar";
import Nosotros from "./components/Landing/Nosotros/Nosotros";
import Servicios from "./components/Landing/Servicios/Servicios";
import Form from "./components/Landing/Form/Form";
import WhatsappIcon from "./components/Landing/WhatsappIcon/WhatsappIcon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio title1={"Contratá nuestra"} title2={"Membresía"} />
      <Servicios />
      <Nosotros />
      <Membresia />
      <Form />

      <div className="whatsapp">
        <a
          href="https://wa.me/5493413981194?text=Hola,%20necesito%20informacion"
          target="_blank"
        >
          <WhatsappIcon />
        </a>
      </div>
    </div>
  );
}

export default App;
