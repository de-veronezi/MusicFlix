import '../BotaoCard/botaocard.css';

function BotaoCard({ imagem, texto, cardId, evento }) {
    return (
        <button className='botao-card' onClick={() => evento(cardId)}>
            <img src={`./assets/icon-${imagem}.png`} alt={`icone-${imagem}`} width='25' heigth='28' />
            {texto}
        </button>
    )
}

export default BotaoCard;