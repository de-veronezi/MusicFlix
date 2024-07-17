import { useState } from 'react';
import '../Modal/modal.css';
import Botao from '../Botao';
import CampoInput from '../CampoInput';
import ListaSuspensa from '../ListaSuspensa';
import TextArea from '../TextArea';
import Overlay from '../Overlay';
import db from '../../db.json';

const Modal = ({ cardVideoId, fecharModal, modalAberta }) => {
    const videosDb = db.videos;
    const video = videosDb.find(item => item.id === cardVideoId);

    const [tituloEditado, setTituloEditado] = useState(video.titulo);
    const [categoriaEditada, setCategoriaEditada] = useState(video.tag);
    const [linkEditado, setLinkEditado] = useState(video.link);
    const [descricaoEditada, setDescricaoEditada] = useState(video.descricao);

    const aoSubmeterEdicao = async (evento) => {
        evento.preventDefault();

        try {
            const resposta = await fetch(`http://localhost:3000/videos/${cardVideoId}`, { method: 'put', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id: cardVideoId, tag: categoriaEditada, titulo: tituloEditado, descricao: descricaoEditada, link: linkEditado }) })

            if (resposta.ok) {
                alert('Vídeo editado!')
            }
        } catch (erro) {
            alert('Vídeo não editado, tente novamente.')
        }
    }

    return (
        <dialog open={modalAberta} >
            <Overlay>
                <div className='modal'>
                    <img src='/assets/icon-fechar.png' alt='icone fechar' className='icone-fechar' onClick={fecharModal} />
                    <h1 className='editarCard'>EDITAR CARD</h1>
                    <form className='modal-form' onSubmit={aoSubmeterEdicao}>
                        <label>Título:</label>
                        <CampoInput aoAlterado={valor => setTituloEditado(valor)} valor={video.titulo} />

                        <label>Categoria:</label>
                        <ListaSuspensa aoAlterado={valor => setCategoriaEditada(valor)} valor={video.tag} />

                        <label>Link:</label>
                        <CampoInput aoAlterado={valor => setLinkEditado(valor)} valor={video.link} />

                        <label>Descrição:</label>
                        <TextArea aoAlterado={valor => setDescricaoEditada(valor)} valor={video.descricao} />

                        <div className='div-botoes'>
                            <Botao nome='GUARDAR' tipo={'submit'} ></Botao>
                            <Botao nome='LIMPAR' tipo={'reset'}></Botao>
                        </div>
                    </form>
                </div>
            </Overlay>
        </dialog >
    )
}

export default Modal;