import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProjects} from '../store/project'
import {getParts} from '../store/part'
import Project from '../components/Projects/Project'



const ProjectsPage = () =>{

    const dispatch = useDispatch() 
    const { projects } = useSelector(state => state.project)

    useEffect(()=>{
        dispatch((getProjects())).then(()=>{
            dispatch((getParts()))
        })
    },[])

    return(
        <div className='projects__container'>
            Projects Page
            {projects.map((project, index)=> (
                <Project key={project.id} project={project} />
            ))}
        </div>
    )

}

export default ProjectsPage