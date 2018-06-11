export const LOG = 'LOG'
export const LOG_SUCCESS = 'LOG_SUCCESS'
export const LOG_FAILURE = 'LOG_FAILURE'
export const CANCEL_LOG = 'CANCEL_LOG'


const initialState = {
  apiResponse: null,
  isSubmitting: false,
  hourLog: {},
  logError: false,
  logErrorMessage: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG:
      return {
        ...state,
        isSubmitting: true,
        logError: false
      }
    case LOG_SUCCESS:
      return {
        isSubmitting: false,
        hourLog: action.hourLog
      }
    case LOG_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        logError: true,
        logErrorMessage: action.error.message
      }
    case CANCEL_LOG:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
