import { createSlice } from '@reduxjs/toolkit' 

const data = [
    {id: 1, 
        name: 'Panel',
        parts: [
          {id: 1,
            quantity: 2,
            dimensions: '93"',
            name: 'Wood'
          },
          {id: 2,
            quantity: 2,
            dimensions: '48"',
            name: 'Wood'
          },
          {id: 3,
            quantity: 2,
            dimensions: '45"',
            name: 'Wood'
          },
          {id: 4,
            quantity: 3,
            dimensions: '30 3/4 T x 45 3/4 w"',
            name: 'Glazing Insert'
          },
          
        ]
    },
    {id: 2, 
        name: 'Half Panel',
        parts: [
          {id: 5,
            quantity: 4,
            dimensions: '25"',
            name: 'wood'
          },
          {id: 1,
            quantity: 2,
            dimensions: '93"',
            name: 'Wood'
          },
        ]
    },
    {id: 3, 
      name: 'Cable',
      parts: [
        {id: 1,
          quantity: 2,
          name: 'part 1'
        }
      ]
    },
    {id: 4, 
      name: 'Truss',
      parts: [
        {id: 1,
          quantity: 2,
          name: 'part 1'
        }
      ]
    },
    {id: 5, 
      name: 'Cap',
      parts: [
        {id: 1,
          quantity: 2,
          name: 'part 1'
        }
      ]
    },
    {id: 6, 
      name: 'Door',
      parts: [
        {id: 1,
          quantity: 2,
          name: 'part 1'
        }
      ]
    },
    {id: 7, 
      name: 'Window',
      parts: [
        {id: 1,
          quantity: 2,
          name: 'part 1'
        }
      ]
    },
    {id: 8, 
      name: 'Panel2222',
      parts: [
        {id: 1,
          quantity: 2,
          dimensions: '93"',
          name: 'Wood'
        },
        {id: 2,
          quantity: 2,
          dimensions: '48"',
          name: 'Wood'
        },
        {id: 3,
          quantity: 2,
          dimensions: '45"',
          name: 'Wood'
        },
        {id: 4,
          quantity: 3,
          dimensions: '30 3/4 T x 45 3/4 w"',
          name: 'Glazing Insert'
        },
        
      ]
  },
  {id: 9, 
    name: 'Panel99999',
    parts: [
      {id: 1,
        quantity: 2,
        dimensions: '93"',
        name: 'Wood'
      },
      {id: 2,
        quantity: 2,
        dimensions: '48"',
        name: 'Wood'
      },
      {id: 3,
        quantity: 2,
        dimensions: '45"',
        name: 'Wood'
      },
      {id: 4,
        quantity: 3,
        dimensions: '30 3/4 T x 45 3/4 w"',
        name: 'Glazing Insert'
      },
      
    ]
},
{id: 10, 
  name: 'Panel0000',
  parts: [
    {id: 1,
      quantity: 2,
      dimensions: '93"',
      name: 'Wood'
    },
    {id: 2,
      quantity: 2,
      dimensions: '48"',
      name: 'Wood'
    },
    {id: 3,
      quantity: 2,
      dimensions: '45"',
      name: 'Wood'
    },
    {id: 4,
      quantity: 3,
      dimensions: '30 3/4 T x 45 3/4 w"',
      name: 'Glazing Insert'
    },
    
  ]
},
{id: 11, 
  name: 'Panel111111',
  parts: [
    {id: 1,
      quantity: 2,
      dimensions: '93"',
      name: 'Wood'
    },
    {id: 2,
      quantity: 2,
      dimensions: '48"',
      name: 'Wood'
    },
    {id: 3,
      quantity: 2,
      dimensions: '45"',
      name: 'Wood'
    },
    {id: 4,
      quantity: 3,
      dimensions: '30 3/4 T x 45 3/4 w"',
      name: 'Glazing Insert'
    },
    
  ]
},
]



// const initialComponent = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

// Slice
const slice = createSlice({
  name: 'component',
  initialState: {
    components: [], 
  },
  reducers: {

    getComponentSuccess: (state, action) =>  {
        state.components = action.payload;

    },

    createComponentSuccess: (state, action) =>  {
      // debugger
      state.components = [...state.components, action.payload]
      // state.components = action.payload;

    },

    deleteComponentSuccess: (state, action) =>  {
      
      const components = state.components.filter((component) => component.id !== action.payload)
  
      state.components = components

    },

    updateComponentSuccess: (state, action) =>  {
      const component = state.components.find((component) => component.id === action.payload.id)
  
      if (component) {
        
        component.name = action.payload.name
        component.description = action.payload.description
        component.component_parts = action.payload.component_parts

      }
    },

    countComponentSuccess: (state, action) =>  {
      
      const component = state.components.find((component) => component.id === action.payload.component.id)
      // console.log(action.payload.component.id)
      if (component) {
        
        component.count = action.payload.count
        // console.log('countC',component.count)
        
      }
    },




  },
}); 
export default slice.reducer 

// Actions
const { getComponentSuccess, createComponentSuccess, deleteComponentSuccess, updateComponentSuccess, countComponentSuccess } = slice.actions

export const getComponents = () => async dispatch => {
  const configObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  };

  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    const res = await fetch("http://localhost:3000/api/v1/components")
    const json = await res.json();
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch(getComponentSuccess(json));
  } catch (e) {
    return console.error(e.message);
  }
}

export const createComponent = (component) => async dispatch => {
  
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({component}),
  };
  try {
    // debugger
    const res = await fetch("http://localhost:3000/api/v1/components", configObj);
    const json = await res.json();
    // console.log(json)
    if (json.error) {
      throw new Error(json.error + " " + json.message);
    }
    dispatch(createComponentSuccess(json));
  } catch (e) {
    return console.error(e.message);
  }
}

export const deleteComponent = (id) => async dispatch => {

  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
  };
  try {

    const res = await fetch(`http://localhost:3000/api/v1/components/${id}`, configObj);
    const json = await res.json();
    
    return dispatch(deleteComponentSuccess(json.component.id))
  } catch (e) {
    return console.error(e.message);
  }
}

export const updateComponent = (component) => async dispatch => { 
  console.log(component)
  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    },
    body: JSON.stringify({component}),
  };
  
  try {
    const res = await fetch(`http://localhost:3000/api/v1/components/${component.id}`, configObj);
    const json = await res.json();
    
    if (json.error) {
      
      throw new Error(json.error + " " + json.message);
    }
    return dispatch(updateComponentSuccess(json))
  } catch (e) {
    return console.error(e.message);
  }
}


export const countComponent = (data) => async dispatch => {
  
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(countComponentSuccess(data));
  } catch (e) {
    return console.error(e.message);
  }
}