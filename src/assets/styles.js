import { makeStyles } from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
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
  rootDetails: {
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

export default useStyles;
