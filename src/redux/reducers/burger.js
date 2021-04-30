const CREATE_BURGER = 'CREATE_BURGER';

const burgerReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BURGER:
      return action.payload;
    default:
      return state;
  }
};

export default burgerReducer;
