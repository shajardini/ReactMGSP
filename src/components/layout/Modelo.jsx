import './modelo.css'


export default props =>{
   return(
    <div className='cartao'>
        <div className='titulo'>{props.titulo}</div>
        <div className='conteudo'>{props.children}</div>
    </div>
   ) 
}