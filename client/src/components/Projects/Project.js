import './Project.css'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const Project = ({project}) =>{
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate(`/projects/${project.id}`)
    }

    return(
        <div onClick={handleClick} className='project__container'>
            {project.title}
        </div>

        
    )
}

export default Project