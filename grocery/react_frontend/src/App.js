import React, { useState } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import { Container, Typography, Box } from '@mui/material';
import './App.css';
import logo from './logo.jpeg'; // Assuming the logo is in the src directory

const App = () => {
    const [editingItem, setEditingItem] = useState(null);

    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const handleSave = () => {
        setEditingItem(null);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="Logo" className="App-logo" />
            
                <Typography variant="body1" component="p" className="App-description">
                    Manage your Groceries efficiently. Add new items, edit existing ones, or remove them as needed. 
                    Enjoy the seamless experience of React and Django integration.
                </Typography>
                <Container maxWidth="sm">
                    <AddItem editingItem={editingItem} onSave={handleSave} />
                    <ItemList onEdit={handleEdit} />
                </Container>
            </header>
        </div>
    );
};

export default App;
