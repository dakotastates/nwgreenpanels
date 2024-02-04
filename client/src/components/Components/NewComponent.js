import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createComponent, updateComponent} from '../../store/component'

const NewComponent = ({handleOpenModal, data}) =>{


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [componentNumber, setComponentNumber] = useState('')
    const [formValues, setFormValues] = useState([{ quantity: "", dimension_attributes: {dimension: ""}, part_attributes: {name: ""} }])

    const dispatch = useDispatch() 
    const { parts } = useSelector(state => state.part)

    // console.log(parts)
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        // let newPartValues = [...formValues.parts_attributes]
        // let newDimensionValues = [...formValues.dimensions_attributes]
        
        // console.log(newFormValues)
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
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
        setFormValues([...formValues, { quantity: "", dimensions_attributes: {dimension: ""}, parts_attributes: {name: ""}}])
    }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
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
            component_parts_attributes: formValues
        }
        
        dispatch((createComponent(newObj))).then(()=>{
            handleOpenModal()
        })
        
    }





    return (
        <div className='form__container'>
            
            <div className='form__label'>{label}</div>
            <div className='form__fields'>
                <input placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
                <textarea placeholder='Description' value={description} onChange={e=>setDescription(e.target.value)}/>

                {formValues.map((element, index) => (
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
            <button onClick={handleOpenModal}>Cancel</button>
        </div>
    )
}

export default NewComponent


{/* <select>
{parts.map(part=>(
    <option value={part.name}>{part.name}</option>
))}
</select>  */}