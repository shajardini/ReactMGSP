import React from "react";
import Primeiro from "./components/primeiro";
import ComParametro from "./components/comparametro";
import DadosPessoais from "./components/dadospessoais";
import Fragmento from "./components/fragmento";
import Modelo from "./components/layout/modelo";
import './app.css'

function App() {

    let mensagem = 'Sextou!'

    return (

        <div className='App'>
           
            <h1>Fundamentos React</h1>


        <div className="cartoes">

            <Modelo titulo='Com fragmento'>
                <Fragmento />
            </Modelo>


            <Modelo titulo='Dados pessoais'>
                <DadosPessoais />
            </Modelo>

            <Modelo>
                <ComParametro titulo="Dia 19/05" subtitulo="Aula React" />
            </Modelo>

            <Modelo>
                <ComParametro titulo="Dia 22/05" subtitulo="Aula de Cidadania" />
            </Modelo>

            <Modelo>
                <p>{mensagem}</p>
            </Modelo>

            <Modelo>
                <Primeiro />
            </Modelo>
        </div>
        </div>
    )

}

export default App