import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createProject, updateProject} from '../../store/project'
import { useNavigate } from 'react-router-dom';


const NewProject = ({handleOpenModal, data}) =>{
    const [title, setTitle] = useState('') 
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const dispatch = useDispatch() 
    const navigate = useNavigate();
    
    let label
    if(data){
        label = 'Edit'
    } else{
        label = 'Create'
    }

    let handleImageChange = (e) =>{
        if(e.target.files.length !== 0){
            setImageUrl(URL.createObjectURL(e.target?.files[0]))
        }
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
        <div className='modal__container'>
            <div className='modal__container-top'>
                <div className='form__label'>{data? `Edit ${data.title}` : 'Create Project'}</div>
            </div>
            <div className='modal__container-mid'>
                <div className='modal__form-container'>
                    <div className='modal__form-container-left'>
                        <div className='modal__form-image-container'>
                            <img src={imageUrl ? imageUrl : "/default.webp"} alt="image" className='modal__form-image' />
                            <input type="file" id="myFileInput" className="custom-file-input" onChange={handleImageChange} /> 
                            <label for="myFileInput" className="custom-file-label">Browse...</label>
                        </div>
                    </div>
                    <div className='modal__form-container-right'>
                        <div className='form__fields'>
                            <label for='name'>Name</label>
                            <input placeholder='Title' name='name' value={title} onChange={e=>setTitle(e.target.value)}/>
                            <label for='description'>Description</label>
                            <textarea placeholder='Description' name='description' value={description} onChange={e=>setDescription(e.target.value)}/>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal__container-bottom'>
                <div onClick={handleSubmit} className='modal__form-button'><button>{data? `Edit` : 'Create'}</button></div>
                <div className='modal__form-button'><button onClick={handleOpenModal}>Cancel</button></div>
            </div>
            
            


        </div>
    )
}

export default NewProject


{/* <div className='form__fields'>
<input placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
<textarea placeholder='Description' value={description} onChange={e=>setDescription(e.target.value)}/>
</div> */}