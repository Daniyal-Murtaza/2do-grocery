import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const AddItem = ({ editingItem, onSave }) => {
    const [itemName, setItemName] = useState('');

    useEffect(() => {
        if (editingItem) {
            setItemName(editingItem.name);
        }
    }, [editingItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = editingItem 
            ? `http://localhost:8000/api/item/${editingItem.id}/update/`
            : 'http://localhost:8000/api/add-item/';
        const method = editingItem ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: itemName }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item saved:', data);
                setItemName('');
                onSave(); // Call the callback to refresh the item list
            })
            .catch(error => console.error('Error saving item:', error));
    };

    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom>
                {editingItem ? 'Edit Item' : 'Add Item'}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    fullWidth
                    label="Enter item name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    {editingItem ? 'Update' : 'Add'}
                </Button>
            </Box>
        </Container>
    );
};

export default AddItem;
