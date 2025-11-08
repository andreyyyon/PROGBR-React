import './App.css';
import Header from "./Header.js";
import Counter from "./Counter.js";
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true);
  let time = 0;

  useEffect(() => {
    let timer = setInterval(() => {
        time++;
        console.log(time);
        if(time > 5){
          clearInterval(timer);
          setShow(false)
        }
      }, 1000);
  }, [])


  if(show){
    return (
      <div>
        {/* <Header name="Nome do Header" links= {["About", "Buy", "Contact", "Login"]}></Header> */}
        <Counter count={0}></Counter>
      </div>
    );
  }else{
    return (
      <div>
        Outra div
      </div>
    );
  }
}

export default App;
