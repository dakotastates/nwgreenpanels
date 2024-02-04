import {useDispatch, useSelector} from 'react-redux'
import {addToCart, addPartsToCart, addCutToCart} from '../../store/cart'

const Component = ({component, handleOpenModal}) =>{

    const dispatch = useDispatch() 
    let count = 0
    
    const handleClick = (data)=>{
        count += 1
        // console.log(count, data.name)
        dispatch((addToCart(data))).then(()=>{
            data.component_parts.map(part =>{
                dispatch((addCutToCart(part))).then(()=>{

                })
            })
        }).then(()=>{
            let partsObj = {
                count: count, 
                name: data.name
            }
            dispatch((addPartsToCart(partsObj)))
        })
    }

    return(
        <div className='component__icon' >
            <div className='component__icon-top'>
                <div className='component__btn'>X</div>
            </div>
            <div className='component__icon-mid' onClick={() => handleClick(component)}>
                <div>{component.name}</div>
            </div>
            <div className='component__icon-bottom'>
                <div className='component__btn' >Copy</div>
                <div className='component__btn' onClick={() =>handleOpenModal('edit-component', component)} >Edit</div>
            </div>
        </div>
    )
}

export default Component