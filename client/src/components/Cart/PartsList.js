
const PartsList = ({partsList}) =>{

    
    
    return(
        <div className='cart__parts-list'>
            <div className='cart__list-label'>Parts List</div>
            {partsList.map((part, index)=>(
                <div className='cart__list-items'>
                    <div>{part.count}@</div>
                    <div>{part.name}</div>
                    
                </div>
            ))}

        </div>
    )
}

export default PartsList