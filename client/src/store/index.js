import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from './user'
import component from './component'
import cart from './cart'



const reducer = combineReducers({
    user, 
    component,
    cart

})
const store = configureStore({
  reducer,
})
export default store;