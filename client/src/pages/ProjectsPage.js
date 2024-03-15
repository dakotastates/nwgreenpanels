import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProjects} from '../store/project'
import {getParts} from '../store/part'
import Project from '../components/Projects/Project'



const ProjectsPage = ({handleOpenModal}) =>{

    const dispatch = useDispatch() 
    const { projects } = useSelector(state => state.project)

    useEffect(()=>{
        dispatch((getProjects())).then(()=>{
            dispatch((getParts()))
        })
    },[])

    return(
        <div className='projects__container'>
            
            <div className='projects__main'>
                <div className='projects__left'>
                    <div className='projects__nav'>
                        <button onClick={()=>handleOpenModal('create-project')} >New Project</button>
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div>
                        <div>Recent Projects</div>
                        <div>
                            {projects.map((project, index)=> (
                                <Project handleOpenModal={handleOpenModal} key={project.id} project={project} />
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className='projects__right'><img className='projects__image' src='https://lirp.cdn-website.com/c9194e6f/dms3rep/multi/opt/20151215_114416-3ff58838-1920w.jpg' /></div>
            </div>
        </div>
    )

}

export default ProjectsPage

// Projects Page 
// {projects.map((project, index)=> (
//     <Project key={project.id} project={project} />
// ))}