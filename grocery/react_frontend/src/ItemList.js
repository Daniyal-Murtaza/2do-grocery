import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Container, Alert } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = ({ onEdit }) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/items/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => {
                console.error('Error fetching items:', error);
                setError(error.message);
            });
    }, []);

    const deleteItem = (id) => {
        fetch(`http://localhost:8000/api/item/${id}/delete/`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete the item');
                }
                setItems(items.filter(item => item.id !== id));
            })
            .catch(error => console.error('Error deleting item:', error));
    };

    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom>
                Item List
            </Typography>
            {error ? (
                <Alert severity="error">{error}</Alert>
            ) : (
                <List>
                    {items.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={item.name} />
                            <IconButton edge="end" onClick={() => onEdit(item)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge="end" onClick={() => deleteItem(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default ItemList;
