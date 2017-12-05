import { UPDATE_REQUEST } from '../actions'

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_REQUEST:
      return action.payload
    default:
     return [...state]
  }
}
