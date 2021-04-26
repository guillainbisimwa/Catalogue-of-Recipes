import {
  Box, Grid, MenuItem, TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchContainer = ({ filterHandler }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
    filterHandler(event.target.value);
  };

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
          onChange={onChange}
          select
          value={value}
          fullWidth
          label="Select the category from the drop-down menu"
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
