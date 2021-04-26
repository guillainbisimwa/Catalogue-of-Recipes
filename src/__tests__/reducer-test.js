import pizzaReducer from '../store/reducers/pizza';
import burgerReducer from '../store/reducers/burger';
import steakReducer from '../store/reducers/steak';
import filterReducer from '../store/reducers/filter';

describe('mainReducer', () => {
  describe('pizzaReducer undefined case', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(pizzaReducer(undefined, {})).toEqual({});
    });
  });

  describe('burgerReducer undefined case', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(burgerReducer(undefined, {})).toEqual({});
    });
  });

  describe('steakReducer undefined case', () => {
    it('should return an empty object when nothing is passed to it', () => {
      expect(steakReducer(undefined, {})).toEqual({});
    });
  });

  describe('CREATE_PIZZA case', () => {
    it('should return an array containing items inside the action payload', () => {
      expect(pizzaReducer([], { type: 'CREATE_PIZZA', payload: ['pizza 1', 'pizza 2'] })).toEqual(['pizza 1', 'pizza 2']);
    });
  });

  describe('CREATE_BURGER case', () => {
    it('should return an array containing items inside the action payload', () => {
      expect(burgerReducer([], { type: 'CREATE_BURGER', payload: ['burger 1', 'burger 2'] })).toEqual(['burger 1', 'burger 2']);
    });
  });

  describe('CREATE_STEAK case', () => {
    it('should return an array containing items inside the action payload', () => {
      expect(steakReducer([], { type: 'CREATE_STEAK', payload: ['steak 1', 'steak 2'] })).toEqual(['steak 1', 'steak 2']);
    });
  });

  describe('CREATE_STEAK case', () => {
    it('shouldn\'t return an array containing items inside the action payload', () => {
      expect(steakReducer([], { type: 'CREATE_STEAK', payload: ['steak', 'steak'] })).not.toEqual(['steak 1', 'steak 2']);
    });
  });

  describe('CHANGE_FILTER case', () => {
    const items = [
      { category: 'test 1' },
      { category: 'test 2' },
      { category: 'test 3' },
    ];

    it('should return an array of one object', () => {
      expect(filterReducer(items, { type: 'CHANGE_FILTER', payload: [{ category: 'test 2' }] })).toEqual([{ category: 'test 2' }]);
    });
  });
});
