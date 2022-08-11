import "./App.css";
import { Link, animateScroll as scroll } from "react-scroll";

import Inicio from "./components/Inicio";
import Membresia from "./components/Membresia";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio title1={"Contratá nuestra"} title2={"Membresía"} />
      <Servicios />
      <Nosotros />
      <Membresia />
      <Form />
    </div>
  );
}

export default App;
