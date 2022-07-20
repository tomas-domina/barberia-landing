import "./App.css";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Inicio title1={"Contratá nuestra"} title2={"Membresía"} />
      </main>
    </div>
  );
}

export default App;
