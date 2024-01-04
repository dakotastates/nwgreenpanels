
const CutList = ({cutList}) =>{

    return(
        <div className='cart__cut-list'>
            <div className='cart__list-label'>Cut List</div>
            {cutList?.map((cut, index)=>(
                <div className='cart__list-items'>
                    <div>{cut.quantity}@</div>
                    <div>{cut.dimensions}</div>
                    <div>-{cut.name}</div>
                    
                </div>
            ))}

        </div>
    )
}

export default CutList

// {cart?.map((component,index)=> (
//     <div key={component.id}>
//         {component.name}
//     </div> 
// ))}