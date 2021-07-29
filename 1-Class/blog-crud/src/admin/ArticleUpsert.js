import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import AppBar from '../components/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import settings from '../data/settings';

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

const ArticleUpsert = (props) => {

    const { id } = props.match.params;
// eslint-disable-next-line
    const [ inputData, setInputData] = useState({title: '', author: '', shortDescription: '', longDescription: '', mainImage: ''});

    const history = useHistory();

    const classes = useStyles();

    const { handleSubmit, control, reset, setValue } = useForm({defaultValues: inputData});

    // similar to componentDidMount()
    useEffect( () => {
        console.log('inside useEffect ' + id);

        // Go get data
        // fetch data 
        if (id)
        {
            const getApiData = () => {
                fetch(settings.apiurl + '/' + id, {method: "GET"})
                    .then(response => response.json())
                    .then(data => loadData(data));
            };
            getApiData();
        } 
        
        // eslint-disable-next-line
    }, []);


    const loadData = (data) => {
        console.log('loadData:');
        console.log(data);
        reset({
            title: data.title,
            author: data.author,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            mainImage: data.mainImage
        });
    };

    const onSubmit = data => {
        let method = "GET";
        let url = "";
        if (!id)
        {
            // post new
            method = "POST";
            url = settings.apiurl;
            
        } else {
            // put change
            method = "PUT";
            url = settings.apiurl + '/' + id;
        }
        // console.log(id);
        // console.log(method);
        // console.log(data);
        // console.log(url);
        fetch(url, 
                {method: method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(response => response.json())
            .then(data => loadData(data))
            .then(res => {
                history.push("/admin");
            });

    };

    return (
        <>
            <AppBar title="Article Admin" />    
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller name="title" control={control} setValue={setValue} render={({field}) => (
                        <TextField label="Title" fullWidth {...field} />
                    )} />
                   <Controller name="author" control={control} setValue={setValue} render={({field}) => (
                        <TextField label="Author" fullWidth value={inputData.author}  {...field} />
                    )} />
                    <Controller name="shortDescription" control={control} setValue={setValue} render={({field}) => (
                        <TextField label="Short Description" fullWidth value={inputData.shortDescription} {...field} />
                    )} />
                    <Controller name="longDescription" control={control} setValue={setValue} render={({field}) => (
                        <TextField label="Long Description" fullWidth value={inputData.longDescription} {...field} />
                    )} />
                    <Controller name="mainImage" control={control} setValue={setValue} render={({field}) => (
                        <TextField label="Main Image" fullWidth value={inputData.mainImage} {...field} />
                    )} />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </div>
            </form>     
        </>
    );
};

export default ArticleUpsert;