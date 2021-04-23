import { useDispatch, useSelector } from 'react-redux';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import {
  Box,
  CircularProgress,
  GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, makeStyles,
} from '@material-ui/core';
import { useEffect } from 'react';
import { getPizza } from '../store/actions';

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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const FoodsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => dispatch(getPizza()), []);

  const classes = useStyles();
  console.log(Object.entries(state.pizza));
  if (Object.entries(state.pizza).length !== 0) {
    console.log(Object.entries(state.pizza.photos));
    console.log('------');
    console.log(state);
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
            : <GridList cellHeight={280} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {state.pizza.photos.map((image) => (
          <GridListTile key={image.id}>
            <img src={image.src.landscape} alt={image.title} />
            <GridListTileBar
              title={image.photographer}
              subtitle={<span>by: {image.photographer}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${image.title}`} className={classes.icon}>
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
