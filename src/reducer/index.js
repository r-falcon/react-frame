const defaultState = {
  number: 0,
}

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state.number += 1
      return { ...state }
    case 'DECREMENT':
      state.number -= 1
      return { ...state }
    default:
      return state
  }
}

export default counter
