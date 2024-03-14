import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createComponent, updateComponent} from '../../store/component'
import { v4 as uuidv4 } from 'uuid';

const NewComponent = ({handleOpenModal, data}) =>{


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [componentNumber, setComponentNumber] = useState('')
    const [formValues, setFormValues] = useState([{id: null, quantity: "", dimension_attributes: {dimension: ""}, part_attributes: {name: ""} }])

    const dispatch = useDispatch() 
    const { parts } = useSelector(state => state.part)

    useEffect(()=>{
        if (data){
            setName(data.name)
            setDescription(data.description)
            setImageUrl(data.image_url)
            setComponentNumber(data.component_number)

            const initialParts = data.component_parts.map((part) =>({
                id: part.id,
                quantity: part.quantity, 
                dimension_attributes: {id: part.dimension.id, dimension: part.dimension.dimension},
                part_attributes: {id: part.part.id, name: part.part.name},
            }))
            
            setFormValues(initialParts)
        }

    },[data])

    // console.log(parts)
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        // let newPartValues = [...formValues.parts_attributes]
        // let newDimensionValues = [...formValues.dimensions_attributes]
        
        // console.log(newFormValues)
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let handleImageChange = (e) =>{
        // console.log(e.target.files)
        if(e.target.files.length !== 0){
            setImageUrl(URL.createObjectURL(e.target?.files[0]))
        }
    }

    let handlePartChange = (i, e) =>{
        let newPartValues = [...formValues]
        
        newPartValues[i].part_attributes[e.target.name] = e.target.value
        // console.log(newPartValues)
        setFormValues(newPartValues);
    }

    let handleDimensionChange = (i, e, j) =>{
        let newPartValues = [...formValues]

        newPartValues[i].dimension_attributes[e.target.name] = e.target.value
        setFormValues(newPartValues);
    }
    
    let addFormFields = () => {
        setFormValues([...formValues, { id: null, quantity: "", dimension_attributes: {dimension: ""}, part_attributes: {name: ""}}])
    }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        //sort array so values that marked for deletion are at the end so indexes don't interfere
        newFormValues.sort((a, b)=>{
            if (a._destroy && !b._destroy) {
                return 1;
            }
            // If b has priority and a doesn't, keep b before a
            else if (!a._destroy && b._destroy) {
                return -1;
            }
            // Otherwise, maintain the order
            else {
                return 0;
            }
        })

        if (newFormValues[i].id) {
            newFormValues[i]._destroy = true;
        } else {
            newFormValues.splice(i, 1);
        }
        setFormValues(newFormValues)
    }
  
    
    let label
    if(data){
        label = 'Edit '
        
    } else{
        label = 'Create '
    }
    

    const handleSubmit = e =>{
        e.preventDefault()
        
        let newObj = {
            name: name,
            description: description, 
            component_number: componentNumber,
            image_url: imageUrl,
            component_parts_attributes: formValues
        }

        if (data){
            newObj.id = data.id
            dispatch((updateComponent(newObj))).then(()=>{
                handleOpenModal()
            })
        } else{
            // console.log('create')
            dispatch((createComponent(newObj))).then(()=>{
                handleOpenModal()
            })
        }
        
        
    }





    return (
        <div className='modal__container'>
            <div className='modal__container-top'>
                <div className='form__label'>{label} Component</div>
            </div>
            <div className='modal__container-mid'>
                <div className='modal__form-container'>
                    <div className='modal__form-container-left'>
                        <div className='modal__form-image-container'>
                            <img src={imageUrl ? imageUrl : "/default.webp"} alt="image" className='modal__form-image' />
                            <input type="file" id="myFileInput" className="custom-file-input" onChange={handleImageChange} /> 
                            <label for="myFileInput" className="custom-file-label">Browse...</label>
                        </div>
                    </div>
                    <div className='modal__form-container-right'>
                        <div className='form__fields'>
                            <label for='name'>Name</label>
                            <input placeholder='Name' name='name' value={name} onChange={e=>setName(e.target.value)}/>
                            <label for='component_number'>Component #</label>
                            <input placeholder='Component Number' name='component_number' value={componentNumber} onChange={e=>setComponentNumber(e.target.value)}/>
                            <label for='description'>Description</label>
                            <textarea placeholder='Description' name='description' value={description} onChange={e=>setDescription(e.target.value)}/>
                            
                            <div className='form__fields-dynamic-container'>
                                <div className='form__fields-dynamic-label'>Component Parts</div>
                                <div className='form__fields'>
                                {formValues.filter((part) => !part._destroy).map((element, index) => (
                                    <div className="form-inline" key={index}>
                                        <div className='form-inline-content'>
                                            <div className='form-inline'>
                                                <div className='form__field-container'>
                                                <label for='quantity'>Quantity</label>
                                                <input 
                                                    type="number" 
                                                    min="0" 
                                                    step="1" 
                                                    placeholder='Quantity' 
                                                    name="quantity" 
                                                    // size={2} 
                                                    value={element.quantity || ""} 
                                                    onChange={e => handleChange(index, e)} 
                                                />
                                            </div>
                                            <div className='form__field-container'>
                                                <label for='Dimension'>Dimension</label>
                                                <input 
                                                    type="text" 
                                                    placeholder='Dimension' 
                                                    name="dimension" 
                                                    size={15} 
                                                    value={element.dimension_attributes.dimension || ""} 
                                                    onChange={e => handleDimensionChange(index, e)} 
                                                />
                                            </div>
                                            <div className='form__field-container'>
                                                <label for='name'>Part Name</label>
                                                <input 
                                                    list='partslist' 
                                                    type="text" 
                                                    placeholder='Part Name' 
                                                    name="name" 
                                                    size={15} 
                                                    value={element.part_attributes.name || ""} 
                                                    onChange={e => handlePartChange(index, e)} 
                                                />
                                                <datalist id='partslist'>
                                                    {parts.map(part=>(
                                                        <option value={part.name}>{part.name}</option>
                                                    ))}
                                                </datalist> 
                                            </div>
                                            </div>
                                        </div>
                                        <div className='form-inline-button'>
                                            {
                                                index ? 
                                                <div className='form__fields-dynamic-button'><button type="button"  className="button remove" onClick={() => removeFormFields(index)}>X</button></div> 
                                                : null
                                            }
                                        </div>


                                    </div>
                                ))}
                                </div>
                                <div className='form__fields-dynamic-button'><button type="button" onClick={() => addFormFields()}>Add Part</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal__container-bottom'>
                
                <div className='modal__form-button'><button onClick={handleSubmit}>{label}</button></div>
                <div className='modal__form-button'><button onClick={handleOpenModal}>Cancel</button></div>
                
            </div>
        </div>
    )
}

export default NewComponent


{/* <select>
{parts.map(part=>(
    <option value={part.name}>{part.name}</option>
))}
</select>  */}





            
{/* <div className='form__label'>{label} Component</div>
<div className='form__fields'>
    <input placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
    <textarea placeholder='Description' value={description} onChange={e=>setDescription(e.target.value)}/>
    <input placeholder='ImageUrl' value={imageUrl} onChange={e=>setImageUrl(e.target.value)}/>
    <input placeholder='Component Number' value={componentNumber} onChange={e=>setComponentNumber(e.target.value)}/>

    {formValues.filter((part) => !part._destroy).map((element, index) => (
        <div className="form-inline" key={index}>
            <input 
                type="number" 
                min="0" 
                step="1" 
                placeholder='Quantity' 
                name="quantity" 
                size={8} 
                value={element.quantity || ""} 
                onChange={e => handleChange(index, e)} 
            />
            <input 
                type="text" 
                placeholder='Dimension' 
                name="dimension" 
                size={15} 
                value={element.dimension_attributes.dimension || ""} 
                onChange={e => handleDimensionChange(index, e)} 
            />
            <input 
                list='partslist' 
                type="text" 
                placeholder='Part Name' 
                name="name" 
                size={15} 
                value={element.part_attributes.name || ""} 
                onChange={e => handlePartChange(index, e)} 
            />
            <datalist id='partslist'>
                {parts.map(part=>(
                    <option value={part.name}>{part.name}</option>
                ))}
            </datalist> 

            {
                index ? 
                <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
            }
        </div>
    ))}
</div>
<button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
<div onClick={handleSubmit} className='form__submit'><button>{label}</button></div>
<button onClick={handleOpenModal}>Cancel</button> */}