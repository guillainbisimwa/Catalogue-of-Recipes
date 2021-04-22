import axios from 'axios';

require('dotenv').config();

const options = {
  method: 'GET',
  url: process.env.SERVER_URL,
  params: {
    query: 'pizza', locale: 'en-US', per_page: '5', page: '1', orientation: 'landscape',
  },
  headers: process.env.HEADER,
};

const getPizza = () => (dispatch) => {
  axios.request(options).then((response) => {
    if (response) {
      dispatch(
        {
          type: 'PIZZA',
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

export default getPizza;
