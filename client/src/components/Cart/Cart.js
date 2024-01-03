import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {getComponents} from '../../store/component'
import './Cart.css'
import PartsList from './PartsList'
import CutList from './CutList'
// import {addPartsToCart} from '../../store/cart'

const Cart = () =>{

    const { cart, cutList, partsList } = useSelector(state => state.cart)

    // const dispatch = useDispatch() 


    return(
        <div className='cart__container'>
            <div className='cart__heading'>
                Shopping Cart
            </div>
            <div className='cart__content-container'>
                <div>
                    <CutList cutList={cutList} />
                </div>
                <div>
                    <PartsList partsList={partsList} />
                </div>
            </div>
            <div className='cart__bottom'><button>Print</button></div>
        </div>
    )

}

export default Cart; 


// cut list
// {cart?.map((component,index)=> (
//     <div key={component.id}>
//         {component.name}
//     </div> 
// ))}