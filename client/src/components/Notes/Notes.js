import Note from './Note';
import './Notes.css';

const Notes = ({project}) =>{

    const handleClick = () =>{
        console.log('new note')
    }

    return(
        <div className='notes__container'>
            <div>
                <button onClick={handleClick}>New Note</button>
            </div>
            <div className='notes__label'>Notes</div>
            {project.notes.map((note)=>(
                <Note note={note} />
            ))}
            {(project.notes.length !== 0)? null : 'No Notes Yet'}
        </div>
    )
} 

export default Notes