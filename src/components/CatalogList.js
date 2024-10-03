import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllItems, deleteItem, addItem } from '../utils/database';

function CatalogList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const fetchedItems = await fetchAllItems();
    setItems(fetchedItems);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await addItem(newItem);
    setNewItem({ name: '', price: '' });
    loadItems();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="catalog-list">
      <h2>Catalog Items</h2>
      <button onClick={handlePrint}>Print Catalog</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <Link to={`/item/${item.id}`}>Edit</Link>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default CatalogList;