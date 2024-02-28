import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createProject, updateProject} from '../../store/project'
import { useNavigate } from 'react-router-dom';


const NewProject = ({handleOpenModal, data}) =>{
    const [title, setTitle] = useState('') 
    const [description, setDescription] = useState('')

    const dispatch = useDispatch() 
    const navigate = useNavigate();
    
    let label
    if(data){
        label = 'Edit Project'
    } else{
        label = 'Create Project'
    }

    useEffect(()=>{
        if (data){
            setTitle(data.title)
            setDescription(data.description)
        }

    },[data])


    const handleSubmit = e =>{
        e.preventDefault()


        
        let newObj = {
            title: title,
            description: description
        }

        if (data){
            newObj.id = data.id
            dispatch((updateProject(newObj))).then(()=>{
                handleOpenModal()
            })
        } else{
            // console.log('create')
            dispatch((createProject(newObj))).then(()=>{
                // navigate(`/projects/${newObj.uuid}`)
                handleOpenModal()
            })
        }

        
    }

    return(
        <div className='form__container'>
            
            <div className='form__label'>{label}</div>
            <div className='form__fields'>
                <input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
                <textarea placeholder='Description' value={description} onChange={e=>setDescription(e.target.value)}/>
            </div>
            <div onClick={handleSubmit} className='form__submit'><button>{label}</button></div>
            <button onClick={handleOpenModal}>Cancel</button>
        </div>
    )
}

export default NewProject