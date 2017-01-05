const saving = (state, action) => {
  switch (action.type) {
    case 'ADD_SAVING':
      return action.value;
    default:
      return state
  }
}

const savings = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SAVING':
      return [
        ...state,
        saving(undefined, action)
    ]
    default:
      return state
  }
}

export default savings