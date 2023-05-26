import alunos from "../../dados/alunos"

function Lista(){
    const lista = alunos.map((alunos)=>{
        return(
            <li key={alunos.id}>{alunos.id}){alunos.nome} -- {alunos.nota}</li>
        )
    })

    return(
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}

export default Lista