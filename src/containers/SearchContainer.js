import {
  Box, Grid, MenuItem, TextField,
} from '@material-ui/core';

const SearchContainer = () => (
    <Box p={5}>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          label="Select"
          variant="outlined"
        >
          <MenuItem >
            Test 1
          </MenuItem>
          <MenuItem >
            Test 2
          </MenuItem>
        </TextField>
      </Grid>
    </Box>
);

export default SearchContainer;
