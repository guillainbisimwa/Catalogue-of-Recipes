import {
  Box, Grid, MenuItem, TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const SearchContainer = ({ filterHandler }) => {
  const categories = ['All', 'Pizza', 'Burger', 'Steak'];
  const categoryList = categories.map((category) => (
    <MenuItem key={category} value={category}>
      {category}
    </MenuItem>
  ));
  return (
    <Box p={5}>
      <Grid item xs={12}>
        <TextField
          onChange={(e) => filterHandler(e.target.value)}
          select
          fullWidth
          label="Select the category from the drop-down menu"
          value='All'
          variant="outlined"
        >
          {categoryList}
        </TextField>
      </Grid>
    </Box>
  );
};

SearchContainer.propTypes = {
  filterHandler: PropTypes.func,
};

SearchContainer.defaultProps = {
  filterHandler: () => {},
};

export default SearchContainer;
