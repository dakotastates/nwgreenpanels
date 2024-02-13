
const Note = ({note})=>{
    const handleDelete = () =>{
        console.log('delete', note.id)
    }

    const handleEdit = () =>{
        console.log('edit', note.id)
    }

    return (
        <div className='note__container'>
            <div className='note'>{note.note}</div>
            <div>{note.updated_at}</div>
            <div className='note__buttons'>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}

export default Note