const CREATE_PIZZA = 'CREATE_PIZZA';

const pizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PIZZA:
      return action.payload;
    default:
      return state;
  }
};

export default pizzaReducer;
