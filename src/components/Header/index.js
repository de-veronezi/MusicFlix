import { Link } from 'react-router-dom';
import '../Header/header.css';
import Botao from '../Botao';

function Header() {
    return (
        <header>
            <nav>
                <img src='/assets/logo-musicflix.png' alt='logo-musicflix' width='300' heigth='40'/>
                <div className='botoes-header'>
                <Link to={'/'}> <Botao nome='HOME' tipo={'button'}></Botao></Link>
                <Link to={'/novo'}> <Botao nome='NOVO VÍDEO' tipo={'button'}></Botao></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;