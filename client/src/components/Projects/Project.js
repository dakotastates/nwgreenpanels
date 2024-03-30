import './Project.css'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {deleteProject} from '../../store/project'

const Project = ({project, handleOpenModal}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch() 

    const handleClick = ()=>{
        navigate(`/projects/${project.id}`)
    }

    const handleDelete = ()=>{
        dispatch((deleteProject(project.id)))
    }

    // debugger
    return(
        <div className='project__container'>
            <div className='project' onClick={handleClick}>{project.title}</div>
            <div className='project__buttons'> 
                <button onClick={()=>handleOpenModal('edit-project', project)}>Edit</button>
                
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>

        
    )
}

export default Project