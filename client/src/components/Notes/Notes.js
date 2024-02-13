import Note from './Note';
import './Notes.css';

const Notes = ({project}) =>{
    return(
        <div className='notes__container'>
            <div className='notes__label'>Notes</div>
            {project.notes.map((note)=>(
                <Note note={note} />
            ))}
        </div>
    )
} 

export default Notes