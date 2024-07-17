import Card from '../Card';
import '../ContainerVideos/containervideos.css';

function ContainerVideos({ videos, aoDeletar, aoEditar }) {
    return (
        <section className='container-video'>
            {videos.map(item => <Card {...item} 
            key={item.id} 
            aoDeletar={aoDeletar} 
            aoEditar={aoEditar} 
            cardId={item.id}/>)}
        </section>
    )
    }

    export default ContainerVideos;
