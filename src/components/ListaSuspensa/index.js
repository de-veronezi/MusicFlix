import { useState } from 'react';
import '../ListaSuspensa/listasuspensa.css';
import db from '../../db.json';

function ListaSuspensa({ obrigatorio, valor, aoAlterado }) {
    const categoriasLista = db.tag;

    const [listaAtualizada, setListaAtualizada] = useState(valor);

    const aoEscolhido = (evento) => {
        setListaAtualizada(evento.target.value);
        aoAlterado(evento.target.value)
    }

    return (
        <div>
            <select className='lista-suspensa' 
            required={obrigatorio}
            value={listaAtualizada}
            onChange={evento => aoEscolhido(evento)}>
                {categoriasLista.map(item => <option>{item.nome}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;