import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './user'
import component from './component'
import cart from './cart'
import project from './project'
import part from './part'



const reducer = combineReducers({
    user, 
    component,
    cart,
    project, 
    part

})
const store = configureStore({
  reducer,
})
export default store;