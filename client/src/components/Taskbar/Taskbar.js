import { useParams, useNavigate  } from 'react-router-dom';

import './Taskbar.css'


const Taskbar = ({project, handleOpenModal})=>{
    const navigate = useNavigate();

    return(
        <div className="taskbar__container">
            <div className='taskbar__icons'>
                <div onClick={()=>navigate(`/`)} className='taskbar__icon'>Back</div>
                <div onClick={() => handleOpenModal('create-component')} className='taskbar__icon'>New</div>
                <div className='taskbar__icon' onClick={() => handleOpenModal('edit-project')} >Edit</div>
                <div className='taskbar__icon'>Delete</div>
            </div>
            <div>{project?.title}</div>
            <div className='searchbar__container'><input className='searchbar' placeholder='Search' /></div>
        </div>
    )
}

export default Taskbar