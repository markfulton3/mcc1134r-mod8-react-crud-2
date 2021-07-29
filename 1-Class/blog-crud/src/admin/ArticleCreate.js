import React from 'react';
import AppBar from '../components/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
  }));

const ArticleCreate = () => {

    const classes = useStyles();

    const handleSubmit = () => {
        alert("form submitted");
    };

    return (
        <>
            <AppBar title="Create Article" />    
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required id="title" label="Title" defaultValue="" fullWidth />
                    <TextField id="author" label="Author" defaultValue="" fullWidth/>
                    <TextField id="shortDescription" label="Short Description" defaultValue="" fullWidth/>
                    <TextField id="longDescription" label="Long Description" multiline rows={3} fullWidth/>
                    <TextField id="mainImage" label="MainImage" defaultValue="https://source.unsplash.com/random/" fullWidth/>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </form>     
        </>
    );
};

export default ArticleCreate;