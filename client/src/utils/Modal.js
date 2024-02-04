import {useState, useRef, useEffect} from 'react'

const Modal = ({modalContent, modalButton, listItemClasses, handleClick, submitBtnText}) =>{
    const [toggleModal, setToggleModal] = useState(false) 

    const refModal = useRef(null) 

    const handleOpenModal = () =>{
        setToggleModal(!toggleModal)
    }

    const closeOpenModal = e =>{
        if(!refModal.current?.contains(e.target)){
            setToggleModal(false) 
        }
    } 

    useEffect(()=>{
        document.addEventListener('click', closeOpenModal, true)
    },[])  

    const handleFormClick = () =>{
        handleClick().then(()=>{
            handleOpenModal()
        })
        
    }

    return(
        <>
        <div className={listItemClasses} onClick={handleOpenModal}>
            {modalButton}
        </div>
        { toggleModal ?
        <div  className="modal" >
            <div className="modal-content" ref={refModal}>
                    <div className='list__form'>
                        {modalContent}
                        <div className='list__form-buttons'>
                            <div className='list__form-button-close' onClick={handleOpenModal}>Cancel</div>
                            <div className='list__form-button-done' onClick={handleFormClick}>{submitBtnText}</div>
                        </div>
                    </div>

                
            </div>
        </div> 
        : 
        null
        }
        </>
    )
} 

export default Modal