import {useEffect} from 'react';
import Components from '../components/Components/Components';
import Cart from '../components/Cart/Cart';
import {useDispatch, useSelector} from 'react-redux'
import {getProject} from '../store/project'
import { useParams  } from 'react-router-dom';

const ProjectPage = ({handleOpenModal}) =>{
    const { project } = useSelector(state => state.project)
    const dispatch = useDispatch() 
    const params = useParams()

    useEffect(()=>{
        let id = params.id
        dispatch((getProject(id)))
    },[])
    // console.log(project.cutList)
    return(
    <div className='project__page-container'> 
        <div className='left__container' >
            <Components project={project} handleOpenModal={handleOpenModal} />
        </div>
        <div className='right__container'>
            <Cart id={params.id} />
        </div>
    </div>
    )

}

export default ProjectPage