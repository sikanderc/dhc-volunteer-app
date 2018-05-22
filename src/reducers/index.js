import { combineReducers } from 'redux'
import auth from './auth'
import hourLedger from './hourLedger'

export default combineReducers({
  auth, hourLedger
})
