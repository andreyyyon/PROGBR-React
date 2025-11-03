import './App.css';
import Header from "./Header.js";
import Counter from "./Counter.js";

function App() {
  return (
    <div>
      <Header name="Nome do Header" links= {["About", "Buy", "Contact", "Login"]}></Header>
      <Counter count={5}></Counter>
    </div>
  );
}

export default App;
