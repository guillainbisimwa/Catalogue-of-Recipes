import axios from 'axios';

const options = {
  method: 'GET',
  url: process.env.REACT_APP_SERVER_URL,
  headers: {
    authorization: process.env.REACT_APP_AUTH,
    'x-rapidapi-key': process.env.REACT_APP_KEY,
    'x-rapidapi-host': process.env.REACT_APP_HOST,
  },
};

export const getPizza = () => (dispatch) => {
  const optionsPizza = options;
  optionsPizza.params = {
    query: 'pizza', locale: 'en-US', per_page: '6', page: '1', orientation: 'landscape',
  };
  axios(optionsPizza).then((response) => {
    if (response) {
      dispatch(
        {
          type: 'CREATE_PIZZA',
          payload: response.data,
        },
      );
    }
  }).catch((error) => (
    {
      type: 'PIZZA_ERROR',
      payload: error,
    }
  ));
};

export const getBurger = () => (dispatch) => {
  const optionsBurger = options;
  optionsBurger.params = {
    query: 'burger', locale: 'en-US', per_page: '6', page: '1', orientation: 'landscape',
  };
  axios(optionsBurger).then((response) => {
    if (response) {
      dispatch(
        {
          type: 'CREATE_BURGER',
          payload: response.data,
        },
      );
    }
  }).catch((error) => (
    {
      type: 'BURGER_ERROR',
      payload: error,
    }
  ));
};

export const getSteak = () => (dispatch) => {
  const optionsSteak = options;
  optionsSteak.params = {
    query: 'meat', locale: 'en-US', per_page: '6', page: '1', orientation: 'landscape',
  };
  axios(optionsSteak).then((response) => {
    if (response) {
      dispatch(
        {
          type: 'CREATE_STEAK',
          payload: response.data,
        },
      );
    }
  }).catch((error) => (
    {
      type: 'STEAK_ERROR',
      payload: error,
    }
  ));
};

export const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  payload: category,
});
