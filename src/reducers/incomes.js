const income = (state, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return action.value;
    default:
      return state
  }
}

const incomes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return [
        ...state,
        income(undefined, action)
    ]
    default:
      return state
  }
}

export default incomes