
import "./App.css";
import Footer from "./Components/Footer";
import Garagem from "./Components/Garagem";
import Header from "./Components/Header"


export default function App() {
  

  return (
    <div className="App">
      <Header/>
      <h1>Aula - Componentes React</h1>
      <Garagem/>
      <Footer/>
        
    </div>
  );
}
