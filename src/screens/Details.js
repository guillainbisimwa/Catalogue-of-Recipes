import {
  AppBar,
  // eslint-disable-next-line max-len
  Avatar, Box, Card, CardContent, CardHeader, CardMedia, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SyncIcon from '@material-ui/icons/Sync';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { getBurger, getPizza, getSteak } from '../store/actions';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100%',
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: '#aa0000',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    color: '#ffffff',
  },
  link: {
    color: '#000000',
    'text-decoration': 'none',
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
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link to='/'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <KeyboardBackspaceIcon />
          </IconButton>
        </Link>
          <Typography variant="h6" noWrap>
            Catalogue of Recipes
          </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
        <Link to='/' className={classes.link}>
          <ListItem button key='home' >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button key='sync'>
            <ListItemIcon><SyncIcon /></ListItemIcon>
            <ListItemText primary='Sync' />
          </ListItem>
          <ListItem button key='help'>
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <ListItemText primary='Help' />
          </ListItem>
          <ListItem button key='settings'>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </List>
      </div>
    </Drawer>
    <main className={classes.content}>
      <Toolbar />

    <Box m={5}>
      <Card className={classes.main}>
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
    </main>
  </div>
  );
};

export default Details;
