import {useEffect, useState} from 'react'
import './Components.css';
import {useDispatch, useSelector} from 'react-redux'
import {getComponents} from '../../store/component'
import Component from './Component';


const Components = () =>{
    const dispatch = useDispatch() 
    const { components } = useSelector(state => state.component)

    useEffect(()=>{
        dispatch(getComponents()).then(()=>{
            
        })
    },[])

    return(
        <div className='components__container'> 
            <div className='component__container'>
            {components.map((component) =>(
                <div className='component' key={component.id}>
                    <Component component={component} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Components