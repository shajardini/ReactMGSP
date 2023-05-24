import './modelo.css'


export default props =>{
   return(
    <div className='cartao'>
        <div>{props.titulo}</div>
        <div>{props.children}</div>
    </div>
   ) 
}