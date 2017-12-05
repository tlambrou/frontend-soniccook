import axios from 'axios'
import serverPath from '../paths'

export const UPDATE_SUCCESS = "UPDATE"
export const UPDATE_REQUEST = "UPDATE_REQUEST"
export const UPDATE_FAILURE = "SHOW_ERROR"

export const updateSuccess = (data) => {
  return {
    type: UPDATE_SUCCESS,
    payload: data
  }
}

export const updateRequest  = () => {
  return (dispatch) => {
    axios.get(`${serverPath}/recipes/`)
    .then((response) => {
      console.log(response.data)
      dispatch(updateSuccess(response.data))
    })
    .catch((error) => {
      console.log("Here is an error: ", error)
      dispatch(updateFailure(error))
    })
  }
}

export const updateFailure = (error) => {
  return {
    type: UPDATE_FAILURE,
    payload: error
  }
}
