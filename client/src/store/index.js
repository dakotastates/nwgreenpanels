import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './user'
import component from './component'
import cart from './cart'
import project from './project'
import part from './part'
import note from './note'



const reducer = combineReducers({
    user, 
    component,
    cart,
    project, 
    part,
    note

})
const store = configureStore({
  reducer,
})
export default store;