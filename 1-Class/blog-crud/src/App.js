import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Articles from './pages/Articles';
import Admin from './admin/Admin';
import ArticleCreate from './admin/ArticleCreate';
import {Route, Switch} from 'react-router-dom';
import Drawer from './components/Drawer';
import settings from './data/settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${settings.drawerWidth}px)`,
    height: theme.spacing(10),
    marginLeft: '{drawerWidth}px',
  },
  
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
    height: '90vh'
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Drawer />
      <main className={classes.content}>
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact from="/contact" render={props => <Contact {...props} />} />
          <Route exact from="/about" render={props => <About {...props} />} />    
          <Route exact from="/articles" render={props => <Articles {...props} />} />    
          <Route exact from="/admin" render={props => <Admin {...props} />} />      
          <Route exact from="/create-article" render={props => <ArticleCreate {...props} />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
