import './modelo.css'


export default props =>{
   return(
    <div>
        <div>{props.titulo}</div>
        <div>{props.children}</div>
    </div>
   ) 
}

