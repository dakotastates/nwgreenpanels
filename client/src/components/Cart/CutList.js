
const CutList = ({cutList}) =>{

    return(
        <div className='cart__cut-list'>
            Cut List
            {cutList?.map((cut, index)=>(
                <div>
                    {cut.quantity}@{cut.dimensions}-{cut.name}
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