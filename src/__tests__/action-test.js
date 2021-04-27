import moxios from 'moxios';
import makeMockStore from '../../Utils';
import { getPizza } from '../store/actions';

const expectedState = [{
  title: 'Example title 1',
  body: 'Some Text',
}, {
  title: 'Example title 2',
  body: 'Some Text',
}, {
  title: 'Example title 3',
  body: 'Some Text',
}];

const store = makeMockStore(expectedState);
const apiUrl = {
  method: 'GET',
  url: process.env.REACT_APP_SERVER_URL,
  headers: {
    authorization: process.env.REACT_APP_AUTH,
    'x-rapidapi-key': process.env.REACT_APP_KEY,
    'x-rapidapi-host': process.env.REACT_APP_HOST,
  },
  params: {
    query: 'pizza',
    locale: 'en-US',
    per_page: '6',
    page: '1',
    orientation: 'landscape',
  },
};

describe('getPizza', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    moxios.wait(() => {
      moxios.stubOnce('GET', apiUrl, {
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(getPizza()).then(() => {
      const newState = store.getState();
      expect(Object.entries(newState)).toEqual(Object.entries(expectedState));
    });
  });
});
