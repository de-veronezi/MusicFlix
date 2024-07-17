import '../Botao/botao.css';

function Botao({ nome, tipo, aoClicar }) {
    return (
        <button className='botao-geral' type={tipo} onClick={aoClicar}>{nome}</button>
    )
}

export default Botao;