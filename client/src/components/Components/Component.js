import {useDispatch, useSelector} from 'react-redux'
import {addToCart, addPartsToCart, addCutToCart} from '../../store/cart'

const Component = (props) =>{

    const dispatch = useDispatch() 
    let count = 0

    const handleClick = (data)=>{
        count += 1
        // console.log(count, data.name)
        dispatch((addToCart(data))).then(()=>{
            data.parts.map(part =>{
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
        <div onClick={() => handleClick(props.component)}>
            {props.component.name}
        </div>
    )
}

export default Component