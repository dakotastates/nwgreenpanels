import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, addComponentToCart, addCutToCart, setCount} from '../../store/cart'
import {deleteComponent, countComponent} from '../../store/component'

const Component = ({component, handleOpenModal}) =>{

    const dispatch = useDispatch() 
    const [isLoading, setIsLoading] = useState(false)
    const { project } = useSelector(state => state.project)

    const handleCopy = () =>{
        console.log('copy', component)
        const { id, ...copiedComponentWithoutId } = component;
        // console.log(copiedComponentWithoutId)
        handleOpenModal('copy-component', copiedComponentWithoutId )
    }

    const handleClick = (data)=>{

        dispatch((addComponentToCart(component))).then(()=>{
            component.component_parts.map((part, index)=>{
                    // console.log('part', part)
                let dataObj = {
                    quantity: part.quantity, 
                    part: part.part, 
                    dimension: part.dimension

                }
                dispatch((addCutToCart(dataObj)))
            })
        })

    }

    const handleDelete = () =>{
        dispatch((deleteComponent(component.id)))
    }

        return(
            <div className='component__icon' >
                <div className='component__icon-top'>
                    <div className='component__btn' onClick={() =>handleOpenModal('show-component', component)}>i</div>
                    {/* <div className='component__btn'>{component.component_number}</div> */}
                    <div className='component__btn' onClick={handleDelete}>X</div>
                </div>
                <div className='component__icon-mid' onClick={() => handleClick(component)}>
                    <div>{component.name}</div>
                </div>
                <div className='component__icon-bottom'>
                    <div className='component__btn' onClick={handleCopy} >Copy</div>
                    <div className='component__btn' onClick={() =>handleOpenModal('edit-component', component)} >Edit</div>
                </div>
            </div>
        )
    // }
}

export default Component