import React from "react";
import Primeiro from "./components/primeiro";

function App() {

    let mensagem = 'Sextou!'

    return (

        <div>
            <p>{mensagem}</p>
            <Primeiro></Primeiro>
        </div>
    )

}

export default App