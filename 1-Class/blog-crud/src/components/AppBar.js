import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core/';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import settings from '../data/settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      width: `calc(100% - ${settings.drawerWidth}px)`,
      height: `${settings.appBarHeight}px`,
      left: `calc(${settings.drawerWidth}px)`,
    },
    icon: {
        marginRight: theme.spacing(2)
    }

  }));

const AppBar = props => {
    const {title} = props;
    const classes = useStyles();

    return (
        <MuiAppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <CameraIcon className={classes.icon}/>
                <Typography variant="h6" component="h2" color="inherit" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;