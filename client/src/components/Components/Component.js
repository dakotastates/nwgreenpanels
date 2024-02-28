import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, addPartsToCart, addCutToCart, setCount} from '../../store/cart'
import {deleteComponent, countComponent} from '../../store/component'

const Component = ({component, handleOpenModal}) =>{

    const dispatch = useDispatch() 
    // const {count, setCount} = useState(component.count ? component.count : 0)
    // const { count } = useSelector(state => state.cart)
    const [isLoading, setIsLoading] = useState(false)
        useEffect(()=>{
        setIsLoading(true)
        const dataObj ={
            component: component, 
            count: 0
        }
        dispatch((countComponent(dataObj))).then(()=>{
            setIsLoading(false)
            // console.log(component.count)
        })
    },[])
    
    // console.log(component)


    // useEffect(()=>{
    //     count = component.count 
        
    //     if (!component.count){
    //         setIsLoading(true)
    //     }
    //     console.log('loading', isLoading, count)
    //     // setLoaded(false)
    // },[component.count])

    // if(component.count){
    //     count = component.count
    //     console.log('cc', count)
    // }


    // useEffect(()=>{
    //     console.log('count', count)
    // },[component.count])
    




    if(!isLoading){
        let count 
        
        if (component.count){
            count = component.count
        } else {
            count = 0
        }

        const handleClick = (data)=>{
            // let count = data.count
            count += 1
            // console.log(count, data.name)
            dispatch((addToCart(data))).then(()=>{
                data.component_parts.map(part =>{
                    dispatch((addCutToCart(part)))
                })
            }).then(()=>{
                let partsObj = {
                    count: count, 
                    name: data.name, 
                    component: data
                }
                dispatch((addPartsToCart(partsObj)))
            })
        }

        const handleDelete = () =>{
            dispatch((deleteComponent(component.id)))
        }

        return(
            <div className='component__icon' >
                <div className='component__icon-top'>
                    <div className='component__btn' onClick={() =>handleOpenModal('show-component', component)}>i</div>
                    <div className='component__btn' onClick={handleDelete}>X</div>
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
}

export default Component