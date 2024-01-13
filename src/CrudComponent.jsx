import React, { useState } from 'react';

const CrudComponent = () => {
  // Mock data
  const initialData = [
  ];

  // State to hold the data
  const [data, setData] = useState(initialData);

  // State for form input
  const [newItem, setNewItem] = useState('');

  // Function to add a new item
  const addItem = () => {
    const newItemObject = { id: data.length + 1, name: newItem };
    setData([...data, newItemObject]);
    setNewItem('');
  };

  // Function to update an item
  const updateItem = (id, newName) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, name: newName } : item
    );
    setData(updatedData);
  };

  // Function to delete an item
  const deleteItem = id => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h1>CRUD Operations</h1>

      {/* Create */}
      <div>
        <input
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* Read */}
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <button onClick={() => updateItem(item.id, prompt('Enter new name:'))}>
              Update
            </button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;