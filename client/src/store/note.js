import { createSlice } from '@reduxjs/toolkit' 

// Slice
const slice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
  },
  reducers: {

    createNoteSuccess: (state, action) =>  {
        // state.notes = action.payload;

    },


  },
}); 
export default slice.reducer 

// Actions
const { createNoteSuccess } = slice.actions

export const createNote = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(createNoteSuccess());
  } catch (e) {
    return console.error(e.message);
  }
}


