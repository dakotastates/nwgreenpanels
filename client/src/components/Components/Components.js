import {useState, useEffect, useRef} from 'react';
import './Components.css';
import {useDispatch, useSelector} from 'react-redux'
import {getComponents} from '../../store/component'
import Component from './Component';
import Taskbar from '../Taskbar/Taskbar';
import NewComponent from './NewComponent';
import Notes from '../Notes/Notes';


const Components = ({project, handleOpenModal}) =>{
    // const [toggleModal, setToggleModal] = useState(true)
    // const [modalTarget, setModalTarget] = useState(null)
    const { components } = useSelector(state => state.component)
    const [filteredComponents, setFilteredComponents] = useState([]);
    const [toggleNotes, setToggleNotes] = useState(false)

    const dispatch = useDispatch() 
    
    const { notes } = useSelector(state => state.note)
    // const refModal = useRef(null) 
    // const handleOpenModal = (e) =>{
    //     setModalTarget(e.target.id)
    //     setToggleModal(!toggleModal)
    // }

    // const closeOpenModal = e =>{
    //     if(!refModal.current?.contains(e.target)){
    //         setToggleModal(false) 
    //     }
    // } 

    // let modalContent
    // if(modalTarget == 'new'){
    //     modalContent = <NewComponent />
    // } else if( modalTarget == 'edit'){
    //     modalContent = <NewComponent data='Edit Me!'/>
    // }

    // useEffect(()=>{
    //     document.addEventListener('click', closeOpenModal, true)
    // },[])  

    useEffect(()=>{
        dispatch(getComponents()).then(()=>{
            
        })
    },[])

    return(
        <div className='components__container'> 
            <Taskbar components={components} setFilteredComponents={setFilteredComponents} project={project} handleOpenModal={handleOpenModal} />
            <div className='component__container'> 
                {filteredComponents.map((component) =>(
                    <div className='component' key={component.id}>
                        <Component component={component} handleOpenModal={handleOpenModal} />
                    </div>
                ))}
            </div>
            <div className='notes__container-comp'>
                <button className='notes__toogle-button' onClick={()=>setToggleNotes(!toggleNotes)}>{toggleNotes ? 'Close' : <>Notes ({notes?.length})</>}</button>
                {toggleNotes ? <div><Notes handleOpenModal={handleOpenModal} project={project} /></div> : null}
            </div>

            
            {/* {toggleModal? 
                <div className='form__modal'>
                    <div className="form__modal-content" ref={refModal}>
                        {modalContent}
                    </div>
                </div> 
            : null} */}
        </div>
    )
}

export default Components