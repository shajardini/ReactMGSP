import React from "react"

function NumeroAleatorio(props) {
   const min = props.minimo 
   const max = props.maximo 
   
   const aleatorio = parseInt(Math.random() * (max-min))+min
    //Math.random() - retorna um número entre 0 e 1

    return (
        <div>
            <h2>Valor Aleatório</h2>

            <p><strong>Valor Mínimo: </strong>{min}</p>

            <p><strong>Valor Máximo: </strong>{max}</p>

            <p><strong>Valor Sorteado: </strong>{aleatorio}</p>
        </div>
    )
}export default NumeroAleatorio