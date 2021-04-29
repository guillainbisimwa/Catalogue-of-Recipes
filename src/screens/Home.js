import {
  AppBar, CssBaseline, Divider, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Toolbar, Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SyncIcon from '@material-ui/icons/Sync';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import App from '../components/App';
import styles from '../asset/styles';

const Home = () => {
  const classes = styles();

  return (
    <div className={classes.rootDetails}>
    <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
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
          <ListItem button key='home'>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
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
      <App />
    </main>
  </div>
  );
};

export default Home;
