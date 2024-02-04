import { createSlice } from '@reduxjs/toolkit' 

const projectData = [
    {id: 1, 
        title: 'Greenhouse 1',
        description: 'This will be a greenhouse.',
        uuid: 2343432,
        notes: [
            {
                id: 1,
                title: 'note 1',
                note: 'this is note 1'
            }, 
            {
                id: 2,
                title: 'note 2', 
                note: 'this is note 2'
            }
        ]
    },
    {id: 2, 
        title: 'Greenhouse 2',
        description: 'This will be a greenhouse.',
        uuid: 232323243432,
        notes: [
            {
                id: 3,
                title: 'note 1',
                note: 'this is note 1'
            }, 
            {
                id: 4,
                title: 'note 2', 
                note: 'this is note 2'
            }
        ]
    },
    {id: 3, 
        title: 'Greenhouse 3',
        description: 'This will be a greenhouse.',
        uuid: 234334343432,
        notes: [
            {
                id: 5,
                title: 'note 1',
                note: 'this is note 1'
            }, 
            {
                id: 6,
                title: 'note 2', 
                note: 'this is note 2'
            }
        ]
    },
    {id: 4, 
        title: 'Greenhouse 4',
        description: 'This will be a greenhouse.',
        uuid: 2323232343432,
        notes: [
            {
                id: 7,
                title: 'note 1',
                note: 'this is note 1'
            }, 
            {
                id: 8,
                title: 'note 2', 
                note: 'this is note 2'
            }
        ]
    },

    {id: 5, 
        title: 'Greenhouse 5',
        description: 'This will be a greenhouse.',
        uuid: 234340909032,
        notes: [
            {
                id: 9,
                title: 'note 1',
                note: 'this is note 1'
            }, 
            {
                id: 10,
                title: 'note 2', 
                note: 'this is note 2'
            }
        ]
    },
    {id: 6, 
        title: 'Greenhouse 6',
        description: 'This will be a greenhouse.',
        uuid: 234323232323432,
        notes: [
            {
                id: 11,
                title: 'note 1',
                note: 'this is note 1'
            }, 
            {
                id: 12,
                title: 'note 2', 
                note: 'this is note 2'
            }
        ]
    },

]

// Slice
const slice = createSlice({
  name: 'project',
  initialState: {
    projects: [],
    project: {}, 

  },
  reducers: {

    getProjectsSuccess: (state, action) =>  {
        state.projects = action.payload;

    },
    getProjectSuccess: (state, action) =>  {
        // console.log(action.payload)
        // const project = state.projects.find((project) => project.uuid === action.payload)
        // debugger
        state.project = action.payload


    },

    createProjectSuccess: (state, action) => {
        state.projects = [...state.projects, action.payload]
    },

    saveProjectSuccess: (state, action) => {
        const project = state.projects.find((project) => project.id === action.payload.id)
        
        // console.log(action.payload)
        if(project){
          project.cutList = action.payload.cutlist
          project.partsList = action.payload.partsList
        }
        // state.projects = [...state.projects, action.payload]
    },
    



    removeProjectSuccess: (state, action) => {
        const projects = state.project.filter((project) => project.id !== action.payload)
  
        state.projects = projects
    }

  },
}); 
export default slice.reducer 

// Actions
const { getProjectsSuccess, saveProjectSuccess, getProjectSuccess, createProjectSuccess, removeProjectSuccess } = slice.actions

export const getProjects = () => async dispatch => {
  const configObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    const res = await fetch("http://localhost:3000/api/v1/projects", configObj);
    const json = await res.json();
    if (json.error) {
      // debugger
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(getProjectsSuccess(json))
  } catch (e) {
    return console.error(e.message);
  }
}


export const getProject = (id) => async dispatch => {
  const configObj = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

    try {
      const res = await fetch(`http://localhost:3000/api/v1/projects/${id}`, configObj);
      const json = await res.json();
      if (json.error) {
        
        throw new Error(json.error + " " + json.message);
      }
      dispatch(getProjectSuccess(json));
    } catch (e) {
      return console.error(e.message);
    }
  }

  export const saveProject = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(saveProjectSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
  }

export const createProject = (data) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(createProjectSuccess(data));
    } catch (e) {
      return console.error(e.message);
    }
  }

export const removeProject = () => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(removeProjectSuccess());
    } catch (e) {
      return console.error(e.message);
    }
}
