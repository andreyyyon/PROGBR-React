import React from "react"
import "./App.css"

// Criar componentes com letras maiusculas para identificar no JSX
function Menu(props){
    const listLinks = props.links;
    return (
        <ul className='menu'>
            {listLinks.map((link, index) => <li key={index}>{link}</li>)}
        </ul>
    )
}

export default Menu;