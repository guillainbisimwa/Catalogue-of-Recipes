import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBurger, getPizza, getSteak } from '../store/actions';

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => dispatch(getPizza()), []);
  useEffect(() => dispatch(getBurger()), []);
  useEffect(() => dispatch(getSteak()), []);

  let foods = [];
  // eslint-disable-next-line max-len
  foods = Object.entries(state.pizza.photos).concat(Object.entries(state.burger.photos), Object.entries(state.steak.photos));
  const myFoods = foods.find((product) => product[1].id.toString() === id);
  return (
    <div>
      <img src={myFoods[1].src.landscape} alt={myFoods[1].photographer} />
      <div>{myFoods[1].url}</div>
    </div>
  );
};

export default Details;
