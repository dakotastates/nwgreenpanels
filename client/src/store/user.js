import { createSlice } from '@reduxjs/toolkit' 

const data = {
    id: 1, 
    username: 'user 1', 
    email: 'user1@test.com'
}

let API
// console.log('vars', process.env.REACT_APP_API_KEY_DEV)
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  API = process.env.REACT_APP_API_KEY_DEV
} else {
    // production code
  API = process.env.REACT_APP_API_KEY_PROD
  console.log('PROD', process.env.NODE_ENV)
}

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
    error: ''
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

    createUserSuccess: (state, action) =>{
      // console.log(action.paylaod)
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },

    loginError: (state, action) => {
      // console.log(action.payload)
      state.error = action.payload;
  }, 




  },
}); 
export default slice.reducer 

// Actions
const { loginSuccess, logoutSuccess, createUserSuccess, getUserSuccess, updateUserSuccess, loginError } = slice.actions

export const createUser = (user) => async dispatch => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({user}),
  };
  try {
    const res = await fetch(`${API}/users`, configObj);
    const json = await res.json();

    dispatch(createUserSuccess(json));
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
      const res = await fetch(`${API}/login`, configObj);
      const json = await res.json(); 
      
      if (json.message){
        throw new Error(json.message)
      }
      localStorage.setItem("token", json.jwt);
      dispatch(loginSuccess(json.user));
    } catch (e) {
      // return console.error(e.message);
      dispatch(loginError(e.message));
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

