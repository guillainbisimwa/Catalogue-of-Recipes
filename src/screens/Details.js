import {
  Avatar, Box, Card, CardContent, CardHeader, CardMedia, makeStyles, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBurger, getPizza, getSteak } from '../store/actions';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '100%',
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: '#ff0000',
  },
}));

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => dispatch(getPizza()), []);
  useEffect(() => dispatch(getBurger()), []);
  useEffect(() => dispatch(getSteak()), []);

  const classes = useStyles();

  let foods = [];
  // eslint-disable-next-line max-len
  foods = Object.entries(state.pizza.photos).concat(Object.entries(state.burger.photos), Object.entries(state.steak.photos));
  const myFoods = foods.find((product) => product[1].id.toString() === id);
  return (
    <Box m={5}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {myFoods[1].photographer[0]}
            </Avatar>
          }
          title={myFoods[1].photographer}
          subheader="September 10, 2022"
        />
        <CardMedia
          className={classes.media}
          image={myFoods[1].src.landscape}
          title={myFoods[1].photographer}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
