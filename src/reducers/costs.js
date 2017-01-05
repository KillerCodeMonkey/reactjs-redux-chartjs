const cost = (state, action) => {
  switch (action.type) {
    case 'ADD_COST':
      return action.value;
    default:
      return state
  }
}

const costs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COST':
      return [
        ...state,
        cost(undefined, action)
    ]
    default:
      return state
  }
}

export default costs