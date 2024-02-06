
const ShowComponent = ({handleOpenModal, data})=>{

    const handleEdit = ()=>{
        console.log('edit')
    }

    return(
        <div>
            <h1>{data.name}</h1>
            <div>{data.description}</div>
            {data.component_parts.map((part)=>(
                <div>
                    quantity: {part.quantity}
                    dimension: {part.dimension.dimension}
                    part: {part.part.name}
                </div>
            ))}
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleOpenModal}>Close</button>
        </div>
    )
}

export default ShowComponent