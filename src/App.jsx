import React from "react";
import Primeiro from "./components/primeiro";
import ComParametro from "./components/comparametro";
import DadosPessoais from "./components/dadospessoais";

function App() {

    let mensagem = 'Sextou!'

    return (

        <div>
            <DadosPessoais/>
            <ComParametro titulo="Dia 19/05" subtitulo="Aula React"/>
            <ComParametro titulo="Dia 22/05" subtitulo="Aula de Cidadania"/>
            <p>{mensagem}</p>
            <Primeiro/>
        </div>
    )

}

export default App