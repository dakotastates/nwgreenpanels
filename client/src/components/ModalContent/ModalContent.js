import NewComponent from '../Components/NewComponent';
import ShowComponent from '../Components/ShowComponent';
import NewProject from '../Projects/NewProject';
import CreateNote from '../Notes/CreateNote';
import {useDispatch, useSelector} from 'react-redux'
// import { useParams  } from 'react-router-dom';


const ModalContent = ({modalTarget, handleOpenModal, modalData}) =>{

    const { project } = useSelector(state => state.project)
    
    let content
    if (modalTarget == 'create-project'){
        content = <NewProject handleOpenModal={handleOpenModal} />
    } else if (modalTarget == 'edit-project'){
        content = <NewProject handleOpenModal={handleOpenModal} data={project} />
    } else if (modalTarget == 'create-component'){
        content = <NewComponent handleOpenModal={handleOpenModal} />
    } else if (modalTarget == 'edit-component'){
        content = <NewComponent handleOpenModal={handleOpenModal} data={modalData} />
    } else if (modalTarget == 'show-component'){
        content = <ShowComponent handleOpenModal={handleOpenModal} data={modalData} />
    } else if (modalTarget == 'create-note'){
        content = <CreateNote handleOpenModal={handleOpenModal} projectId={project.id} />
    } else if (modalTarget == 'edit-note'){
        content = <CreateNote handleOpenModal={handleOpenModal} projectId={project.id} data={modalData} />
    }

    return(
        <>
            {content}
        </>
    )
}

export default ModalContent