import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodsList from '../containers/FoodsList';
import SearchContainer from '../containers/SearchContainer';
import {
  getPizza, getBurger, getSteak, changeFilter,
} from '../store/actions';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const statePizza = useSelector((state) => state.pizza);
  // const stateBurger = useSelector((state) => state.burger);
  // const stateSteak = useSelector((state) => state.steak);
  const categories = useSelector((state) => state.filter);

  useEffect(() => dispatch(getPizza()), []);
  useEffect(() => dispatch(getBurger()), []);
  useEffect(() => dispatch(getSteak()), []);

  let myFoods = [];
  // eslint-disable-next-line max-len
  if (Object.entries(state.pizza).length !== 0 && Object.entries(state.burger).length !== 0 && Object.entries(state.steak).length !== 0) {
    if (categories === 'All') {
      // eslint-disable-next-line max-len
      myFoods = Object.entries(state.pizza.photos).concat(Object.entries(state.burger.photos), Object.entries(state.steak.photos));
    } else if (categories === 'Pizza') {
      myFoods = Object.entries(state.pizza.photos);
    } else if (categories === 'Burger') {
      myFoods = Object.entries(state.burger.photos);
    } else if (categories === 'Steak') {
      myFoods = Object.entries(state.steak.photos);
    }
  }

  const handleFilterChange = (category) => dispatch(changeFilter(category));

  return (
  <>
    <SearchContainer filterHandler={handleFilterChange}/>
    <FoodsList foodItems={myFoods} />
  </>
  );
};

export default App;
