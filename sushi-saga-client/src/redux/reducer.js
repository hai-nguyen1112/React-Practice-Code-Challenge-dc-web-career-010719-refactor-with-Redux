import {combineReducers} from 'redux'

const sushisReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_SUSHIS":
      return action.payload
    case "MORE_BUTTON_WAS_CLICKED":
      return action.payload
    case "SUSHI_WAS_CLICKED":
      return action.payload
    default:
      return oldState
  }
}

const emptyPlatesReducer = (oldState=[], action) => {
  switch (action.type) {
    case "EMPTY_PLATE_WAS_ADDED":
      return action.payload
    default:
      return oldState
  }
}

const walletReducer = (oldState=100, action) => {
  switch (action.type) {
    case "SUSHI_WAS_EATEN":
      return action.payload
    case "MONEY_WAS_SUBMITTED":
      return action.payload
    default:
      return oldState
  }
}

const inputMoneyReducer = (oldState=0, action) => {
  switch (action.type) {
    case "MONEY_WAS_ENTERED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  sushis: sushisReducer,
  emptyPlates: emptyPlatesReducer,
  wallet: walletReducer,
  inputMoney: inputMoneyReducer
})

export default rootReducer
