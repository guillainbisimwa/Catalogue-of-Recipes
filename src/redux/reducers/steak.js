const CREATE_STEAK = 'CREATE_STEAK';

const steakReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STEAK:
      return action.payload;
    default:
      return state;
  }
};

export default steakReducer;
