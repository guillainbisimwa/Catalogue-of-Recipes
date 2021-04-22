const CREATE_PIZZA = 'CREATE_PIZZA';

const pizzaReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_PIZZA:
      return [...state, payload];
    default:
      return state;
  }
};

export default pizzaReducer;
