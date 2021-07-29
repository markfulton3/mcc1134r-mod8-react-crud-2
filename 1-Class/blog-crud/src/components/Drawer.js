import React from 'react';

import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import CreateIcon from '@material-ui/icons/Create';
import settings from '../data/settings';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: `${settings.drawerWidth}px`,
        flexShrink: 0,
      },
      drawerPaper: {
        width: `${settings.drawerWidth}px`,
      },
  }));


const Drawer = props => {
    const { history } = props;

    const classes = useStyles(props.classes);
    const itemsList = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => history.push('/')
        }, 
        {
            text: 'Articles',
            icon: <AssignmentIcon />,
            onClick: () => history.push('/articles')
        },
        {
            text: 'Contact',
            icon: <CreateIcon />,
            onClick: () => history.push('/contact')
        }, 
        {
            text: 'About',
            icon: <PersonIcon />,
            onClick: () => history.push('/about')
        },
        {
            text: 'Admin',
            icon: <SettingsIcon />,
            onClick: () => history.push('/admin')
        },
    ];

    return (
        <MUIDrawer 
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper
            }}
            anchor="left"
        >
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                    <ListItem button key={text} onClick={onClick}>
                        { icon && <ListItemIcon>{icon}</ListItemIcon> }
                        <ListItemText primary={text} />
                    </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    )
};

export default withRouter(Drawer);