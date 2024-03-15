import {useState} from 'react'
import Note from './Note';
import './Notes.css';
import { useSelector} from 'react-redux'

const Notes = ({project, handleOpenModal}) =>{
    const [selectedNote, setSelectedNote] = useState(null)
    const { notes } = useSelector(state => state.note)
    // const { components } = useSelector(state => state.component)
    const handleClick = () =>{
        console.log('new note', project.id)
        handleOpenModal()
    }
    
    return(
        <div className='notes__container'>
            <div className='notes__nav'> 
                <button onClick={()=>handleOpenModal('create-note')}>New Note</button>
                <div className='notes__label'>Notes</div>
                <div></div>
            </div>
            
            <div className='notes'>
                
                <div className='notes__left'>
                    {notes.map((note)=>(
                        <Note note={note} project={project} setSelectedNote={setSelectedNote} handleOpenModal={handleOpenModal} />
                    ))}
                    {(notes.length !== 0)? null : 'No Notes Yet'}
                </div>

                <div className='notes__right'>
                    <div className='notes__display'>
                        <div>{selectedNote?.title}</div>
                        <div>{selectedNote?.note}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Notes