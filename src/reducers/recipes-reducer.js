import { UPDATE_RECIPES_REQUEST } from '../actions'

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case INDEX_RECIPES_SUCCESS:
      return action.payload.data
    case INDEX_RECIPES_FAILURE:
      return action.payload.error
    default:
     return [...state]
  }
}
