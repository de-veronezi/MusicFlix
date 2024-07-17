import '../Tag/tag.css';

function Tag({categoria, cor}) {
    return (
        <div className='tag' style={{backgroundColor: cor}}>{categoria}</div>
    )
}

export default Tag;