import './modelo.css'


export default props =>{

    const estilo ={
        backgroundColor: props.cor,
        borderColor: props.cor
    }


   return(
    <div className='cartao' style={estilo}>
        <div className='titulo'>{props.titulo}</div>
        <div className='conteudo'>{props.children}</div>
    </div>
   ) 
}