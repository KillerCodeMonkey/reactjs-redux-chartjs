const addIncome = (value) => ({
  type: 'ADD_INCOME',
  value
});

const addCost = (value) => ({
  type: 'ADD_COST',
  value
});

const addSaving = (value) => ({
  type: 'ADD_SAVING',
  value
});

export default {
    addIncome,
    addCost,
    addSaving
};