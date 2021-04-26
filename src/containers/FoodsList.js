import RestaurantIcon from '@material-ui/icons/Restaurant';
import PropTypes from 'prop-types';

import {
  Box,
  CircularProgress,
  GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, makeStyles, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

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

const FoodsList = (foodItems) => {
  const classes = useStyles();
  return (
    <Box p={5}>
      <div className={classes.root}>
      {
          foodItems.foodItems.length === 0
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
        {foodItems.foodItems.map((image) => (
          <GridListTile key={image[1].id}>
            <img src={image[1].src.landscape} alt={image[1].title} />
            <Link to={`/details/${image[1].id}`}>
              <GridListTileBar
                title={image[1].photographer}
                subtitle={<span>by: {image[1].photographer}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${image[1].title}`} className={classes.icon}>
                    <RestaurantIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>

        }

    </div>
    </Box>
  );
};

FoodsList.propTypes = {
  foodItems: PropTypes.array.isRequired,
};

export default FoodsList;
