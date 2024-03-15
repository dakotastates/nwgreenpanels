import {useState, useEffect} from 'react'
import {createNote, updateNote} from '../../store/note'
// import {updateProject} from '../../store/project'
import {useDispatch, useSelector} from 'react-redux'
import { useParams  } from 'react-router-dom';

const CreateNote = ({handleOpenModal, projectId, data}) =>{
    const [note, setNote] = useState('')
    const [title, setTitle] = useState('')


    const dispatch = useDispatch() 
    // const params = useParams()
    // let id = params.id
    // console.log(params)


    let label
    if(data){
        label = 'Edit'
    } else {
        label = 'Create'
    }

    useEffect(()=>{
        if (data){
            setTitle(data.title)
            setNote(data.note)
        }

    },[data])

    const handleSubmit = () =>{
        // let id = params.id

        let noteObj = {
            project_id: projectId, 
            title: title, 
            note: note
        }

        if (data){
            noteObj.id = data.id
            dispatch((updateNote(noteObj))).then(()=>{
                handleOpenModal()
            })
        } else{
            // console.log('create')
            dispatch((createNote(noteObj))).then(()=>{
                handleOpenModal()
            })
        }
    }

    return(
        <div className='modal__container'>
            <div className='modal__container-top'>
                <div className='form__label'>{label} Note</div>
            </div>
            <div className='modal__container-mid'>
            <div className='form__fields'>
                <label for='title'>Title</label>
                <input placeholder='Title' name='title' value={title} onChange={e=>setTitle(e.target.value)}/>

                <label for='note'>Note</label>
                <textarea placeholder='Note' name='note' value={note} onChange={e=>setNote(e.target.value)}/>
            </div>
            </div>
            <div className='modal__container-bottom'>
                <div className='modal__form-button'><button onClick={handleSubmit}>{label}</button></div>
                <div className='modal__form-button'><button onClick={handleOpenModal}>Cancel</button></div>
            </div>
            
        </div>
    )
}

export default CreateNote