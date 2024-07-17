import { useState } from 'react';
import Botao from '../../components/Botao';
import CampoInput from '../../components/CampoInput';
import ListaSuspensa from '../../components/ListaSuspensa';
import TextArea from '../../components/TextArea';
import '../NovoVideo/novovideo.css';

function NovoVideo() {
    const [titulo, setTitulo] = useState('');
    const [link, setLink] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');

    const aoSubmeter = async (evento) => {
        evento.preventDefault();

        try {
            const resposta = await fetch('http://localhost:3000/videos', { method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ tag: categoria, titulo: titulo, descricao: descricao, link: link }) })

            if (resposta.ok) {
                alert('Vídeo cadastrado!')
            }
        } catch (erro) {
            alert('Vídeo não enviado, tente novamente.')
        }
    }

    function resetForm() {
        document.querySelectorAll('.div-form').forEach((e) => e.querySelector('input').value = '');
        document.querySelector('textarea').value = '';
    }

    return (
        <section className="novo-video">
            <h1>NOVO VÍDEO</h1>
            <p>PREENCHA O FORMULÁRIO PARA ADICIONAR UM NOVO VÍDEO.</p>
            <form className='novo-video-form' id='id-form' onSubmit={aoSubmeter}>
                <div className='div-form'>
                    <label>Título:</label>
                    <CampoInput placeholder={'Insira o título do vídeo'}
                        obrigatorio={true}
                        valor={titulo}
                        aoAlterado={valor => setTitulo(valor)} />

                    <label>Categoria:</label><ListaSuspensa
                        obrigatorio={true}
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)} />
                </div>
                <div className='div-form'>

                    <label>Link:</label>
                    <CampoInput placeholder={'Insira o link do vídeo'}
                        obrigatorio={true}
                        valor={link}
                        aoAlterado={valor => setLink(valor)} />

                    <label>Descrição:</label>
                    <TextArea placeholder={'Insira a descrição do vídeo'}
                        obrigatorio={true}
                        valor={descricao}
                        aoAlterado={valor => setDescricao(valor)} />
                </div>
                <div className='div-botoes'>
                    <Botao nome='GUARDAR' tipo={'submit'}></Botao>
                    <Botao nome='LIMPAR' tipo={'button'} aoClicar={resetForm}></Botao>
                </div>
            </form>
        </section>
    )
}

export default NovoVideo;