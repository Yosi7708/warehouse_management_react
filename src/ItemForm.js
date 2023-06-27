import { useState, useEffect } from 'react';

function ItemForm({ addItem, updateItem, editIndex, items, setEditIndex, setShowInputs }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [qty, setQty] = useState('');

    useEffect(() => {
        if (editIndex !== null) {
            const item = items[editIndex];
            setName(item.name);
            setLocation(item.location);
            setQty(item.qty);
        }
    }, [editIndex, items]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && location && qty) {
            const newItem = {
                name,
                location,
                qty
            };
            if (editIndex !== null) {
                updateItem(editIndex, newItem);
            } else {
                addItem(newItem);
            }
            setName('');
            setLocation('');
            setQty('');
            setEditIndex(null);
            setShowInputs(false);
        }
    };

    return (
        <form className="formContainer" onSubmit={handleSubmit}>
            <input
                className="inputField"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="inputField"
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                className="inputField"
                type="number"
                placeholder="Quantity"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
            />
            <div className="buttonContainer">
                <button className="updateButton" type="submit">
                    {editIndex !== null ? 'Update Item' : 'Add Item'}
                </button>
                <button
                    className="cancelButton"
                    type="button"
                    onClick={() => {
                        setName('');
                        setLocation('');
                        setQty('');
                        setEditIndex(null);
                        setShowInputs(false);
                    }}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default ItemForm;
