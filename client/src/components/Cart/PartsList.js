import {useDispatch} from 'react-redux'
import {removeComponentFromCart, addComponentToCart, decrementComponentsInCart, addToCart, addCutToCart, updateCutInCart, removeCutFromCart} from '../../store/cart'
import {countComponent} from '../../store/component'

const PartsList = ({partsList, preview}) =>{
    const dispatch = useDispatch() 
    // console.log(partsList)
    // var count = partsList.reduce((cnt, cur) => (cnt[cur.id] = cnt[cur.id] + 1 || 1, cnt), {});
    // console.log(count)
    // const pl = partsList.filter((part) => !part._destroy);
    // console.log('pl', pl)

    const handleClick = (data, e) =>{
        // console.log(data)
        // console.log(e.target)
        // let quantity = data.quantity
        // // console.log(data)
        if (e.target.value == '-'){
            dispatch((decrementComponentsInCart(data.component))).then(()=>{
                data.component.component_parts.map((part, index)=>{
                    dispatch((removeCutFromCart(part)))
                })   
            })
        } else {
            dispatch((addComponentToCart(data.component))).then(()=>{
                data.component.component_parts.map((part, index)=>{
                    dispatch((addCutToCart(part)))
                })
            })
        }

        

        // dispatch((addToCart(data))).then(()=>{
        //     //after save no longer has data here
        //     data.component.component_parts.map(part =>{
        //         if (e.target.value == '-'){
        //             dispatch((updateCutInCart(part)))
        //         } else {
        //             dispatch((addCutToCart(part)))
        //         }
                
        //     })


        // console.log(data)

        // dispatch((addPartsToCart(data.component)))


        // }).then(()=>{
        //     let partsObj = {
        //         quantity: quantity, 
        //         // name: data.name, 
        //         component: data
        //     }
        //     dispatch((addPartsToCart(partsObj))).then(()=>{
        //         let dataObj = {
        //             count: quantity, 
        //             component: data.component
        //         }
        //         // console.log(dataObj)
        //         // dispatch((countComponent(dataObj)))
        //     })
        // })

    }


    const handleDelete = (data) =>{
        // console.log('Delete', data)
        dispatch((removeComponentFromCart(data.component)))
        dispatch((removeComponentFromCart(data))).then(()=>{
            data.component.component_parts.map((part)=>{
                dispatch((removeCutFromCart(part)))
            })
        })
    }
    
    return(
        <div className='cart__parts-list'>
            <div className='cart__list-label'>Parts List</div>
            <div className='cart__parts-list-container'>
                {partsList.filter((part) => !part._destroy).map((part, index)=>(
                    <div className={preview? 'cart__list-items preview' : 'cart__list-items'}>
                        <div className='cart__list-item-quantity'>{part.quantity}@</div>
                        <div className='cart__list-item-component'>{part.component.name}</div>
                        
                        <div className='list__spacer'>
                            {!preview ? 
                                <div className='cart__list-buttons'>
                                    {part.quantity > 1 ? <button value='-' onClick={(e)=> handleClick(part, e)}>-</button> : <button onClick={() =>handleDelete(part)}>X</button>}
                                    <button value='+' onClick={(e)=> handleClick(part, e)}>+</button>
                                </div>   
                                : null   
                            }
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default PartsList


{/* <div className='cart__list-items'>
<div>{part.quantity}@</div>
<div>{part.component.name}</div>
<div className='cart__list-buttons'>
    {part.quantity > 1 ? <button value='-' onClick={(e)=> handleClick(part, e)}>-</button> : <button onClick={() =>handleDelete(part)}>X</button>}
    <button value='+' onClick={(e)=> handleClick(part, e)}>+</button>
</div>
</div> */}