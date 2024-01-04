import { createSlice } from '@reduxjs/toolkit' 




// const initialComponent = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

// Slice
const slice = createSlice({
  name: 'component',
  initialState: {
    cart: [],
    cutList: [],
    partsList: []
  },
  reducers: {

    getCartSuccess: (state, action) =>  {
        state.cart = action.payload;

    },

    addToCartSuccess: (state, action) => {
        state.cart = [...state.cart, action.payload]
    },

    addPartsToCartSuccess: (state, action) => {
      // Array of number of used components (4 walls, 2 Truss)
      // Check if object is in array, if it is update existing
      const part = state.partsList.find((part) => part.name === action.payload.name)
      
            if (part) {
              part.count = action.payload.count
            } else{
              state.partsList = [...state.partsList, action.payload]
            }
    },

    addCutToCartSuccess: (state, action) => {
      // Array of all the cuts required for a component (4 2x4's for 1 wall)
      const part = state.cutList.find((part) => part.id === action.payload.id)
      if (part) {
        // let quantity = part.quantity + action.payload.quantity
        part.quantity += action.payload.quantity
        // part.count = action.payload.count
      } else{
        state.cutList = [...state.cutList, action.payload]
      }

      // state.cutList = [...state.cutList, action.payload]
  },


    removeFromCartSuccess: (state, action) => {
        const cart = state.cart.filter((component) => component.id !== action.payload)
  
        state.cart = cart
    }

  },
}); 
export default slice.reducer 

// Actions
const { getCartSuccess, addToCartSuccess, addPartsToCartSuccess, addCutToCartSuccess, removeFromCartSuccess } = slice.actions

export const getCart = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(getCartSuccess());
  } catch (e) {
    return console.error(e.message);
  }
}

export const addToCart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(addToCartSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
  }

  export const addPartsToCart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(addPartsToCartSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
  }

  export const addCutToCart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(addCutToCartSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
  }

export const removeToCart = () => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(removeFromCartSuccess());
    } catch (e) {
      return console.error(e.message);
    }
}
