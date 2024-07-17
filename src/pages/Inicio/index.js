import { useState } from 'react';
import Banner from '../../components/Banner';
import Categorias from '../../components/Categorias';
import Modal from '../../components/Modal';
import db from '../../db.json';

function Inicio() {
    const [modalAberta, setModalAberta] = useState(true);

    const fecharModal = () => {
        setCardEditado(null);
        setModalAberta(false);
    }

    function abrirModal(cardId) {
        setCardEditado(cardId);
        setModalAberta(true);
    }

    const categorias = db.tag;

    const [cardEditado, setCardEditado] = useState(null);

    return (
        <>
            <Banner />
            {categorias.map(item => <Categorias {...item} key={item.nome} aoEditar={card => abrirModal(card)} />)}
            {cardEditado && <Modal cardVideoId={cardEditado} modalAberta={modalAberta} fecharModal={fecharModal} />}
        </>
    )

}

export default Inicio;