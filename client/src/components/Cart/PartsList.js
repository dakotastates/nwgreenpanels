
const PartsList = ({partsList}) =>{

    
    
    return(
        <div className='cart__parts-list'>
            Parts List
            {partsList.map((part, index)=>(
                <div className='part'>
                    {part.count}@{part.name}
                </div>
            ))}

        </div>
    )
}

export default PartsList