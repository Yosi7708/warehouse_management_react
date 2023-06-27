import './App.css';
import { useState } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function App() {
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [showInputs, setShowInputs] = useState(false);

    const addItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const updateItem = (index, newItem) => {
        const updatedItems = [...items];
        updatedItems[index] = newItem;
        setItems(updatedItems);
    };

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setShowInputs(true);
    };

    return (
        <div className="appContainer">
            <h1>Welcome to my warehouse</h1>
            {!showInputs && (
                <button
                    className="addButton"
                    onClick={() => setShowInputs(true)}
                >
                    Add New Item
                </button>
            )}
            {showInputs && (
                <ItemForm
                    addItem={addItem}
                    updateItem={updateItem}
                    editIndex={editIndex}
                    items={items}
                    setEditIndex={setEditIndex}
                    setShowInputs={setShowInputs}
                />
            )}
            <ItemList
                items={items}
                deleteItem={deleteItem}
                handleEdit={handleEdit}
            />
        </div>
    );
}

export default App;
