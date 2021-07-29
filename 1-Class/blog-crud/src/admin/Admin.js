import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import settings from '../data/settings';


const Admin = () => {
    const [rows, setRows] = useState([]);

    const history = useHistory();

    // similar to componentDidMount()
    useEffect( () => {
        // Go get data
        // fetch data 
        getApiData();
        // eslint-disable-next-line
    }, []);

    const getApiData = () => {
        fetch(settings.apiurl, {method: "GET"})
            .then(response => response.json())
            .then(data => loadData(data));
    };

    const loadData = (data) => {
        setRows(data);
    };

    const handleEdit = (e) => {
        const itemId = e.currentTarget.parentElement.getAttribute('data-value');
        console.log('edit item:' + itemId);
        history.push("/article/edit/" + itemId);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const itemId = e.currentTarget.parentElement.getAttribute('data-value');
        console.log('delete item:' + itemId);
        fetch(settings.apiurl + '/' + itemId, {method: "DELETE"})
                .then(response => response.json())
                .then(res => {
                    getApiData();
                });
    };

    const handleCreate = () => {
        history.push("/article/create");
    }

    const getId = (params) => {
        return `${params.id}`;
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'title', headerName: 'Title', width: 150, editable: true},
        { field: 'author', headerName: 'Author', width: 100, editable: true},
        { field: 'publishDate', headerName: 'Date', type: 'date', width: 100, editable: true},
        { field: 'shortDescription', headerName: 'Short Desc',  width: 120, editable: true},
        { field: 'longDescription', headerName: 'Description', width: 250, editable: true},
        { field: 'mainImage', headerName: 'Image', width: 300, editable: true},
        { field: 'Edit', headerName: 'Edit', width: 200, valueGetter: getId, renderCell: (params) => (
            <>
                <Button variant="contained" color="primary" size="small" onClick={handleEdit}>Edit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={handleDelete}>Delete</Button>
            </>
        )}
    ];
    return (
        <>
            <AppBar title="Admin" />   
            <div style={{ height: 600, width: '100%' }}>
              <DataGrid 
              rows={rows} 
              columns={columns} 
              pageSize={10} 
              />
            </div> 
            <Button variant="contained" color="primary" onClick={handleCreate}>Create Article</Button>             
        </>
    );
};

export default Admin;