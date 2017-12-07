import { UPDATE_RECIPES_REQUEST } from '../actions'

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_RECIPES_SUCCESS:
      return action.payload.data
    default:
     return [...state]
  }
}
