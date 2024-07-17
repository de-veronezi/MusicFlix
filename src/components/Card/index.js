import '../Card/card.css';
import BotaoCard from './BotaoCard';

function Card({ link, cor, cardId, aoDeletar, aoEditar }) {
    return (
        <section className='card' style={{ borderColor: cor }}>
            <iframe className='card-video' width='432px' height='320px' src={link}
                style={{ borderColor: cor }} title="YouTube video player"></iframe>
            <div className='botoes-card' style={{ borderColor: cor }}>
                <BotaoCard imagem='deletar' texto='DELETAR' evento={aoDeletar} cardId={cardId} />
                <BotaoCard imagem='editar' texto='EDITAR' evento={aoEditar} cardId={cardId}/>
            </div>
        </section>
    )
}

export default Card;