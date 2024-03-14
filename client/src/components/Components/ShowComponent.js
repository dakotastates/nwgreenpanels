
const ShowComponent = ({handleOpenModal, data})=>{

    const handleEdit = ()=>{
        console.log('edit')
    }

    return(
        <div className='modal__container'>
            <div className='modal__container-top'>
                <div className='form__label'>{data.name}</div>
            </div>
            <div className='modal__container-mid'>
                <div className='modal__form-container'> 
                    <div className='modal__form-container-left'>
                        <div className='modal__form-image-container'>
                            <img src={data.imageUrl ? data.imageUrl : "/default.webp"} alt="image" className='modal__form-image' />
                        </div>
                    </div>
                    <div className='modal__form-container-right'>
                        <div className="component__show-container">
                            <div className="component__show-data">
                                <div>{data.description}</div>
                            </div>
                            <div className="component__show-parts-container">
                            {data.component_parts.map((part)=>(
                                <div className="component__show-part">
                                    <div>{part.quantity}@</div>
                                    <div>{part.dimension.dimension}-</div>
                                    <div>{part.part.name}</div>
                                </div>
                            ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='modal__container-bottom'>
                <div className='modal__form-button'><button onClick={handleEdit}>Edit</button></div>
                <div className='modal__form-button'><button onClick={handleOpenModal}>Close</button></div>
            </div>
        </div>
    )
}

export default ShowComponent

{/* <h1>{data.name}</h1>
<div>{data.description}</div>
{data.component_parts.map((part)=>(
    <div>
        quantity: {part.quantity}
        dimension: {part.dimension.dimension}
        part: {part.part.name}
    </div>
))}
<button onClick={handleEdit}>Edit</button>
<button onClick={handleOpenModal}>Close</button> */}