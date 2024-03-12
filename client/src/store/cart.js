import { createSlice } from '@reduxjs/toolkit' 




// const initialComponent = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

// Slice
const slice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cutList: [],
    partsList: [], 
  },
  reducers: {

    getCartSuccess: (state, action) =>  {
        state.cart = action.payload;

    },

    addToCartSuccess: (state, action) => {
        state.cart = [...state.cart, action.payload]
    },

    addComponentToCartSuccess: (state, action) => {
      // Array of number of used components (4 walls, 2 Truss)
      // Check if object is in array, if it is update existing
      // console.log(action.payload)
      // state.partsList = [...state.partsList, action.payload]
      const parts = state.partsList.filter((part) => part.component.id == action.payload.id)

      let obj = {
        quantity: parts.length + 1, 
        component: action.payload
      }
      // console.log(obj)
      const part = state.partsList.find((part) => part.component.id === action.payload.id)
            if (part) {
              if(part._destroy){
                part._destroy = false
                part.quantity = 1
              } else{
                part.quantity += 1
              }
              // part._destroy = false
              // part.quantity = action.payload.quantity
              
              // console.log(part.quantity)
            } else{
              state.partsList = [...state.partsList, obj]
            }
    },

    decrementComponentsInCartSuccess: (state, action) => {
      // Array of number of used components (4 walls, 2 Truss)
      // Check if object is in array, if it is update existing
      // console.log(action.payload)
      // state.partsList = [...state.partsList, action.payload]
      const parts = state.partsList.filter((part) => part.component.id == action.payload.id)

      // let obj = {
      //   quantity: parts.length - 1, 
      //   component: action.payload
      // }
      // console.log(obj)
      const part = state.partsList.find((part) => part.component.id === action.payload.id)
            if (part) {
              
              // part.quantity = action.payload.quantity
              part.quantity -= 1
              // console.log(part.quantity)
            } else{
              // state.partsList = [...state.partsList, obj]
            }
    },

    addCutToCartSuccess: (state, action) => {
      // console.log('reducer',action.payload)
      // Array of all the cuts required for a component (4 2x4's for 1 wall)
      const part = state.cutList.find((part) => (part.part.id === action.payload.part.id) && (part.dimension.id === action.payload.dimension.id))
      // debugger
      if (part) {

        if(part._destroy){
          // console.log('reducer',action.payload)
          part.quantity = action.payload.quantity
          part._destroy = false 
          
        } else{
          part.quantity += action.payload.quantity
        }
        // let quantity = part.quantity + action.payload.quantity
        // part.quantity += action.payload.quantity
        // part.count = action.payload.count
      } else{
        state.cutList = [...state.cutList, action.payload]
      }

      // state.cutList = [...state.cutList, action.payload]
    },

    updateCutinCartSuccess: (state, action) => {
      const part = state.cutList.find((part) => (part.part.id === action.payload.part.id) && (part.dimension.id === action.payload.dimension.id))
      // debugger
      // console.log(action.payload)
      if (part) {
        // let quantity = part.quantity + action.payload.quantity
        part.quantity -= parseInt(action.payload.quantity)
        // part.count = action.payload.count
      } 
      // const cuts = state.cutList.filter((cut) => cut.id !== action.payload)
      // state.cutList = cuts

    },


    setCartSuccess: (state, action) => {
      // console.log('project', action.payload)
          state.cutList = action.payload.cut_lists
          state.partsList = action.payload.part_lists
    }, 


    removeComponentFromCartSuccess: (state, action) => {
      // Remove component from Parts List
      const part = state.partsList.find((part) => part.component.id === action.payload.id)

      if (part){
        part._destroy = true
      }
      // const components = state.partsList.filter((part) => part.component.id !== action.payload.id)
      // console.log(action.payload)
      // state.partsList = components
    }, 

    removeCutFromCartSuccess: (state, action) => {
      // Remove cuts from cutList
      // check if the cut matches the payload 
      const part = state.cutList.find((part) => (part.part.id === action.payload.part.id) && (part.dimension.id === action.payload.dimension.id))
      // console.log(action.payload)
      if(part){
        if(part.quantity == action.payload.quantity){
          // const cuts = state.cutList.filter((cut) => (cut.part.id != part.part.id))
          // console.log('cuts', part.id)
          part._destroy = true
          // state.cutList = cuts
        } else{
          
          part.quantity -= action.payload.quantity
          // console.log('not same', part.quantity)
        }
      }
      // const cuts = state.cutList.filter((cut) => (cut.part.id !== action.payload.part.id) && (cut.dimension.id !== action.payload.dimension.id))
      
      // state.cutList = cuts
    }, 



  },
}); 
export default slice.reducer 

// Actions
const { getCartSuccess, addToCartSuccess, addComponentToCartSuccess, decrementComponentsInCartSuccess, addCutToCartSuccess, removeComponentFromCartSuccess, setCartSuccess, updateCutinCartSuccess, removeCutFromCartSuccess } = slice.actions

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

  export const addComponentToCart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(addComponentToCartSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
  }

  export const decrementComponentsInCart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(decrementComponentsInCartSuccess(data));
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

  export const updateCutInCart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(updateCutinCartSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
  }

  export const removeComponentFromCart = (data) => async dispatch => {
      try {
        // const res = await api.post('/api/auth/login/', { username, password })
        dispatch(removeComponentFromCartSuccess(data));
      } catch (e) {
        return console.error(e.message);
      }
  }

  export const removeCutFromCart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(removeCutFromCartSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
}



export const setCart = (id) => async dispatch => {
  // debugger
  // console.log(list)
  const configObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    const res = await fetch(`http://localhost:3000/api/v1/projects/${id}`, configObj);    const json = await res.json();
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    dispatch(setCartSuccess(json));
  } catch (e) {
    return console.error(e.message);
  }
}
