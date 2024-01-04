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
]



// const initialComponent = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

// Slice
const slice = createSlice({
  name: 'component',
  initialState: {
    components: []
  },
  reducers: {

    getComponentSuccess: (state, action) =>  {
        state.components = action.payload;

    },




  },
}); 
export default slice.reducer 

// Actions
const { getComponentSuccess } = slice.actions

export const getComponents = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(getComponentSuccess(data));
  } catch (e) {
    return console.error(e.message);
  }
}
