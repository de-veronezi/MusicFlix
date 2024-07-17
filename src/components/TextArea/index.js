import { useState } from 'react';
import '../TextArea/textarea.css';

function TextArea({placeholder, obrigatorio, valor, aoAlterado}) {
    const [textAreaAtualizado, setTextAreaAtualizado] = useState(valor)
    
    const aoDigitado = (evento) => {
        setTextAreaAtualizado(evento.target.value);
        aoAlterado(evento.target.value)
    }

    return (
        <textarea placeholder={placeholder} required={obrigatorio} value={textAreaAtualizado} onChange={aoDigitado}/>
    )
}

export default TextArea;