import React, { useEffect, useState } from "react";

function Counter(props){

    // Utilizando hooks
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem("count");

        if(storedCount){
            return parseInt(localStorage.getItem("count"));
        }

        return props.count || 0;
    });

    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")));

        return () => {
            console.log("Executado ao remover component")
        }
    }, []) // Array vazio para o effect nao monitorar nenhuma variavel

    useEffect(() => {
        document.title = count;
        localStorage.setItem("count", count);
    }, [count])

    function add(){
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}

// class Counter extends React.Component {

//     // Primeiro metodo do ciclo de vida de um component
//     constructor(props){
//         super(props);

//         this.state = { count: 0 }
//         this.add = this.add.bind(this)
//     }

//     add(){
//         // this.setState({count: this.state.count + 1})
//         this.setState((state) => {
//             localStorage.setItem("state", JSON.stringify(this.state));
//             return {count: state.count + 1}
//         }, () => {
//             console.log(this.state);
//         })
//     }

//     // Executado depois que um coponent for carregado em tela
//     componentDidMount(){
//         this.setState(JSON.parse(localStorage.getItem("state")));
//     }

//     // Chamado quando o component for removido da tela
//     componentWillUnmount(){

//     }

//     // Informa se um component deve ser atualizado, se falso, ele nao sofre upd
//     // shouldComponentUpdate(){
//     //     let stateCount = this.state.count
//     //     if(stateCount >= 5){
//     //         return true;
//     //     }else{
//     //         return false;
//     //     }
//     // }

//     // Metódo que desenha na tela o component conforme a alteração de estado
//     render(){
//         return (
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.add}>add</button>
//             </div>
//         )
//     }
// }

export default Counter;