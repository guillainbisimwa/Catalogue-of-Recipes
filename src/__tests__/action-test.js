import moxios from 'moxios';
import makeMockStore from '../../Utils';
import {
  changeFilter, getBurger, getPizza, getSteak,
} from '../store/actions';

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
    per_page: '1',
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

  it('Store is updated correctly', () => {
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

  it('should return an object', () => {
    expect(changeFilter('Burger')).toEqual({ type: 'CHANGE_FILTER', payload: 'Burger' });
  });

  it('should the filtered item', () => {
    expect(changeFilter('Burger')).toEqual({ type: 'CHANGE_FILTER', payload: 'Burger' });
  });

  it('should not return an array', () => {
    expect(changeFilter('not an array')).not.toEqual(['CHANGE_FILTER', 'not an array']);
  });

  it('should return an empty array pizza', () => store.dispatch(getPizza())
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));

  it('should\'t return an empty object of burger', () => store.dispatch(getBurger())
    .then(() => {
      expect(store.getActions()).not.toEqual({ Test: 'Club' });
    }));

  it('should return an empty array steak', () => store.dispatch(getSteak())
    .then(() => {
      expect(store.getActions()).toEqual([]);
    }));
});
