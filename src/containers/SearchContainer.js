import {
  Box, Grid, MenuItem, TextField,
} from '@material-ui/core';

const SearchContainer = () => {
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
          select
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

export default SearchContainer;
