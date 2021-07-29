import React from 'react';
import AppBar from '../components/AppBar';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import articles from '../data/articles';
import { useHistory } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'title', headerName: 'Title', width: 150},
    { field: 'author', headerName: 'Author', width: 100},
    { field: 'publishDate', headerName: 'Date', type: 'date', width: 100},
    { field: 'shortDescription', headerName: 'Short Desc',  width: 120},
    { field: 'longDescription', headerName: 'Description', width: 250},
    { field: 'mainImage', headerName: 'Image', width: 300}
];

const rows = articles;

const Admin = () => {

    const history = useHistory();

    const handleCreate = () => {
        history.push("/create-article");
    }

    return (
        <>
            <AppBar title="Admin" />   
            <div style={{ height: 600, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
            </div> 
            <Button variant="contained" color="primary" onClick={handleCreate}>Create Article</Button> 
        </>
    );
};

export default Admin;