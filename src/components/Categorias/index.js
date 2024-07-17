import { useState } from 'react';
import '../Categorias/categorias.css';
import ContainerVideos from '../ContainerVideos';
import Tag from '../Tag';
import db from '../../db.json';

const Categorias = ({ nome, cor, aoEditar}) => {
    const videosDb = db.videos;
    const videosFiltrados = videosDb.filter(item => item.tag === nome);
    const videosCards = videosFiltrados.map(item => ({ link: item.link, cor: cor, id: item.id }));
    
    const [cardsNoContainer, setCardsNoContainer] = useState(videosCards);

    function deletarCard (id) {
        setCardsNoContainer(cardsNoContainer.filter(item => item.id !== id));
    }
    
    return (
        <section className='categorias'>
            <Tag categoria={nome} cor={cor} />
            <ContainerVideos aoDeletar={deletarCard} videos={cardsNoContainer} aoEditar={aoEditar}/>
        </section>
    )
}

export default Categorias;