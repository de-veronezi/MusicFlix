import { useState } from 'react';
import '../CampoInput/input.css';

function CampoInput({ placeholder, obrigatorio, valor, aoAlterado }) {
    const [inputAtualizado, setInputAtualizado] = useState(valor)
    
    const aoDigitado = (evento) => {
        setInputAtualizado(evento.target.value);
        aoAlterado(evento.target.value)
    }

    return (
        <input placeholder={placeholder}
            required={obrigatorio}
            onChange={aoDigitado}
            value={inputAtualizado} />
    )
}

export default CampoInput;