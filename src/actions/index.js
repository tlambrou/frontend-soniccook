import axios from 'axios'
import serverPath from '../paths'

export const INDEX_RECIPES_SUCCESS = "INDEX_RECIPES_SUCCESS"
export const INDEX_RECIPES_REQUEST = "INDEX_RECIPES_REQUEST"
export const INDEX_RECIPES_FAILURE = "INDEX_RECIPES_FAILURE"

export const indexRecipesSuccess = (data) => {
  return {
    type: INDEX_RECIPES_SUCCESS,
    payload: { data }
  }
}

export const updateRecipesRequest  = () => {
  return (dispatch) => {
    axios.get(`${serverPath}/recipes/`)
    .then((response) => {
      console.log(response.data)
      dispatch(indexRecipesSuccess(response.data))
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
      dispatch(indexRecipesFailure(error))
    })
  }
}

export const indexRecipesFailure = (error) => {
  return {
    type: INDEX_RECIPES_FAILURE,
    payload: { error }
  }
}
