import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {saveProject} from '../../store/project'
import {setCart} from '../../store/cart'
import './Cart.css'
import PartsList from './PartsList'
import CutList from './CutList'
// import {addPartsToCart} from '../../store/cart'

const Cart = ({id}) =>{
    const [cut, setCut] = useState([{id: null, quantity: '', dimension_id: '', part_id: ''}])
    // const [cl, setCl] = useState([{id: null, quantity: '', component_id: ''}])
    const { cart, cutList, partsList } = useSelector(state => state.cart)
    // console.log(cutList)
    const dispatch = useDispatch() 

    useEffect(()=>{
        const initialCuts = cutList.map((cut) =>({
            
            quantity: cut.quantity, 
            dimension_id: cut.dimension.id,
            part_id: cut.part.id
        }))
        setCut(initialCuts)
    },[cutList])


    useEffect(()=>{
        dispatch((setCart(id)))
    },[])

    // useEffect(()=>{
    //     partsList.map((part)=>{
    //         // let partObj={
    //         //     id: part.id, 
    //         //     quantity: part.quantity, 
    //         //     component_id: part.component.id
    //         // }
    //         // setCl(partObj)
    //         console.log(part)
    //     })
    // },[partsList])

    const handleSave = e =>{
        e.preventDefault() 
        let projectObj = {
            id: id,
            cut_lists_attributes: cut, 
            // part_lists_attributes: partsList
        }
        // debugger
        // console.log(cl)
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