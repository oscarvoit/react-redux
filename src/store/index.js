import { createStore } from 'redux'

const INITIAL_STATE = {
  tasks: [
    'estudar inglês'
  ]
}

// REDUCER
function todo(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload // poderia ser action.nomeDaTarefa
        ]
      }
    case 'REMOVE_TASK':
      const newState = state.tasks.filter(task => task !== action.payload)
      return {
        tasks: newState
      }  
 
    default:
      return state  
  }
}


const store = createStore(todo)

export default store