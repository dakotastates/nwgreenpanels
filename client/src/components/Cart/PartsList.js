import {useDispatch} from 'react-redux'
import {removeComponentFromCart, addPartsToCart, addToCart, addCutToCart, updateCutInCart, removeCutFromCart} from '../../store/cart'
import {countComponent} from '../../store/component'

const PartsList = ({partsList}) =>{
    const dispatch = useDispatch() 

    const handleClick = (data, e) =>{
        // console.log(e.target)
        let count = data.count

        if (e.target.value == '-'){
            count-=1
        } else {
            count+=1
        }

        dispatch((addToCart(data))).then(()=>{
            
            data.component.component_parts.map(part =>{
                if (e.target.value == '-'){
                    dispatch((updateCutInCart(part)))
                } else {
                    dispatch((addCutToCart(part)))
                }
                
            })

        }).then(()=>{
            let partsObj = {
                count: count, 
                name: data.name, 
                component: data
            }
            dispatch((addPartsToCart(partsObj))).then(()=>{
                let dataObj = {
                    count: count, 
                    component: data.component
                }
                // console.log(dataObj)
                dispatch((countComponent(dataObj)))
            })
        })

    }


    const handleDelete = (data) =>{
        // console.log('Delete', part)
        dispatch((removeComponentFromCart(data))).then(()=>{
            data.component.component_parts.map((part)=>{
                dispatch((removeCutFromCart(part)))
            })
        })
    }
    
    return(
        <div className='cart__parts-list'>
            <div className='cart__list-label'>Parts List</div>
            {partsList.map((part, index)=>(
                <div className='cart__list-items'>
                    <div>{part.count}@</div>
                    <div>{part.name}</div>
                    <div className='cart__list-buttons'>
                        {part.count > 1 ? <button value='-' onClick={(e)=> handleClick(part, e)}>-</button> : <button onClick={() =>handleDelete(part)}>X</button>}
                        <button value='+' onClick={(e)=> handleClick(part, e)}>+</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default PartsList