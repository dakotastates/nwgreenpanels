import { createSlice } from '@reduxjs/toolkit' 



// Slice
const slice = createSlice({
  name: 'part',
  initialState: {
    parts: []
  },
  reducers: {

    getPartsSuccess: (state, action) =>  {
      state.parts = action.payload
    },

    createPartSuccess: (state, action) => {
        state.part = [...state.part, action.payload]
    },

    removePartSuccess: (state, action) => {
        const parts = state.parts.filter((part) => part.id !== action.payload)
  
        state.parts = parts
    }

  },
}); 
export default slice.reducer 

// Actions
const { createPartSuccess, removePartSuccess, getPartsSuccess } = slice.actions



export const getParts = () => async dispatch => {
    
  const configObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/parts", configObj);
    const json = await res.json();
    
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(getPartsSuccess(json))
  } catch (e) {
    return console.error(e.message);
  }
}



export const createPart = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(createPartSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
}

export const removePart = () => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(removePartSuccess());
    } catch (e) {
      return console.error(e.message);
    }
}
