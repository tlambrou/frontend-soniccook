import axios from 'axios'
import serverPath from '../paths'

export const UPDATE_RECIPES_SUCCESS = "UPDATE_RECIPES_SUCCESS"
export const UPDATE_RECIPES_REQUEST = "UPDATE_RECIPES_SUCCESS"
export const UPDATE_RECIPES_FAILURE = "UPDATE_RECIPES_FAILURE"

export const updateRecipesSuccess = (data) => {
  return {
    type: UPDATE_RECIPES_SUCCESS,
    payload: { data }
  }
}

export const updateRecipesRequest  = () => {
  return (dispatch) => {
    axios.get(`${serverPath}/recipes/`)
    .then((response) => {
      console.log(response.data)
      dispatch(updateRecipesSuccess(response.data))
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
      dispatch(updateRecipesFailure(error))
    })
  }
}

export const updateRecipesFailure = (error) => {
  return {
    type: UPDATE_RECIPES_FAILURE,
    payload: error
  }
}
