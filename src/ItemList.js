function ItemList({ items, deleteItem, handleEdit }) {
    return (
        <table className="itemList">
            <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Qty</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.location}</td>
                    <td>{item.qty}</td>
                    <td className="actionButtons">
                        <button
                            className="editButton"
                            onClick={() => handleEdit(index)}
                        >
                            Edit
                        </button>
                        <button
                            className="deleteButton"
                            onClick={() => deleteItem(index)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ItemList;
