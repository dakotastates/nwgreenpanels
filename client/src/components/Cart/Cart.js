import {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {saveProject} from '../../store/project'
import {addComponentToCart, addCutToCart, setCart} from '../../store/cart'
import {countComponent} from '../../store/component'
import './Cart.css'
import PartsList from './PartsList'
import CutList from './CutList'
import component from '../../store/component'

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

const Cart = ({id, handleOpenModal}) =>{
    const [cut, setCut] = useState([{id: null, quantity: '', dimension_id: '', part_id: ''}])
    const [pl, setPl] = useState([{id: null, quantity: '', component_id: ''}])
    const [notifs, setNotfs] = useState(null)

    const { cart, cutList, partsList } = useSelector(state => state.cart)
    const { project } = useSelector(state => state.project)
    const { components} = useSelector(state => state.component)
    const dispatch = useDispatch() 

    // const componentRef = useRef();

    useEffect(()=>{
        const initialCuts = cutList.map((cut) =>({  
            id: cut.id,
            quantity: cut.quantity, 
            dimension_id: cut.dimension.id,
            part_id: cut.part.id, 
            _destroy: cut._destroy
        }))
        setCut(initialCuts)
    },[cutList])


    useEffect(()=>{
        // get the cart data from project
        dispatch((setCart(id)))
    },[project])


    useEffect(()=>{
        const initialParts = partsList.map((part)=>({
                id: part.id, 
                quantity: part.quantity, 
                component_id: part.component.id, 
                _destroy: part._destroy
        }))
        setPl(initialParts)
    },[partsList])

    const handleSave = e =>{
        e.preventDefault() 
        let projectObj = {
            id: id,
            cut_lists_attributes: cut, 
            part_lists_attributes: pl, 
        }
        // console.log(projectObj)
        dispatch((saveProject(projectObj))).then(()=>{
            setNotfs('Cut List Saved')
        })
    }

    const handlePreview = e =>{
        // html2canvas(componentRef.current).then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     const pdf = new jsPDF();
        //     pdf.addImage(imgData, 'PNG', 0, 0);
        //     pdf.save('download.pdf');
        // });

        // let cartObj = {

        // }

        handleOpenModal('preview-cart' )

    }


    return(
        <div className='cart__container'>
            <div className='cart__heading'>
                 Cut List 
            </div>
            <div className='cart__content-container'>
                <CutList cutList={cutList} /> 
                <PartsList partsList={partsList} />
            </div>
            <div className='cart__bottom'>
                <div className='cart__bottom-buttons'>
                    <button onClick={handlePreview}>Preview</button>
                    <button onClick={handleSave}>Save</button>
                    <button>Clear</button>
                </div>
                <div className='cart__bottom-notifs'>{notifs}</div>
            </div>
        </div>
    )

}

export default Cart; 
