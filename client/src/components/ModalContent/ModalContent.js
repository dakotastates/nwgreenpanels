import NewComponent from '../Components/NewComponent';
import NewProject from '../Projects/NewProject';
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
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default ModalContent