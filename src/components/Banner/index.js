import '../Banner/banner.css';
import db from '../../db.json';
import Tag from '../Tag';

function Banner() {
    const videosDb = db.videos;
    const indiceAleatorio = Math.floor(Math.random() * videosDb.length);
    const videoAleatorio = videosDb[indiceAleatorio];
    const imagemBackground = videoAleatorio.imagem;
    
    const categoriasDb = db.tag;
    const categoriaFiltrada = categoriasDb.find(item => item.nome === videoAleatorio.tag);

    return (
        <div className='banner' style={{backgroundImage: `url(${imagemBackground})`}}>
            <div className='banner-div'>
                <Tag categoria={videoAleatorio.tag} cor={categoriaFiltrada.cor}/>
                <h2>{videoAleatorio.titulo}</h2>
                <h3>{videoAleatorio.descricao}</h3>
            </div>
            <iframe width="646" height="334" src={videoAleatorio.link} style={{borderColor: categoriaFiltrada.cor}} title="YouTube video player"></iframe>
        </div>
    )
}

export default Banner;