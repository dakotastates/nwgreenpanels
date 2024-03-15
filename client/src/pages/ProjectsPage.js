import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProjects} from '../store/project'
import {getParts} from '../store/part'
import Project from '../components/Projects/Project'
import SearchBar from '../components/Search/SearchBar'
import Projects from '../components/Projects/Projects'



const ProjectsPage = ({handleOpenModal}) =>{
    const { projects } = useSelector(state => state.project)
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch() 
    

    useEffect(()=>{
        setIsLoading(true)
        dispatch((getProjects())).then(()=>{
            dispatch((getParts()))
            setIsLoading(false)
        })
    },[])

    const handleSearch = (filteredProjects) => {
        console.log(filteredProjects)
        setFilteredProjects(filteredProjects);
    };
    // console.log('filtered', filteredProjects)
    // useEffect(()=>{
    // let results
    // if(filteredProjects){
    //     results = filteredProjects
    // } else{
    //     results = projects
    // }
    // },[projects])
    if (!isLoading){
        return(
            <div className='projects__container'>
                
                <div className='projects__main'>
                    <div className='projects__left'>
                        <div className='projects__nav'>
                            <button onClick={()=>handleOpenModal('create-project')} >New Project</button>
                            <SearchBar projects={projects} onSearch={handleSearch} />
                        </div>
                        <div>
                            <div>Recent Projects</div>
                            <div>
                                {filteredProjects.map((project, index)=> (
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

}

export default ProjectsPage

// Projects Page 
// {projects.map((project, index)=> (
//     <Project key={project.id} project={project} />
// ))}