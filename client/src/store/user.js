import { createSlice } from '@reduxjs/toolkit' 

const data = {
    id: 1, 
    username: 'user 1', 
    email: 'user1@test.com'
}

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {

    logoutSuccess: (state, action) =>  {
        state.user = null;
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    },

    loginSuccess: (state, action) => {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload))
    },


  },
}); 
export default slice.reducer 

// Actions
const { loginSuccess, logoutSuccess, createUserSuccess, getUserSuccess, updateUserSuccess } = slice.actions

export const createUser = (user) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(createUserSuccess(user));
  } catch (e) {
    return console.error(e.message);
  }
}
export const getUser = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(getUserSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
} 


export const updateUser = (data) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(updateUserSuccess(data))
  } catch (e) {
    return console.error(e.message);
  }
}  

export const login = (user) => async dispatch => {
  const configObj ={
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    },
    body: JSON.stringify({user}),
  } 

    try {
        
      // const res = await api.post('/api/auth/login/', { username, password })
      const res = await fetch("http://localhost:3000/api/v1/login", configObj);
      const json = await res.json(); 
      
      if (json.message){
        throw new Error(json.message)
      }
      localStorage.setItem("token", json.jwt);
      dispatch(loginSuccess(json.user));
    } catch (e) {
      return console.error(e.message);
    }
  }

export const logout = () => async dispatch => {
    try {
      // const res = await api.post('/api/auth/logout/')
      return dispatch(logoutSuccess())
    } catch (e) {
      return console.error(e.message);
    }
}

