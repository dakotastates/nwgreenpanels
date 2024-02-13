import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {saveProject} from '../../store/project'
import './Cart.css'
import PartsList from './PartsList'
import CutList from './CutList'
// import {addPartsToCart} from '../../store/cart'

const Cart = ({id}) =>{

    const { cart, cutList, partsList } = useSelector(state => state.cart)
    // console.log(cutList)
    const dispatch = useDispatch() 

    const handleSave = e =>{
        e.preventDefault()
        let projectObj = {
            id: id,
            cutList: cutList, 
            partslist: partsList
        }
        dispatch((saveProject(projectObj)))
    }


    return(
        <div className='cart__container'>
            <div className='cart__heading'>
                 Cart
            </div>
            <div className='cart__content-container'>
                <CutList cutList={cutList} /> 
                <PartsList partsList={partsList} />
            </div>
            <div className='cart__bottom'>
                <button>Print</button>
                <button>Clear</button>
                <button onClick={handleSave}>Save</button>
                <button>Cancel</button>
            </div>
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