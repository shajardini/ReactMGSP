import React from "react";
import Primeiro from "./components/primeiro";
import ComParametro from "./components/comparametro";
import DadosPessoais from "./components/dadospessoais";
import Fragmento from "./components/fragmento";
import Modelo from "./components/layout/modelo";
import './app.css'
import NumeroAleatorio from "./components/numeroaleatorio";

function App() {

    let mensagem = 'Sextou!'

    return (

        <div className='App'>
           
            <h1>Fundamentos React</h1>


        <div className="cartoes">
       
            <Modelo titulo="Número Aleatório" cor='red'>
                <NumeroAleatorio minimo={20} maximo={30}/>
            </Modelo>

             <Modelo titulo="Número Aleatório" cor="green">
                <NumeroAleatorio minimo={100} maximo={1000}/>
            </Modelo>

            

            <Modelo titulo='Com fragmento' cor="pink">
                <Fragmento />
            </Modelo>

            <Modelo titulo='Dados pessoais' cor="yellow">
                <DadosPessoais />
            </Modelo>

            <Modelo titulo='Com parâmetro' cor="orange">
                <ComParametro titulo="Dia 19/05" subtitulo="Aula React" />
            </Modelo>

            <Modelo titulo='Com parâmetro' cor="purple">
                <ComParametro titulo="Dia 22/05" subtitulo="Aula de Cidadania" />
            </Modelo>

            <Modelo titulo='Utilizando variável' cor="grey">
                <p>{mensagem}</p>
            </Modelo>

            <Modelo titulo='Primeiro componente' cor="orangered">
                <Primeiro />
            </Modelo>
        </div>
        </div>
    )

}

export default App