import styles from './Conhecimentos.Module.css'

function Conhecimentos({ferramenta, nivel}){
    return(
        <>
        <li><span>{ferramenta} - {nivel}</span> </li>
        </>

    )
}

export default Conhecimentos;