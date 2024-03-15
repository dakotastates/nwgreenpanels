import { createSlice } from '@reduxjs/toolkit' 

// Slice
const slice = createSlice({
  name: 'note',
  initialState: {
    notes: [],
  },
  reducers: {
    setNotesSuccess: (state, action) =>  {
      console.log(action.payload)
      state.notes = action.payload
    },

    createNoteSuccess: (state, action) =>  {
      // console.log(action.payload)
      state.notes = [...state.notes, action.payload.note]
    },

    updateNoteSuccess: (state, action) =>  {
      const note = state.notes.find((note) => note.id === action.payload.id)
  
      if (note) {
        note.title = action.payload.title
        note.note = action.payload.note
      }

  },

  deleteNoteSuccess: (state, action) =>  {
      
    const notes = state.notes.filter((note) => note.id !== action.payload)

    state.notes = notes

  },


  },
}); 
export default slice.reducer 

// Actions
const { setNotesSuccess, createNoteSuccess, updateNoteSuccess, deleteNoteSuccess } = slice.actions

export const setNotes = (data) => async dispatch => {
  // console.log('set notes', data)
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(setNotesSuccess(data));
  } catch (e) {
    return console.error(e.message);
  }
}

export const createNote = (note) => async dispatch => {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({note}),
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/notes", configObj);
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch(createNoteSuccess(json));
  } catch (e) {
    return console.error(e.message);
  }
}

export const updateNote = (note) => async dispatch => {
  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({note}),
  };

  try {
    const res = await fetch(`http://localhost:3000/api/v1/notes/${note.id}`, configObj);
    const json = await res.json();
    
    if (json.error) {
      
      throw new Error(json.error + " " + json.message);
    }
    dispatch(updateNoteSuccess(json));
  } catch (e) {
    return console.error(e.message);
  }
}

export const deleteNote = (id) => async dispatch => {

  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  try {

    const res = await fetch(`http://localhost:3000/api/v1/notes/${id}`, configObj);
    const json = await res.json();
    
    return dispatch(deleteNoteSuccess(json.note.id)) 
  } catch (e) {
    return console.error(e.message);
  }
}


