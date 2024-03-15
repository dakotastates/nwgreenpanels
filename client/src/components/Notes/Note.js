import {deleteNote} from '../../store/note'
import {useDispatch} from 'react-redux'

const Note = ({note, project, setSelectedNote, handleOpenModal})=>{

    const dispatch = useDispatch() 

    const handleDelete = () =>{
        // console.log('delete', note.id)
        dispatch((deleteNote(note.id)))
    }

    const handleClick = () =>{
        setSelectedNote(note)
    }

    return (
        <div className='note__container' onClick={handleClick}>
            <div className='note'>{note.title}</div>
            <div className='note__buttons'>
                <div onClick={() =>handleOpenModal('edit-note', note)}>Edit</div>
                <div onClick={handleDelete}>X</div>
            </div>
        </div>
    )
}

export default Note