import { Link } from 'react-router-dom' //Importando o componente link do router dom
//<Link> - componente que passa a rota

export default function Menu(){

    return(
        <nav className='menu'>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )
}