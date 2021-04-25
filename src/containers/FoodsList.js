import { useDispatch, useSelector } from 'react-redux';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import {
  Box,
  CircularProgress,
  GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, makeStyles, Typography,
} from '@material-ui/core';
import { useEffect } from 'react';
import { getPizza, getBurger, getSteak } from '../store/actions';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  circularProgress: {
    padding: '50px',
  },
  gridList: {
    width: '100%',
  },
  title: {
    display: 'flex',
  },
  iconTop: {
    background: '#d64646',
    color: '#eeeeee',
    marginRight: '10px',
    marginBottom: '10px',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    background: 'rgba(255, 255, 255, 0.14)',

  },
}));

const FoodsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => dispatch(getPizza()), []);
  useEffect(() => dispatch(getBurger()), []);
  useEffect(() => dispatch(getSteak()), []);

  const classes = useStyles();

  let myfoods = [];
  // eslint-disable-next-line max-len
  if (Object.entries(state.pizza).length !== 0 && Object.entries(state.burger).length !== 0 && Object.entries(state.steak).length !== 0) {
    // eslint-disable-next-line max-len
    myfoods = Object.entries(state.pizza.photos).concat(Object.entries(state.burger.photos), Object.entries(state.steak.photos));
  }

  return (
    <Box p={5}>
      <div className={classes.root}>
      {
          Object.entries(state.pizza).length === 0
            ? <Box>
            <div className={classes.circularProgress}>
              <CircularProgress size={80} color="secondary" />
            </div>

          </Box>
            : <GridList cols={4} cellHeight={280} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.title}>
            <IconButton className={classes.iconTop}>
              <RestaurantIcon />
            </IconButton>
            <Typography variant="h4" component="h4">Catalogue of Recipes</Typography>
          </ListSubheader>
        </GridListTile>
        {myfoods.map((image) => (
          <GridListTile key={image[1].id}>
            <img src={image[1].src.landscape} alt={image[1].title} />
            <GridListTileBar
              title={image[1].photographer}
              subtitle={<span>by: {image[1].photographer}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${image[1].title}`} className={classes.icon}>
                  <RestaurantIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

        }

    </div>
    </Box>
  );
};

export default FoodsList;
