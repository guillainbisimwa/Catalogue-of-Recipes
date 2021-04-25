import axios from 'axios';

const REACT_APP_SERVER_URL = 'https://pexelsdimasv1.p.rapidapi.com/v1/search';
const REACT_APP_AUTH = '563492ad6f91700001000001fbafab0137f44501a86b52d3698db07d';
const REACT_APP_KEY = '2395707499mshec9ceae70360b03p157476jsn0a0ab52f0884';
const REACT_APP_HOST = 'PexelsdimasV1.p.rapidapi.com';

const options = {
  method: 'GET',
  url: REACT_APP_SERVER_URL,
  headers: {
    authorization: REACT_APP_AUTH,
    'x-rapidapi-key': REACT_APP_KEY,
    'x-rapidapi-host': REACT_APP_HOST,
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
