import {useEffect} from 'react'

const CutList = ({cutList, preview}) =>{
    
    // useEffect(()=>{

    // },[cutList])

    
        // debugger
        return(
            <div className='cart__cut-list'>
                <div className='cart__list-label'>Cut List</div>
                <div className='cart__cut-list-container'>
                    {cutList.filter((cut) => !cut._destroy).map((cut, index)=>(
                        <div className={preview? 'cart__list-items preview' : 'cart__list-items'}>
                            
                            <div className='cart__list-item-quantity'>{cut.quantity}</div>
                            <div className='at'>@</div>
                            <div className='cart__list-item-unit'>{cut.dimension.dimension}</div>
                            <div className='dash'>-</div>
                            <div className='cart__list-item-part'>{cut.part.name}</div>
                            
                        </div>
                    ))}
                </div>
    
            </div>
        )


    

}

export default CutList

// {cart?.map((component,index)=> (
//     <div key={component.id}>
//         {component.name}
//     </div> 
// ))}