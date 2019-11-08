import { RESET_PASSWORD, PASS_EMAIL } from '../constants/types'

export const resetPassword = (value) => dispatch => {
  console.log("resetpassword",value)
  dispatch({
      type: RESET_PASSWORD,
      payload: value
  })
}

export const passEmail = (value) => dispatch => {
  console.log(value)
  dispatch({
    type: PASS_EMAIL,
    payload: value
})
}