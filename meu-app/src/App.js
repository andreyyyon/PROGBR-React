import './App.css';
import Header from "./Header.js";

function App() {
  return (
    <Header name="Nome do Header" links= {["About", "Buy", "Contact", "Login"]}></Header>
  );
}

export default App;
